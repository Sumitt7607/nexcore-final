import { createFileRoute } from "@tanstack/react-router";
import { ContactBlock } from "@/components/site/HomeSections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nexcore Technologies" },
      { name: "description", content: "Get in touch with Nexcore Technologies for a free quote or consultation. We respond within one business day." },
      { property: "og:title", content: "Contact — Nexcore Technologies" },
      { property: "og:description", content: "Talk to Nexcore about your website, ads, SEO or software project." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <>
      <section className="bg-hero-mesh">
        <div className="container-p mx-auto max-w-7xl py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Contact</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-navy lg:text-6xl">Tell us about your <span className="text-gradient">project</span>.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Share a few details and our senior team will respond within one business day with next steps and a preliminary estimate.</p>
        </div>
      </section>
      <ContactBlock />
    </>
  ),
});
