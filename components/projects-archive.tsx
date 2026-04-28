"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  Project,
  ProjectSection,
  getProjectArchiveVisual,
  getProjectDedicatedLogoVisual,
} from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectsArchiveProps = {
  projects: Project[];
  sections: ProjectSection[];
};

function getProjectTheme(slug: string) {
  switch (slug) {
    case "nordensa":
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(52,78,110,0.12),rgba(255,255,255,0.94)_34%,rgba(233,240,247,0.86))]",
        accentBadgeClass:
          "border-[#5b7ca3]/28 bg-[#dfe8f3] text-[#3f6289]",
        accentButtonClass:
          "bg-[#5b7ca3] text-white hover:bg-[#4f7096]",
        activeItemClass:
          "border-[#5b7ca3]/45 bg-[#dde6f1]/88 shadow-card ring-1 ring-[#5b7ca3]/18",
        activeDotClass: "bg-[#5b7ca3]",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(53,78,108,0.06),rgba(255,255,255,0.42))]",
      };
    case "nexdoo":
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(255,139,61,0.14),rgba(255,255,255,0.94)_34%,rgba(255,241,230,0.88))]",
        accentBadgeClass:
          "border-[#f08c3a]/28 bg-[#fff0e2] text-[#b95b11]",
        accentButtonClass:
          "bg-[#ef8c3c] text-white hover:bg-[#df7d2d]",
        activeItemClass:
          "border-[#ef8c3c]/42 bg-[#fff0e4]/90 shadow-card ring-1 ring-[#ef8c3c]/16",
        activeDotClass: "bg-[#ef8c3c]",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(239,140,60,0.08),rgba(255,255,255,0.42))]",
      };
    case "racefiets013":
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(214,165,47,0.14),rgba(255,255,255,0.95)_36%,rgba(251,247,227,0.86))]",
        accentBadgeClass:
          "border-[#c79b23]/26 bg-[#fcf3cf] text-[#8f6a10]",
        accentButtonClass:
          "bg-[#c79b23] text-white hover:bg-[#b58b19]",
        activeItemClass:
          "border-[#c79b23]/42 bg-[#fcf2d6]/90 shadow-card ring-1 ring-[#c79b23]/14",
        activeDotClass: "bg-[#c79b23]",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(199,155,35,0.08),rgba(255,255,255,0.42))]",
      };
    case "umedicu":
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(79,189,201,0.12),rgba(255,255,255,0.95)_36%,rgba(236,250,251,0.88))]",
        accentBadgeClass:
          "border-[#34a8b3]/25 bg-[#e7f8f9] text-[#2a7581]",
        accentButtonClass:
          "bg-[#34a8b3] text-white hover:bg-[#2a98a2]",
        activeItemClass:
          "border-[#34a8b3]/40 bg-[#e6f7f8]/90 shadow-card ring-1 ring-[#34a8b3]/16",
        activeDotClass: "bg-[#34a8b3]",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(52,168,179,0.08),rgba(255,255,255,0.42))]",
      };
    case "safe-travel":
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(238,111,73,0.12),rgba(255,255,255,0.95)_36%,rgba(255,244,238,0.88))]",
        accentBadgeClass:
          "border-[#e56c43]/26 bg-[#fff0ea] text-[#b44f2d]",
        accentButtonClass:
          "bg-[#e56c43] text-white hover:bg-[#d15d35]",
        activeItemClass:
          "border-[#e56c43]/40 bg-[#fff0ea]/90 shadow-card ring-1 ring-[#e56c43]/16",
        activeDotClass: "bg-[#e56c43]",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(229,108,67,0.08),rgba(255,255,255,0.42))]",
      };
    case "habits":
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(245,126,72,0.12),rgba(255,255,255,0.95)_32%,rgba(255,241,229,0.88))]",
        accentBadgeClass:
          "border-[#ec7f44]/28 bg-[#fff0e6] text-[#bb5f26]",
        accentButtonClass:
          "bg-[#ec7f44] text-white hover:bg-[#d96f35]",
        activeItemClass:
          "border-[#ec7f44]/42 bg-[#fff1e7]/90 shadow-card ring-1 ring-[#ec7f44]/16",
        activeDotClass: "bg-[#ec7f44]",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(236,127,68,0.08),rgba(255,255,255,0.42))]",
      };
    case "mumzers":
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(183,108,111,0.12),rgba(255,255,255,0.95)_35%,rgba(250,239,240,0.88))]",
        accentBadgeClass:
          "border-[#b76c6f]/24 bg-[#f9ecec] text-[#8f4b4f]",
        accentButtonClass:
          "bg-[#b76c6f] text-white hover:bg-[#a55c60]",
        activeItemClass:
          "border-[#b76c6f]/38 bg-[#f8ecec]/90 shadow-card ring-1 ring-[#b76c6f]/14",
        activeDotClass: "bg-[#b76c6f]",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(183,108,111,0.08),rgba(255,255,255,0.42))]",
      };
    case "pocket-tours":
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(230,99,118,0.11),rgba(255,255,255,0.95)_35%,rgba(255,241,244,0.88))]",
        accentBadgeClass:
          "border-[#df6277]/24 bg-[#fff0f3] text-[#b34759]",
        accentButtonClass:
          "bg-[#df6277] text-white hover:bg-[#ca5368]",
        activeItemClass:
          "border-[#df6277]/38 bg-[#fff0f3]/90 shadow-card ring-1 ring-[#df6277]/15",
        activeDotClass: "bg-[#df6277]",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(223,98,119,0.08),rgba(255,255,255,0.42))]",
      };
    case "zcharge":
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(49,72,118,0.11),rgba(255,255,255,0.95)_36%,rgba(243,245,249,0.9))]",
        accentBadgeClass:
          "border-[#314876]/24 bg-[#eef2f8] text-[#273a61]",
        accentButtonClass:
          "bg-[#314876] text-white hover:bg-[#293f69]",
        activeItemClass:
          "border-[#314876]/38 bg-[#eef2f8]/90 shadow-card ring-1 ring-[#314876]/16",
        activeDotClass: "bg-[#314876]",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(49,72,118,0.08),rgba(255,255,255,0.42))]",
      };
    case "finance":
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(73,150,135,0.11),rgba(255,255,255,0.95)_36%,rgba(239,249,246,0.88))]",
        accentBadgeClass:
          "border-[#4d9b8d]/24 bg-[#eaf8f4] text-[#39786c]",
        accentButtonClass:
          "bg-[#4d9b8d] text-white hover:bg-[#428678]",
        activeItemClass:
          "border-[#4d9b8d]/38 bg-[#eaf8f4]/90 shadow-card ring-1 ring-[#4d9b8d]/16",
        activeDotClass: "bg-[#4d9b8d]",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(77,155,141,0.08),rgba(255,255,255,0.42))]",
      };
    case "loves-conception":
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(170,122,91,0.11),rgba(255,255,255,0.95)_36%,rgba(248,242,238,0.88))]",
        accentBadgeClass:
          "border-[#aa7a5b]/24 bg-[#f7eee7] text-[#845b42]",
        accentButtonClass:
          "bg-[#aa7a5b] text-white hover:bg-[#95684d]",
        activeItemClass:
          "border-[#aa7a5b]/38 bg-[#f7eee7]/90 shadow-card ring-1 ring-[#aa7a5b]/15",
        activeDotClass: "bg-[#aa7a5b]",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(170,122,91,0.08),rgba(255,255,255,0.42))]",
      };
    default:
      return {
        panelClass:
          "bg-[linear-gradient(135deg,rgba(111,143,179,0.10),rgba(255,255,255,0.95)_36%,rgba(236,241,247,0.86))]",
        accentBadgeClass:
          "border-accent/24 bg-accent-soft/86 text-accent-deep",
        accentButtonClass: "bg-accent text-white hover:bg-accent-deep",
        activeItemClass:
          "border-accent/45 bg-accent-soft/76 shadow-card ring-1 ring-accent/15",
        activeDotClass: "bg-accent",
        previewFrameClass:
          "bg-[linear-gradient(180deg,rgba(111,143,179,0.07),rgba(255,255,255,0.42))]",
      };
  }
}

