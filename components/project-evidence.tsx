"use client";

import { T, useLanguage } from "@/components/language-provider";
import type { Project } from "@/data/projects";
import {
  projectHighlights,
  projectApproaches,
} from "@/data/project-presentation";

export function ProjectEvidence({ project }: { project: Project }) {
  const { t } = useLanguage();
  const highlights = projectHighlights[project.slug];
  return (
    <section
      className="project-evidence"
      aria-label={t(`${project.title} results`)}
    >
      <p className="eyebrow"><T>{project.detailCard.outcome.title}</T></p>
      {highlights && (
        <dl className="project-highlights">
          {highlights.map(({ value, label }) => (
            <div key={label}>
              <dt><T>{label}</T></dt>
              <dd><T>{value}</T></dd>
            </div>
          ))}
        </dl>
      )}
      <p className="project-outcome-copy"><T>{project.detailCard.outcome.text}</T></p>
      {project.detailCard.outcome.proofPoints?.length ? (
        <ul className="project-proof-points">
          {project.detailCard.outcome.proofPoints.map((point) => (
            <li key={point}><T>{point}</T></li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
export function ProjectApproach({ project }: { project: Project }) {
  const context = projectApproaches[project.slug];
  if (!context) return null;
  return (
    <section className="project-approach">
      <p className="eyebrow"><T>{"Focus & approach"}</T></p>
      <h3><T>{context.focus}</T></h3>
      <p><T>{context.approach}</T></p>
    </section>
  );
}
