import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/projects",
    "/cv",
    "/contact",
    "/travel",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({ url: `${siteConfig.baseUrl}${path}` }));
}
