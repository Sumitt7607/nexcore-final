import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Star, Sparkles, Rocket, Target, TrendingUp } from "lucide-react";
import { getService, allServices } from "@/lib/services-data";
import { CTABanner, Testimonials, FAQ, ContactBlock, Process } from "@/components/site/HomeSections";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    const title = s ? `${s.name} — Nexcore Technologies` : "Service — Nexcore";
    const desc = s?.short ?? "Premium digital service by Nexcore Technologies.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = allServices.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="bg-hero-mesh relative overflow-hidden">
        <div className="container-p mx-auto grid max-w-7xl gap-10 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-navy backdrop-blur">
              <Sparkles className="size-3 text-secondary" /> Service
            </div>
            <h1 className="mt-5 font-display text-5xl font-bold text-navy lg:text-6xl">
              {service.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient">{service.name.split(" ").slice(-1)}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">{service.short}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant">Get Free Quote</Link>
              <Link to="/contact" className="rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-blue">Book Consultation</Link>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { icon: Rocket, k: "Delivery", v: "Fast, milestone-based sprints" },
              { icon: Target, k: "Outcome", v: "Measurable business impact" },
              { icon: TrendingUp, k: "Growth", v: "Compound results, month over month" },
            ].map((c) => (
              <div key={c.k} className="flex items-start gap-4 rounded-3xl border border-border bg-white p-5 shadow-soft">
                <div className="grid size-11 place-items-center rounded-2xl bg-softgreen text-navy"><c.icon className="size-5" /></div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">{c.k}</p>
                  <p className="text-sm font-medium text-navy">{c.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + features */}
      <section className="container-p mx-auto max-w-7xl py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy lg:text-4xl">Why teams choose this service.</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Senior specialists — no juniors on your account",
                "Transparent scope, timelines and pricing",
                "Weekly reports and clear success metrics",
                "Design, engineering and marketing in-house",
                "Post-launch growth and support included",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 place-items-center rounded-full bg-brand text-navy"><Check className="size-3" strokeWidth={3} /></span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "150+", v: "Projects delivered" },
              { k: "98%", v: "Client satisfaction" },
              { k: "5.4×", v: "Avg. ROAS" },
              { k: "2+ yrs", v: "Team experience" },
            ].map((s) => (
              <div key={s.v} className="rounded-3xl border border-border bg-white p-6">
                <p className="font-display text-3xl font-bold text-navy">{s.k}</p>
                <p className="text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* Pricing */}
      <section className="container-p mx-auto max-w-7xl py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Pricing</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy">Simple, transparent plans.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: "Starter", price: "$1,499", features: ["Discovery workshop", "Core deliverables", "2 revision rounds", "30-day support"] },
            { name: "Growth", price: "$3,999", featured: true, features: ["Everything in Starter", "Extended scope", "Priority delivery", "90-day support"] },
            { name: "Scale", price: "Custom", features: ["Everything in Growth", "Dedicated team", "Quarterly roadmap", "Enterprise SLAs"] },
          ].map((p) => (
            <div key={p.name} className={`relative rounded-3xl border p-6 ${p.featured ? "border-brand bg-navy text-white shadow-elegant" : "border-border bg-white"}`}>
              {p.featured && <span className="absolute -top-3 left-6 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">Most popular</span>}
              <p className={`font-display text-lg font-semibold ${p.featured ? "text-brand" : "text-navy"}`}>{p.name}</p>
              <p className={`mt-2 font-display text-4xl font-bold ${p.featured ? "text-white" : "text-navy"}`}>{p.price}</p>
              <ul className={`mt-6 space-y-2 text-sm ${p.featured ? "text-white/80" : "text-foreground/80"}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 size-4 text-brand" strokeWidth={3} /> {f}</li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold ${p.featured ? "bg-brand text-navy" : "bg-navy text-white"}`}>
                Get started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTABanner />

      {/* Related */}
      <section className="container-p mx-auto max-w-7xl py-16">
        <h2 className="font-display text-2xl font-bold text-navy">Related services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group rounded-3xl border border-border bg-white p-5 transition hover:border-brand hover:shadow-elegant">
              <div className="flex items-center justify-between">
                <p className="font-display font-semibold text-navy">{r.name}</p>
                <ArrowRight className="size-4 text-secondary transition group-hover:translate-x-0.5" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContactBlock />
    </>
  );
}
