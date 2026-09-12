import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectsSelector } from "@/components/projects-selector";
import { projects } from "@/data/projects";
export const metadata: Metadata = {
  title: "Work and projects",
  alternates: { canonical: "/projects" },
};
export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const { project } = await searchParams;
  return (
    <Container className="pb-20 pt-6 sm:pb-24 sm:pt-8">
      <header className="work-page-heading">
        <h1>Work and projects.</h1>
        <p>
          Companies I’ve helped grow, products I’ve built, and what went into
          them. Choose a project to explore.
        </p>
      </header>
      <div id="all-projects">
        <ProjectsSelector
          key={project ?? "default"}
          projects={projects}
          initialSlug={project}
        />
      </div>
    </Container>
  );
}
