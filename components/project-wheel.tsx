"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { getProjectLogoVisual, type Project } from "@/data/projects";
import { Chevron } from "./chevron";

export function ProjectWheel({ projects, selectedSlug, onSelect }: {
  projects: Project[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
}) {
  const track = useRef<HTMLDivElement>(null);
  const gesture = useRef<{ x: number; y: number; id: number; dragging: boolean } | null>(null);
  const suppressClick = useRef(false);
  const wheelGesture = useRef({ accumulated: 0, lastEvent: 0, cooldown: 0 });
  const selectedIndex = Math.max(0, projects.findIndex(project => project.slug === selectedSlug));
  const rotate = (step: number) => {
    const index = (selectedIndex + step % projects.length + projects.length) % projects.length;
    onSelect(projects[index].slug);
  };

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const wheel = wheelGesture.current;
    const onWheel = (event: WheelEvent) => {
      // Keep ordinary vertical scrolling available for reading the project.
      const delta = event.shiftKey ? event.deltaY || event.deltaX : event.deltaX;
      if (!delta || (!event.shiftKey && Math.abs(event.deltaY) > Math.abs(event.deltaX))) return;
      event.preventDefault();
      const now = performance.now();
      if (now < wheel.cooldown) return;
      if (now - wheel.lastEvent > 180) wheel.accumulated = 0;
      wheel.lastEvent = now;
      wheel.accumulated += delta * (event.deltaMode === 1 ? 16 : 1);
      if (Math.abs(wheel.accumulated) < 45) return;
      const index = (selectedIndex + Math.sign(wheel.accumulated) + projects.length) % projects.length;
      onSelect(projects[index].slug);
      wheel.accumulated = 0;
      wheel.cooldown = now + 240;
    };
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, [projects, selectedIndex, onSelect]);

  return (
    <section className="project-wheel" aria-label="Choose a project" aria-roledescription="carousel"
      onKeyDown={event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          rotate(event.key === "ArrowRight" ? 1 : -1);
        } else if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          onSelect(projects[event.key === "Home" ? 0 : projects.length - 1].slug);
        }
      }}>
      <div className="wheel-track" ref={track} tabIndex={0} aria-label="Project logos. Use left and right arrow keys to browse."
        onPointerDown={event => {
          if (event.button !== 0) return;
          gesture.current = { x: event.clientX, y: event.clientY, id: event.pointerId, dragging: false };
          suppressClick.current = false;
        }}
        onPointerMove={event => {
          const start = gesture.current;
          if (!start || start.id !== event.pointerId) return;
          const dx = event.clientX - start.x;
          if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(event.clientY - start.y)) {
            start.dragging = true;
            event.currentTarget.setPointerCapture(event.pointerId);
          }
        }}
        onPointerUp={event => {
          const start = gesture.current;
          gesture.current = null;
          if (!start || !start.dragging) return;
          suppressClick.current = true;
          const delta = start.x - event.clientX;
          if (Math.abs(delta) > 35) rotate(Math.sign(delta) * Math.min(3, Math.max(1, Math.round(Math.abs(delta) / 110))));
          if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
        }}
        onPointerCancel={() => { gesture.current = null; }}
        onClickCapture={event => {
          if (suppressClick.current) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick.current = false;
          }
        }}>
        {projects.map((project, index) => {
          const count = projects.length;
          let offset = (index - selectedIndex + count) % count;
          if (offset > count / 2) offset -= count;
          const distance = Math.abs(offset);
          const visible = distance <= 5;
          const logo = getProjectLogoVisual(project);
          return (
            <button key={project.slug} type="button" className={`wheel-logo wheel-logo-${project.slug}`}
              style={{ "--wheel-offset": offset, "--wheel-scale": [1, .68, .54, .42, .33, .26][distance] ?? .22,
                "--wheel-dip": `${Math.min(distance, 6) * 6}px`, opacity: visible ? [1, .95, .85, .72, .56, .4][distance] : 0,
                zIndex: count - distance, pointerEvents: visible ? "auto" : "none" } as CSSProperties}
              tabIndex={visible ? 0 : -1} aria-hidden={!visible}
              aria-label={`Select ${project.title}`} aria-pressed={distance === 0} aria-controls="project-detail"
              onClick={() => onSelect(project.slug)}>
              {logo.type === "image" ? <Image src={logo.src} alt="" fill sizes="(max-width: 640px) 90px, 112px" draggable={false} className="object-contain" /> :
                <span className="wheel-initials">{project.slug === "blendbyte" ? "BB" : project.slug === "grupo-invest" ? "GI" : project.title.slice(0, 2)}</span>}
            </button>
          );
        })}
      </div>
      <div className="wheel-controls">
        <button type="button" aria-label="Previous project" onClick={() => rotate(-1)}><Chevron direction="left" /></button>
        <p aria-live="polite" aria-atomic="true"><strong>{projects[selectedIndex].title}</strong><span>{selectedIndex + 1} / {projects.length}</span></p>
        <button type="button" aria-label="Next project" onClick={() => rotate(1)}><Chevron /></button>
      </div>
    </section>
  );
}
