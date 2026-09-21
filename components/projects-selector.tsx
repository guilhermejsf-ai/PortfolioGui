"use client";
import { Chevron } from "@/components/chevron";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ProjectWheel } from "./project-wheel";
import { ProjectRelatedLink } from "./project-related-link";
import {
  Project,
  getProjectPreviewSlides,
} from "@/data/projects";
import { siteConfig } from "@/data/site";
import { ProjectEvidence, ProjectApproach } from "./project-evidence";

const projectOrder = [
  "blendbyte",
  "grupo-invest",
  "nordensa",
  "racefiets013",
  "umedicu",
  "habits",
  "nexdoo",
  "zcharge",
  "mumzers",
  "safe-travel",
  "pocket-tours",
  "footy",
  "finance",
  "lv-schedule-viewer",
  "santos-populares",
  "loves-conception",
  "vlogui",
];
function linkKey(href: string) {
  return href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
export function ProjectsSelector({
  projects,
  initialSlug,
}: {
  projects: Project[];
  initialSlug?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ordered = useMemo(() => [...projects].sort((a, b) => {
    const rank = (slug: string) =>
      projectOrder.includes(slug)
        ? projectOrder.indexOf(slug)
        : projectOrder.length;
    return rank(a.slug) - rank(b.slug);
  }), [projects]);
  const selectedSlug = searchParams.get("project") ?? initialSlug ?? ordered[0]?.slug;
  const [preview, setPreview] = useState({ slug: selectedSlug, index: 0 });
  const slideIndex = preview.slug === selectedSlug ? preview.index : 0;
  const setSlideIndex = (index: number) => setPreview({ slug: selectedSlug, index });
  const selectProject = useCallback((slug: string) => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("project") === slug) return;
    url.searchParams.set("project", slug);
    window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }, []);
  const selected = ordered.find((p) => p.slug === selectedSlug) ?? ordered[0];
  if (!selected) return null;
  const slides = [...getProjectPreviewSlides(selected), ...selected.gallery].filter(
    (visual, index, all) => visual.type === "image" &&
      all.findIndex(item => item.type === "image" && item.src === visual.src) === index,
  );
  const safeIndex = slides[slideIndex] ? slideIndex : 0;
  const slide = slides[safeIndex];
  const actions = [
    ...(selected.actions?.website
      ? [
          {
            label: selected.actions.website.label ?? "Visit website",
            href: selected.actions.website.href,
          },
        ]
      : []),
    ...(selected.actions?.iosDownload
      ? [{ label: "App Store", href: selected.actions.iosDownload }]
      : []),
    ...(selected.actions?.androidDownload
      ? [{ label: "Google Play", href: selected.actions.androidDownload }]
      : []),
    ...(selected.actions?.instagram
      ? [{ label: "Instagram", href: selected.actions.instagram }]
      : []),
    ...(selected.slug === "zcharge" ? [{ label: "Request deck", href: `mailto:${siteConfig.social.email}?subject=ZCharge%20deck%20request` }] : []),
    ...selected.links,
    ...(selected.detailCard.buttons ?? []),
  ].filter(
    (link, index, all) =>
      !("disabled" in link && link.disabled) &&
      !link.href.startsWith("/projects") &&
      all.findIndex((item) => linkKey(item.href) === linkKey(link.href)) === index,
  );
  return (
    <div className="work-browser">
      <ProjectWheel projects={ordered} selectedSlug={selected.slug} onSelect={selectProject} />
      <article
        className="project-stage"
        id="project-detail"
        aria-label={`${selected.title} project`}
      >
        <header className="project-stage-heading">
          <div>
            <h2>{selected.title}</h2>
            <p className="project-role">
              {selected.detailCard.role}
              {selected.year && <><span aria-hidden="true"> · </span><span>{selected.year}</span></>}
            </p>
          </div>
          <p className="eyebrow project-stage-category">
            {selected.detailCard.meta ?? selected.section}
          </p>
          {actions.length > 0 && (
            <nav className="project-header-links" aria-label={`${selected.title} related links`}>
              {actions.map(link => (
                <ProjectRelatedLink key={link.href} href={link.href} label={link.label} />
              ))}
            </nav>
          )}
        </header>
        <p className="project-intro">{selected.summary}</p>
        <div className="project-stage-body">
          <div className="project-stage-media">
            {slide?.type === "image" ? (
              <figure className="work-photo-card">
                <div className="work-photo-main">
                  <Image key={`${selected.slug}-${safeIndex}`} src={slide.src} alt={slide.alt}
                    fill sizes="(max-width: 800px) 90vw, 440px" className={slide.src === "/assets/projects/racefiets013/team.jpg" ? "object-cover object-[center_72%]" : "object-contain"}
                    priority={pathname === "/projects"} />
                </div>
                {slides.length > 1 && (
                  <figcaption className="work-photo-toolbar">
                    <button type="button" aria-label={`Show previous ${selected.title} image`} onClick={() => setSlideIndex((safeIndex - 1 + slides.length) % slides.length)}><Chevron direction="left" /></button>
                    <span aria-live="polite">{safeIndex + 1} / {slides.length}</span>
                    <button type="button" aria-label={`Show next ${selected.title} image`} onClick={() => setSlideIndex((safeIndex + 1) % slides.length)}><Chevron /></button>
                  </figcaption>
                )}
                {slides.length > 1 && <div className="work-photo-thumbnails" aria-label={`${selected.title} images`}>
                  {slides.map((image, index) => image.type === "image" && (
                    <button key={image.src} type="button" aria-label={`Show ${selected.title} image ${index + 1}`}
                      aria-pressed={index === safeIndex} onClick={() => setSlideIndex(index)}>
                      <Image src={image.src} alt="" fill sizes="52px" className="object-cover" />
                    </button>
                  ))}
                </div>}
              </figure>
            ) : selected.group === "Current work" ? (
              <section className="current-work-delivery">
                <p className="eyebrow">In practice</p>
                <h3>
                  {selected.slug === "blendbyte"
                    ? "The work behind Blendbyte's new direction."
                    : "Digital delivery and ongoing process improvement."}
                </h3>
                <ol>
                  {selected.workedOn.map((item, i) => (
                    <li key={item}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </section>
            ) : selected.slug === "zcharge" ? (
              <section className="current-work-delivery">
                <p className="eyebrow">Private material</p>
                <h3>Ask for deck</h3>
                <p>The ZCharge investor deck is available on request.</p>
                <a
                  className="text-link"
                  href={`mailto:${siteConfig.social.email}?subject=ZCharge%20deck%20request`}
                >
                  Email to request the deck
                </a>
              </section>
            ) : null}

          </div>
          <div className="project-information">
          <ProjectEvidence project={selected} />
        <div className="project-contribution">
          {selected.group !== "Current work" && (
            <section>
              <p className="eyebrow">What I did</p>
              <ul>
                {selected.detailCard.whatIDid.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
          {selected.group !== "Current work" && selected.note && <p className="case-note">{selected.note}</p>}
          <details className="project-context-disclosure" key={selected.slug}>
            <summary>Context &amp; contribution</summary>
            <ProjectApproach project={selected} />
            <p>{selected.whatItIs}</p>
            <p>{selected.myRole}</p>
            {selected.overview.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <ul>{selected.workedOn.map(item => <li key={item}>{item}</li>)}</ul>
            <p className="project-context-meta">{selected.category} · {selected.detailCard.status}</p>
          </details>
        </div>
          </div>
        </div>
      </article>
    </div>
  );
}
