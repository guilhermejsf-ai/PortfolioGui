import Link from "next/link";

import { Project } from "@/data/projects";

import { VisualBlock } from "./visual-block";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={{
        pathname: "/projects",
        query: { project: project.slug, expanded: "1" },
      }}
      prefetch={false}
      className="group flex h-full flex-col rounded-[26px] border border-line/90 bg-panel/95 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-float"
    >
      <VisualBlock
        visual={project.cardVisual}
        showLabel={false}
        balancedImage
        className="aspect-[16/11] rounded-[20px]"
      />
      <div className="flex flex-1 flex-col px-1.5 pb-1.5 pt-4">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-deep">
            {project.category}
          </span>
          <span className="text-sm text-muted transition group-hover:translate-x-0.5">
            Open
          </span>
        </div>
        <h3 className="mt-4 font-display text-[2rem] tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">{project.subtitle}</p>
      </div>
    </Link>
  );
}
