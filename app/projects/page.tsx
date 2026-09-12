import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { WorkIndex } from "@/components/work-index";
import { getProjectBySlug } from "@/data/projects";
export const metadata: Metadata = {
  title: "Work",
  alternates: { canonical: "/projects" },
};
export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string }>;
}) {
  const { project } = await searchParams;
  if (project && getProjectBySlug(project))
    redirect(`/projects/${encodeURIComponent(project)}`);
  return <WorkIndex />;
}
