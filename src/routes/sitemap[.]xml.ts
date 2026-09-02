import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { allServices } from "@/lib/services-data";
import { locationHubs, SITE_DOMAIN } from "@/lib/locations-data";
import { blogPosts } from "@/lib/blogs-data";

const BASE_URL = SITE_DOMAIN;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const corePaths = [
          "/",
          "/services",
          "/locations",
          "/portfolio",
          "/about",
          "/blog",
          "/contact",
          "/terms",
          "/privacy",
        ];

        const servicePaths = allServices.map((s) => `/services/${s.slug}`);
        const locationPaths = locationHubs.map((l) => `/locations/${l.slug}`);

        const cityServicePaths = locationHubs.flatMap((l) =>
          allServices.map((s) => `/locations/${l.slug}/${s.slug}`)
        );

        const blogPaths = blogPosts.map((b) => `/blog/${b.slug}`);

        const allPaths = [
          ...corePaths,
          ...locationPaths,
          ...servicePaths,
          ...cityServicePaths,
          ...blogPaths,
        ];

        const urls = allPaths.map((p) => {
          const priority = p === "/" ? "1.0" : p.startsWith("/locations") || p.startsWith("/services") ? "0.9" : "0.7";
          const changefreq = p === "/" || p.startsWith("/locations") ? "daily" : "weekly";
          return `  <url>
    <loc>${BASE_URL}${p}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
          },
        });
      },
    },
  },
});
