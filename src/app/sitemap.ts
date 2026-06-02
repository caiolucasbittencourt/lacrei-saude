import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lacrei-saude.local";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/quem-somos", "/profissionais"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-06-01"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
