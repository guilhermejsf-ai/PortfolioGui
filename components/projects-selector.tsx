"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Project,
  getProjectLogoVisual,
  getProjectPreviewSlides,
  projectGroupOrder,
} from "@/data/projects";
import { siteConfig } from "@/data/site";
import { ProjectEvidence, ProjectApproach } from "./project-evidence";

const projectOrder = [
  "nordensa",
  "racefiets013",
  "umedicu",
  "blendbyte",
  "grupo-invest",
  "nexdoo",
  "zcharge",
  "mumzers",
  "safe-travel",
  "habits",
  "pocket-tours",
  "footy",
  "finance",
  "loves-conception",
  "vlogui",
];
function linkKey(href: string) {
  return href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
function ProjectMark({ project }: { project: Project }) {
  const logo = getProjectLogoVisual(project);
  return (
    <span className="project-mark">
      {logo.type === "image" ? (
        <Image
          src={logo.src}
          alt=""
          fill
          sizes="44px"
          className={logo.fit === "cover" ? "object-cover" : "object-contain"}
        />
      ) : (
        <span aria-hidden="true">
          {project.iconBadge ?? project.title.slice(0, 2)}
        </span>
      )}
    </span>
  );
}
export function ProjectsSelector({
  projects,
  initialSlug,
}: {
  projects: Project[];
  initialSlug?: string;
}) {
  const pathname = usePathname();
  const ordered = [...projects].sort((a, b) => {
    const rank = (slug: string) =>
      projectOrder.includes(slug)
        ? projectOrder.indexOf(slug)
        : projectOrder.length;
    return rank(a.slug) - rank(b.slug);
  });
  const [selectedSlug, setSelectedSlug] = useState(
    initialSlug ?? ordered[0]?.slug,
  );
  const [slideIndex, setSlideIndex] = useState(0);
  const selected = ordered.find((p) => p.slug === selectedSlug) ?? ordered[0];
  if (!selected) return null;
  const slides = getProjectPreviewSlides(selected);
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
      <nav className="project-directory" aria-label="Choose a project">
        {projectGroupOrder.map((group) => {
          const items = ordered.filter((p) => p.group === group);
          if (!items.length) return null;
          return (
            <div className="project-group" key={group}>
              <p className="eyebrow">{group}</p>
              <div className="project-group-items">
                {items.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects?project=${project.slug}`}
                    prefetch={false}
                    scroll={pathname !== "/projects"}
                    className="project-choice"
                    aria-current={
                      project.slug === selected.slug ? "page" : undefined
                    }
                    onClick={() => {
                      setSelectedSlug(project.slug);
                      setSlideIndex(0);
                    }}
                  >
                    <ProjectMark project={project} />
                    <span>{project.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
      <article
        className="project-stage"
        id="project-detail"
        aria-label={`${selected.title} project`}
      >
        <header className="project-stage-heading">
          <div>
            <p className="eyebrow">
              {selected.detailCard.meta ?? selected.section}
            </p>
            <h2>{selected.title}</h2>
            <p className="project-role">
              {selected.detailCard.role}
              <span aria-hidden="true"> · </span>
              <span>{selected.year}</span>
            </p>
          </div>
          <Link className="text-link" href={`/projects/${selected.slug}`}>
            Full project details ↗
          </Link>
        </header>
        <p className="project-intro">{selected.summary}</p>
        <div className="project-stage-body">
          <div className="project-stage-media">
            {slide?.type === "image" ? (
              <figure className="project-preview">
                <div className="project-preview-image">
                  <Image
                    key={`${selected.slug}-${safeIndex}`}
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 900px) 95vw, 720px"
                    className="object-contain"
                    priority={pathname === "/projects"}
                  />
                </div>
                <figcaption>
                  <span>{slide.label}</span>
                  <a href={slide.src} target="_blank" rel="noreferrer">
                    Full image ↗
                  </a>
                </figcaption>
                {slides.length > 1 && (
                  <div className="project-slide-controls">
                    <button
                      aria-label={`Show previous ${selected.title} slide`}
                      onClick={() =>
                        setSlideIndex(
                          (safeIndex - 1 + slides.length) % slides.length,
                        )
                      }
                    >
                      ←
                    </button>
                    <div className="project-slide-dots">
                      {slides.map((s, i) => (
                        <button
                          key={`${s.label}-${i}`}
                          aria-label={`Show ${selected.title} slide ${i + 1}`}
                          aria-pressed={i === safeIndex}
                          onClick={() => setSlideIndex(i)}
                        >
                          <span />
                        </button>
                      ))}
                    </div>
                    <span aria-live="polite">
                      {safeIndex + 1} / {slides.length}
                    </span>
                    <button
                      aria-label={`Show next ${selected.title} slide`}
                      onClick={() =>
                        setSlideIndex((safeIndex + 1) % slides.length)
                      }
                    >
                      →
                    </button>
                  </div>
                )}
              </figure>
            ) : selected.group === "Current work" ? (
              <section className="current-work-delivery">
                <p className="eyebrow">In practice</p>
                <h3>
                  {selected.slug === "blendbyte"
                    ? "A company, with systems behind it."
                    : "Improving how the business works."}
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
                  Email to request the deck ↗
                </a>
              </section>
            ) : (
              <div className="current-work-delivery">
                <p>{slide?.label ?? selected.title}</p>
              </div>
            )}
            {actions.length > 0 && (
              <div
                className="project-external-links"
                aria-label="Project links"
              >
                {actions.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
          <ProjectEvidence project={selected} />
        </div>
        <div className="project-contribution">
          <ProjectApproach project={selected} />
          <section>
            <p className="eyebrow">
              {selected.group === "Current work"
                ? "My work so far"
                : "What I did"}
            </p>
            <ul>
              {selected.detailCard.whatIDid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          {selected.note && <p className="case-note">{selected.note}</p>}
          <Link className="text-link" href={`/projects/${selected.slug}`}>
            Explore the full project ↗
          </Link>
        </div>
      </article>
    </div>
  );
}
