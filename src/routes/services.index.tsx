import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { serviceGroups } from "@/lib/services-data";
import { CTABanner } from "@/components/site/HomeSections";
import { SITE_DOMAIN } from "@/lib/locations-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title:
          "Digital Services | Web Development, Ads & SEO Agency in Delhi NCR — Nexcore",
      },
      {
        name: "description",
        content:
          "Full-suite digital solutions by Nexcore Technologies: high-converting custom websites, Google Ads, Meta Ads, Local SEO, and software engineered for businesses in Delhi NCR, Noida, Gurugram, and Faridabad.",
      },
      {
        property: "og:title",
        content: "Digital Services — Nexcore Technologies (Delhi NCR)",
      },
      {
        property: "og:description",
        content:
          "Websites, Google Ads, Meta Ads, SEO, branding and custom software built to help brands rank in Google Top 3 and scale online.",
      },
      { property: "og:url", content: `${SITE_DOMAIN}/services` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE_DOMAIN}/services` }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="bg-hero-mesh">
        <div className="container-p mx-auto max-w-7xl py-24 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
            <MapPin className="size-3.5" /> Full-Suite Delhi NCR Digital Services
          </div>
          <h1 className="mt-4 font-display text-5xl font-bold text-navy lg:text-6xl">
            Everything You Need to <span className="text-gradient">Win Online</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From our Greater Noida headquarters, we provide one senior multidisciplinary team for web design, engineering, certified Google & Meta ads, and Top 3 search ranking strategies.
          </p>

          <div className="mt-6">
            <Link
              to="/locations"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-5 py-2 text-xs font-bold text-navy shadow-soft hover:bg-surface transition"
            >
              📍 View Dedicated City Services (Noida, Delhi, Gurugram, Faridabad) <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <div className="container-p mx-auto max-w-7xl space-y-16 py-16">
        {serviceGroups.map((group) => (
          <div key={group.label}>
            <div className="flex items-end justify-between">
              <h2 className="font-display text-2xl font-bold text-navy">{group.label}</h2>
              <span className="text-sm text-muted-foreground">{group.items.length} services</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group rounded-3xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-elegant"
                >
                  <h3 className="font-display text-lg font-semibold text-navy">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                    Explore Service <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <CTABanner />
    </>
  );
}
