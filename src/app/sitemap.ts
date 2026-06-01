import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sovakalifesciences.com";
  const routes = [
    "",
    "/about",
    "/franchise",
    "/training-careers",
    "/technology",
    "/journal",
    "/insights/future-of-intelligent-dental-imaging-infrastructure-india",
    "/insights/addressing-the-workforce-gap-in-cbct-opg-imaging",
    "/insights/why-centralized-oral-radiology-workflows-matter",
    "/insights/operational-challenges-scaling-dental-imaging-centres",
    "/insights/how-ai-will-transform-dental-imaging-workflows",
    "/contact",
    "/disclosure",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/franchise" || route === "/training-careers" || route === "/technology" ? 0.9 : 0.6,
  }));
}