export function ProjectsArchive({
  projects,
  sections,
}: ProjectsArchiveProps) {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  const orderedProjects = useMemo(() => {
    const sectionOrder = new Map(sections.map((section, index) => [section, index]));

    return [...projects].sort((a, b) => {
      const aIndex = sectionOrder.get(a.section) ?? Number.MAX_SAFE_INTEGER;
      const bIndex = sectionOrder.get(b.section) ?? Number.MAX_SAFE_INTEGER;

      if (aIndex !== bIndex) return aIndex - bIndex;
      return a.title.localeCompare(b.title);
    });
  }, [projects, sections]);

  const [selectedSlug, setSelectedSlug] = useState(orderedProjects[0]?.slug ?? "");
  const [displayedSlug, setDisplayedSlug] = useState(orderedProjects[0]?.slug ?? "");
  const [transitionPhase, setTransitionPhase] = useState<"idle" | "out" | "in">("idle");
  const swapTimerRef = useRef<number | null>(null);
  const settleTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (swapTimerRef.current) window.clearTimeout(swapTimerRef.current);
      if (settleTimerRef.current) window.clearTimeout(settleTimerRef.current);
    };
  }, []);

  const selectedProject = useMemo(
    () =>
      orderedProjects.find((project) => project.slug === displayedSlug) ??
      orderedProjects[0],
    [orderedProjects, displayedSlug],
  );

  const previewVisual = selectedProject
    ? getProjectArchiveVisual(selectedProject)
    : undefined;
  const selectedTheme = getProjectTheme(selectedProject?.slug ?? "");
  const previewMediaClass = "relative h-[220px] sm:h-[280px] lg:h-[360px] xl:h-[420px]";

  const handleSelectProject = (slug: string) => {
    if (slug === selectedSlug) return;

    setSelectedSlug(slug);

    if (swapTimerRef.current) window.clearTimeout(swapTimerRef.current);
    if (settleTimerRef.current) window.clearTimeout(settleTimerRef.current);

    setTransitionPhase("out");

    swapTimerRef.current = window.setTimeout(() => {
      setDisplayedSlug(slug);
      setTransitionPhase("in");

      settleTimerRef.current = window.setTimeout(() => {
        setTransitionPhase("idle");
      }, 220);
    }, 150);
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max min-w-full items-start gap-3 sm:gap-4">
          {orderedProjects.map((project) => {
            const active = project.slug === selectedSlug;
            const logoVisual = getProjectDedicatedLogoVisual(project);

            return (
              <button
                key={project.slug}
                type="button"
                onClick={() => handleSelectProject(project.slug)}
                aria-label={`Show ${project.title}`}
                aria-pressed={active}
                className="group flex w-[4.9rem] shrink-0 flex-col items-center text-center sm:w-[5.4rem]"
              >
                <span
                  className={cn(
                    "relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[20px] border border-line/75 bg-panel transition duration-200 ease-out",
                    active
                      ? "border-accent/35 bg-accent-soft/25 shadow-card"
                      : "hover:border-line hover:shadow-card",
                    "group-hover:-translate-y-0.5 group-hover:scale-[1.03] group-focus-visible:-translate-y-0.5 group-focus-visible:scale-[1.03]",
                  )}
                >
                  {logoVisual?.type === "image" ? (
                    <div className="absolute inset-0 h-full w-full overflow-hidden">
                      <Image
                        src={logoVisual.src}
                        alt={logoVisual.alt}
                        fill
                        className="select-none object-contain object-center p-3.5 transition duration-200 ease-out group-hover:scale-105 group-focus-visible:scale-105"
                        sizes="(max-width: 640px) 78px, 86px"
                        draggable={false}
                      />
                    </div>
                  ) : (
                    <span className="font-display text-base tracking-tight text-accent-deep">
                      {project.title.slice(0, 2)}
                    </span>
                  )}
                </span>

                <span className="mt-2 block h-4 translate-y-1 text-[11px] font-semibold leading-none text-ink opacity-0 transition duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  {project.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedProject ? (
        <div
          className={cn(
            "overflow-hidden rounded-[34px] border border-line/85 shadow-card transition duration-300 ease-out",
            selectedTheme.panelClass,
            transitionPhase === "out"
              ? "translate-y-2 scale-[0.992] opacity-0"
              : "translate-y-0 scale-100 opacity-100",
          )}
        >
          <div className="grid gap-5 px-4 py-4 sm:px-5 sm:py-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:items-stretch lg:gap-6 xl:px-6 xl:py-6">
            <div className="flex min-w-0 flex-col justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]",
                      selectedTheme.accentBadgeClass,
                    )}
                  >
                    {selectedProject.section}
                  </span>
                  <span className="text-sm text-muted">{selectedProject.category}</span>
                </div>

                <h2 className="mt-4 font-display text-[2.6rem] leading-[0.94] tracking-tight text-ink sm:text-[3.3rem] xl:text-[4rem]">
                  {selectedProject.title}
                </h2>
                <p className="mt-3 max-w-2xl text-[0.97rem] leading-6 text-muted sm:text-[1rem] sm:leading-7">
                  {selectedProject.summary}
                </p>

                <div className="mt-4 max-w-2xl rounded-[22px] border border-line/80 bg-white/52 px-4 py-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-deep">
                    Role
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink/80">
                    {selectedProject.role}
                  </p>
                </div>

                {selectedProject.note ? (
                  <div className="mt-3 max-w-2xl rounded-[20px] border border-dashed border-line/80 bg-white/44 px-4 py-3.5 text-sm leading-6 text-muted">
                    {selectedProject.note}
                  </div>
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={{
                    pathname: "/projects",
                    query: { project: selectedProject.slug, expanded: "1" },
                  }}
                  prefetch={false}
                  className={cn(
                    "rounded-full px-5 py-3 text-sm font-semibold transition",
                    selectedTheme.accentButtonClass,
                  )}
                >
                  Read More
                </Link>
                {selectedProject.links.slice(0, 1).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-line/90 bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent/35 hover:bg-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              className={cn(
                "order-2 min-w-0 overflow-hidden rounded-[28px] border border-white/55 shadow-card lg:order-none",
                selectedTheme.previewFrameClass,
              )}
              style={{ overflow: "hidden" }}
            >
              {previewVisual?.type === "image" ? (
                <div className={cn("relative overflow-hidden", previewMediaClass)}>
                  <Image
                    src={previewVisual.src}
                    alt={previewVisual.alt}
                    fill
                    className="select-none object-contain object-center p-2 sm:p-3"
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    draggable={false}
                  />
                </div>
              ) : (
                <div
                  className={cn(
                    "flex items-center justify-center bg-white/36 p-8 text-center",
                    previewMediaClass,
                  )}
                >
                  <div className="max-w-sm rounded-[22px] border border-dashed border-line/80 bg-white/72 px-5 py-4">
                    <p className="text-sm font-semibold text-ink">
                      {previewVisual?.label ?? "Preview to be added"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
