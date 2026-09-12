"use client";
import Image from "next/image";
import { useState } from "react";
import type { ProjectVisual } from "@/data/projects";
export function ProjectGallery({
  slides,
  title,
}: {
  slides: ProjectVisual[];
  title: string;
}) {
  const images = slides.filter(
    (s): s is Extract<ProjectVisual, { type: "image" }> => s.type === "image",
  );
  const [active, setActive] = useState(0);
  if (!images.length) return null;
  return (
    <section className="case-gallery" aria-label={`${title} project images`}>
      <div className="case-image">
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          sizes="(max-width: 800px) 95vw, 1100px"
          className="object-contain"
          priority
        />
      </div>
      <div className="gallery-controls">
        <p aria-live="polite">
          {active + 1} / {images.length} · {images[active].label}
        </p>
        <div>
          <button
            disabled={active === 0}
            aria-label="Previous image"
            onClick={() => setActive(active - 1)}
          >
            ←
          </button>
          <button
            disabled={active === images.length - 1}
            aria-label="Next image"
            onClick={() => setActive(active + 1)}
          >
            →
          </button>
          <a href={images[active].src} target="_blank" rel="noreferrer">
            Full image ↗
          </a>
        </div>
      </div>
    </section>
  );
}
