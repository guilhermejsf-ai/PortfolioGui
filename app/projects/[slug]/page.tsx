import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getProjectPreviewSlides,
  projects,
} from "@/data/projects";
import { ProjectGallery } from "@/components/project-gallery";
import {
  ProjectEvidence,
  ProjectApproach,
} from "@/components/project-evidence";
import { siteConfig } from "@/data/site";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  return {
    title: p?.title ?? "Project not found",
    description: p?.summary,
    alternates: { canonical: `/projects/${slug}` },
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProjectBySlug(slug);
  if (!p) notFound();
  const actionLinks = [
    ...(p.links ?? []),
    ...(p.detailCard.buttons ?? []),
    ...(p.actions?.website
      ? [
          {
            label: p.actions.website.label ?? "Visit website",
            href: p.actions.website.href,
          },
        ]
      : []),
    ...(p.actions?.instagram
      ? [{ label: "Instagram", href: p.actions.instagram }]
      : []),
    ...(p.actions?.iosDownload
      ? [{ label: "App Store", href: p.actions.iosDownload }]
      : []),
    ...(p.actions?.androidDownload
      ? [{ label: "Google Play", href: p.actions.androidDownload }]
      : []),
  ].filter(
    (l, i, a) =>
      !l.disabled &&
      !l.href.startsWith("/projects") &&
      a.findIndex((x) => x.href === l.href) === i,
  );
  const slides = [...getProjectPreviewSlides(p), ...p.gallery].filter(
    (s, i, a) =>
      s.type === "image" &&
      a.findIndex((x) => x.type === "image" && x.src === s.src) === i,
  );
  return (
    <article className="work-shell case-page">
      <Link href="/projects#all-projects" className="text-link">
        ← All projects
      </Link>
      <header className="case-header">
        <p className="eyebrow">
          {p.section} / {p.detailCard.status}
        </p>
        <h1>{p.title}</h1>
        <p className="case-summary">{p.summary}</p>
        <div className="case-meta">
          <div>
            <span>My role</span>
            <strong>{p.detailCard.role}</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>{p.category}</strong>
          </div>
          <div>
            <span>Period</span>
            <strong>{p.year}</strong>
          </div>
        </div>
        <div className="button-row">
          {actionLinks.map((l) => (
            <a
              className="button-quiet"
              href={l.href}
              key={l.href}
              target="_blank"
              rel="noreferrer"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </header>
      <ProjectEvidence project={p} />
      {p.note && <p className="case-note">{p.note}</p>}
      <ProjectGallery slides={slides} title={p.title} />
      <div className="case-body">
        <section>
          <p className="eyebrow">The work</p>
          <h2>
            {p.group === "Current work" ? "My work so far" : "What I did"}
          </h2>
          <ul>
            {p.detailCard.whatIDid.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
        <section>
          <ProjectApproach project={p} />
          <p className="eyebrow">Context &amp; contribution</p>
          <h2>Behind the project</h2>
          <p>{p.whatItIs}</p>
          <p>{p.myRole}</p>
          <details>
            <summary>More project context</summary>
            {p.overview.map((x) => (
              <p key={x}>{x}</p>
            ))}
            <ul>
              {p.workedOn.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </details>
        </section>
      </div>

      {p.slug === "zcharge" && (
        <section className="case-outcome">
          <p className="eyebrow">Private material</p>
          <h2>Ask for deck</h2>
          <p>The ZCharge investor deck is available on request.</p>
          <a
            className="text-link"
            href={`mailto:${siteConfig.social.email}?subject=ZCharge%20deck%20request`}
          >
            Email to request the deck ↗
          </a>
        </section>
      )}
      <section className="next-projects">
        <h2>Keep exploring</h2>
        <div className="button-row">
          {projects
            .filter((x) => x.slug !== p.slug)
            .map((x) => (
              <Link
                key={x.slug}
                href={`/projects/${x.slug}`}
                className="button-quiet"
              >
                {x.title} ↗
              </Link>
            ))}
        </div>
      </section>
    </article>
  );
}
