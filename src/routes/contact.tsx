import { createFileRoute } from "@tanstack/react-router";
import { ContactBlock } from "@/components/site/HomeSections";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { SITE_DOMAIN } from "@/lib/locations-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Nexcore Technologies | Greater Noida HQ & Delhi NCR Agency",
      },
      {
        name: "description",
        content:
          "Contact Nexcore Technologies for high-performing websites, Google Ads, Meta Ads & SEO in Delhi NCR. Greater Noida HQ, serving Noida, Delhi, Gurugram & Faridabad. Call +91 7607696315.",
      },
      { property: "og:title", content: "Contact Nexcore Technologies — Delhi NCR Digital Agency" },
      {
        property: "og:description",
        content:
          "Talk to Nexcore Technologies about your website, ads, SEO or custom software project. Instant WhatsApp & phone consultations available.",
      },
      { property: "og:url", content: `${SITE_DOMAIN}/contact` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE_DOMAIN}/contact` }],
  }),
  component: () => (
    <>
      <section className="bg-hero-mesh">
        <div className="container-p mx-auto max-w-7xl py-24 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
            <MapPin className="size-3.5" /> Greater Noida HQ · Serving All Delhi NCR
          </div>
          <h1 className="mt-4 font-display text-5xl font-bold text-navy lg:text-6xl">
            Let's Scale Your <span className="text-gradient">Business Online</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you are located in Greater Noida, Noida, Delhi, Gurugram, or Faridabad, our senior engineering & growth team responds within one business day with clear recommendations and a transparent estimate.
          </p>
        </div>
      </section>
      <ContactBlock />
    </>
  ),
});
