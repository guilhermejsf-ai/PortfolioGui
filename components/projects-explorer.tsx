"use client";

import { useState } from "react";

import { Project, ProjectSection } from "@/data/projects";
import { cn } from "@/lib/utils";

import { ProjectCard } from "./project-card";

type Filter = "All" | "Featured" | ProjectSection;

type ProjectsExplorerProps = {
  projects: Project[];
  sections: ProjectSection[];
};

export function ProjectsExplorer({
  projects,
  sections,
}: ProjectsExplorerProps) {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Featured") return project.featured;
    return project.section === filter;
  });

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap gap-3">
        {(["All", "Featured", ...sections] as Filter[]).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              filter === item
                ? "border-accent bg-accent text-white"
                : "border-line bg-panel text-muted hover:border-accent/50 hover:text-ink",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="space-y-16">
        {sections.map((section) => {
          const items = filteredProjects.filter(
            (project) => project.section === section,
          );

          if (!items.length) return null;

          return (
            <section key={section} className="space-y-8">
              <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
                <div>
                  <h2 className="font-display text-3xl tracking-tight text-ink">
                    {section}
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    {items.length} project{items.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
