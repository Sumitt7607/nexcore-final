import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { serviceGroups } from "@/lib/services-data";
import { CTABanner } from "@/components/site/HomeSections";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Nexcore Technologies" },
      { name: "description", content: "Explore Nexcore's full-stack digital services: websites, Google Ads, Meta Ads, SEO, branding, video and custom software." },
      { property: "og:title", content: "Services — Nexcore Technologies" },
      { property: "og:description", content: "Websites, ads, SEO, branding and software built to grow your business." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="bg-hero-mesh">
        <div className="container-p mx-auto max-w-7xl py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Services</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-navy lg:text-6xl">Everything you need to <span className="text-gradient">win online</span>.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">One senior team for design, engineering and performance marketing — so your brand ships faster and grows compound.</p>
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
                    Explore <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
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
