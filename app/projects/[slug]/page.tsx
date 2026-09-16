import { notFound, redirect } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

// Keep existing bookmarks working while presenting every project in My work.
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  if (!getProjectBySlug(slug)) notFound();
  redirect(`/projects?project=${encodeURIComponent(slug)}`);
}
