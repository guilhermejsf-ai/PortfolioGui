import { getLocale } from "@/lib/i18n/server";
import { translate } from "@/lib/i18n";

import { T } from "@/components/language-provider";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectsSelector } from "@/components/projects-selector";
import { projects } from "@/data/projects";
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: translate("My work", locale),
    alternates: { canonical: "/projects" },
  };
}
export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const { project } = await searchParams;
  return (
    <Container className="pb-20 pt-6 sm:pb-24 sm:pt-8">
      <h1 className="sr-only"><T>{"My work"}</T></h1>
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
