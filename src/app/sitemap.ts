import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/content/site";
import { services } from "@/content/services";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = [
    "",
    "/services",
    "/about",
    "/insights",
    "/contact",
    ...services.map((service) => `/services/${service.slug}`),
    ...insights.map((insight) => `/insights/${insight.slug}`),
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
