import type { Project } from "@/data/projects";
import {
  projectHighlights,
  projectApproaches,
} from "@/data/project-presentation";

export function ProjectEvidence({ project }: { project: Project }) {
  const highlights = projectHighlights[project.slug];
  return (
    <section
      className="project-evidence"
      aria-label={`${project.title} results`}
    >
      <p className="eyebrow">{project.detailCard.outcome.title}</p>
      {highlights && (
        <dl className="project-highlights">
          {highlights.map(({ value, label }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
      <p className="project-outcome-copy">{project.detailCard.outcome.text}</p>
      {project.detailCard.outcome.proofPoints?.length ? (
        <ul className="project-proof-points">
          {project.detailCard.outcome.proofPoints.map((point) => (
            <li key={point}>{point}</li>
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
      <p className="eyebrow">Focus &amp; approach</p>
      <h3>{context.focus}</h3>
      <p>{context.approach}</p>
    </section>
  );
}
