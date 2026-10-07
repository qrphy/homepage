import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const siteUrl = "https://www.furkantitiz.dev";
const lastModified = new Date("2026-10-03T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/ai-workflow`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projects.map(({ slug }) => ({
      url: `${siteUrl}/work/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
