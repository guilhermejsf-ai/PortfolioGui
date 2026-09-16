import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectsSelector } from "@/components/projects-selector";
import { projects } from "@/data/projects";
export const metadata: Metadata = {
  title: "My work",
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
      <h1 className="sr-only">My work</h1>
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
