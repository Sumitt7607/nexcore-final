import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Phone,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  Building2,
  ChevronDown,
  Star,
  Zap,
  Globe,
} from "lucide-react";
import { getLocation, locationHubs, SITE_DOMAIN } from "@/lib/locations-data";
import { allServices, serviceGroups } from "@/lib/services-data";
import { ContactBlock, CTABanner, Process } from "@/components/site/HomeSections";

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    const loc = getLocation(params.city);
    if (!loc) throw notFound();
    return { loc };
  },
  head: ({ loaderData, params }) => {
    const loc = loaderData?.loc;
    const title = loc
      ? `Best Digital Marketing & Web Development Company in ${loc.name} | Nexcore Technologies`
      : "Locations — Nexcore";
    const desc = loc
      ? `Top-rated digital agency in ${loc.name}, Delhi NCR. Custom website development, Google Ads, Meta Ads, SEO, and branding engineered for high ROI in ${loc.name}.`
      : "Nexcore Technologies digital services across Delhi NCR.";
    const canonical = `${SITE_DOMAIN}/locations/${params.city}`;

    const localSchema = loc
      ? {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Nexcore Technologies - ${loc.name}`,
          url: canonical,
          telephone: "+91-7607696315",
          email: "nexcoretechnologies.team@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: loc.address,
            addressLocality: loc.name,
            addressRegion: "Delhi NCR",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: loc.geo.lat,
            longitude: loc.geo.lng,
          },
          areaServed: {
            "@type": "City",
            name: loc.name,
          },
          priceRange: "₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "128",
          },
        }
      : null;

    const faqSchema =
      loc && loc.faqs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: loc.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }
        : null;

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: [
        ...(localSchema
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify(localSchema),
              },
            ]
          : []),
        ...(faqSchema
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify(faqSchema),
              },
            ]
          : []),
      ],
    };
  },
  component: CityHubPage,
});

function CityHubPage() {
  const { loc } = Route.useLoaderData();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const otherCities = locationHubs.filter((l) => l.slug !== loc.slug);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-hero-mesh py-20 lg:py-28">
        <div className="container-p mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            {/* Breadcrumb & City Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
              <MapPin className="size-3.5" />
              Serving {loc.name} & Surrounding Delhi NCR
            </div>

            <h1 className="mt-4 font-display text-4xl font-black tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Top Digital Marketing & Web Development Company in{" "}
              <span className="text-gradient">{loc.name}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
              {loc.heroDesc}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href={`https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%20am%20looking%20for%20digital%20services%20in%20${encodeURIComponent(loc.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-navy shadow-elegant transition hover:scale-105"
              >
                <MessageCircle className="size-4" /> Get Free Quote for {loc.name}
              </a>
              <a
                href="tel:7607696315"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-soft transition hover:bg-surface"
              >
                <Phone className="size-4 text-secondary" /> Call +91 7607696315
              </a>
            </div>

            {/* Key Areas Badges */}
            <div className="mt-10 border-t border-border/60 pt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                Key Neighborhoods & Commercial Hubs in {loc.name}:
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {loc.neighborhoods.map((nh, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-sm border border-border/70"
                  >
                    📍 {nh}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-white py-10">
        <div className="container-p mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {loc.localStats.map((st, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl font-black text-navy sm:text-4xl">
                  {st.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-muted-foreground">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOTION CALLOUT */}
      <section className="container-p mx-auto max-w-7xl pt-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy via-slate-900 to-navy p-6 text-white shadow-xl sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                🔥 Exclusive {loc.name} Business Offer
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                Get 60% OFF Website Development in {loc.name}
              </h2>
              <p className="mt-2 max-w-xl text-xs sm:text-sm text-white/80">
                Includes 2 full years of ultra-fast cloud hosting, free 1st year domain, SSL
                certificate, Google SEO setup, and dedicated Delhi NCR support.
              </p>
            </div>
            <a
              href={`https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%20want%20the%2060%25%20OFF%20Website%20offer%20for%20my%20${encodeURIComponent(loc.name)}%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs sm:text-sm font-bold text-navy transition hover:scale-105"
            >
              Claim Offer Today <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES MATRIX FOR THIS CITY */}
      <section className="container-p mx-auto max-w-7xl py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Comprehensive Digital Suite
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
            Our Services Engineered for {loc.name} Businesses
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Every service is tailored to outrank competitors and capture qualified buyer search
            intent across {loc.name}.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {serviceGroups.map((group) => (
            <div key={group.label}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-border" />
                <h3 className="font-display text-xl font-bold text-navy">{group.label}</h3>
                <span className="h-px flex-1 bg-border" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <Link
                    key={item.slug}
                    to="/locations/$city/$slug"
                    params={{ city: loc.slug, slug: item.slug }}
                    className="group flex flex-col justify-between rounded-3xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand hover:shadow-elegant"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-[10px] font-bold text-secondary">
                          {loc.name} Hub
                        </span>
                        <ArrowRight className="size-4 text-secondary transition group-hover:translate-x-1" />
                      </div>
                      <h4 className="mt-3 font-display text-lg font-bold text-navy group-hover:text-secondary transition">
                        {item.name} in {loc.name}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {item.short} Engineered specifically for clients in {loc.name}.
                      </p>
                    </div>

                    <div className="mt-5 border-t border-border/50 pt-3 text-[11px] font-bold text-secondary group-hover:underline">
                      View {item.name} Packages ↗
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE NEXCORE IN THIS CITY */}
      <section className="bg-surface py-20">
        <div className="container-p mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Local Competitive Advantage
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
                Why Brands in {loc.name} Trust Nexcore Technologies
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                We understand the local business ecosystem of {loc.name}. Whether it is beating
                local competitors on Google Search, executing high-converting ad campaigns, or
                building scalable web platforms, our local team delivers measurable results.
              </p>

              <div className="mt-8 space-y-4">
                {loc.localHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-emerald-500 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-navy">
                Book a Free {loc.name} Strategy Consultation
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Get an in-depth audit of your current website, competitor rankings in {loc.name}, and
                a step-by-step roadmap to rank in the Top 3 on Google.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={`https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%20want%20a%20free%20strategy%20session%20for%20my%20business%20in%20${encodeURIComponent(loc.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-xs sm:text-sm font-bold text-navy shadow-elegant transition hover:brightness-95"
                >
                  <MessageCircle className="size-4" /> Chat on WhatsApp with {loc.name} Lead
                </a>
                <a
                  href="tel:7607696315"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-xs sm:text-sm font-bold text-navy shadow-soft transition hover:bg-surface"
                >
                  <Phone className="size-4 text-secondary" /> Call Us Directly: +91 7607696315
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process />

      {/* LOCAL FAQS */}
      <section className="container-p mx-auto max-w-4xl py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Got Questions?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            Frequently Asked Questions — {loc.name}
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {loc.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-white transition shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-display font-semibold text-navy hover:text-secondary transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`size-5 text-navy shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-secondary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/40 mt-1">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* EXPLORE OTHER DELHI NCR LOCATIONS */}
      <section className="border-t border-border bg-surface py-16">
        <div className="container-p mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold text-navy">
            Explore Other Delhi NCR Service Hubs
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherCities.map((other) => (
              <Link
                key={other.slug}
                to="/locations/$city"
                params={{ city: other.slug }}
                className="group rounded-2xl border border-border bg-white p-4 transition hover:border-brand hover:shadow-soft"
              >
                <p className="font-display text-sm font-bold text-navy group-hover:text-secondary transition">
                  📍 {other.name}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2">
                  {other.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <ContactBlock />
    </>
  );
}
