import { Container } from "@/components/container";
import { ProjectsSelector } from "@/components/projects-selector";
import { projects } from "@/data/projects";

type ProjectsPageProps = {
  searchParams: Promise<{
    project?: string;
  }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;

  return (
    <Container className="pb-20 pt-6 sm:pb-24 sm:pt-8">
      <div>
        <ProjectsSelector
          projects={projects}
          initialSlug={params.project}
        />
      </div>
    </Container>
  );
}
