import type { MetadataRoute } from "next";

const siteUrl = "https://www.furkantitiz.dev";
const lastModified = new Date("2026-07-16T00:00:00.000Z");

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
  ];
}
