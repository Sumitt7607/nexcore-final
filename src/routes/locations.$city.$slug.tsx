import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
  Rocket,
  Target,
  TrendingUp,
  ExternalLink,
  ShieldCheck,
  Globe,
  Zap,
  ChevronDown,
  CheckCircle2,
  Flame,
  Award,
  Star,
  Phone,
  MessageCircle,
  MapPin,
  Building2,
} from "lucide-react";
import { getLocation, locationHubs, SITE_DOMAIN } from "@/lib/locations-data";
import { getService, allServices } from "@/lib/services-data";
import { CTABanner, ContactBlock, Process } from "@/components/site/HomeSections";

export const Route = createFileRoute("/locations/$city/$slug")({
  loader: ({ params }) => {
    const loc = getLocation(params.city);
    const service = getService(params.slug);
    if (!loc || !service) throw notFound();
    return { loc, service };
  },
  head: ({ loaderData, params }) => {
    const loc = loaderData?.loc;
    const service = loaderData?.service;

    const title =
      loc && service
        ? `Best ${service.name} Company in ${loc.name}, Delhi NCR | Nexcore Technologies`
        : "Local Service — Nexcore";
    const desc =
      loc && service
        ? `Looking for top-rated ${service.name.toLowerCase()} in ${loc.name}? Nexcore Technologies delivers high-converting ${service.name.toLowerCase()} with fast turnaround and high ROI for businesses in ${loc.name} and across Delhi NCR.`
        : "Nexcore Technologies local digital services.";
    const canonical = `${SITE_DOMAIN}/locations/${params.city}/${params.slug}`;

    const breadcrumbSchema =
      loc && service
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_DOMAIN}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Locations",
                item: `${SITE_DOMAIN}/locations`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: loc.name,
                item: `${SITE_DOMAIN}/locations/${loc.slug}`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: `${service.name} in ${loc.name}`,
                item: canonical,
              },
            ],
          }
        : null;

    const serviceSchema =
      loc && service
        ? {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.name} in ${loc.name}`,
            serviceType: service.name,
            provider: {
              "@type": "LocalBusiness",
              name: "Nexcore Technologies",
              telephone: "+91-7607696315",
              url: SITE_DOMAIN,
              address: {
                "@type": "PostalAddress",
                streetAddress: loc.address,
                addressLocality: loc.name,
                addressRegion: "Delhi NCR",
                addressCountry: "IN",
              },
            },
            areaServed: {
              "@type": "City",
              name: loc.name,
            },
            description: desc,
          }
        : null;

    const faqList = [
      {
        q: `How much does ${service?.name || "this service"} cost in ${loc?.name || "Delhi NCR"}?`,
        a: `At Nexcore Technologies, our website development in ${loc?.name} starts from just ₹3,500 under our limited-time 60% OFF promotional package, which includes 2 full years of cloud hosting, free domain, mobile-responsive layout, and Google SEO setup. Custom marketing and software packages are priced transparently based on your specific requirements.`,
      },
      {
        q: `How quickly can you deliver ${service?.name || "this project"} for a ${loc?.name} business?`,
        a: `Standard projects in ${loc?.name} are delivered within 3 to 5 business days. Complex custom solutions, enterprise web apps, or e-commerce platforms take approximately 7 to 14 business days with milestone-based progress reviews.`,
      },
      {
        q: `Why choose Nexcore Technologies for ${service?.name || "digital services"} in ${loc?.name}?`,
        a: `Nexcore is based directly in the Delhi NCR region (Greater Noida HQ) with dedicated local client managers. We offer unmatched speed, 95+ Google Lighthouse performance scores, certified Google Ads and SEO specialists, and round-the-clock WhatsApp support for businesses in ${loc?.name}.`,
      },
      {
        q: `Can you meet our team in ${loc?.name} for project discussions?`,
        a: `Yes! Our project managers and senior consultants regularly visit clients across ${loc?.name} for in-person kickoffs, strategic planning, and performance reviews.`,
      },
    ];

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqList.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    };

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
        ...(breadcrumbSchema
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify(breadcrumbSchema),
              },
            ]
          : []),
        ...(serviceSchema
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify(serviceSchema),
              },
            ]
          : []),
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema),
        },
      ],
    };
  },
  component: CityServicePage,
});

function CityServicePage() {
  const { loc, service } = Route.useLoaderData();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const otherCitiesForThisService = locationHubs.filter((l) => l.slug !== loc.slug);
  const otherServicesInThisCity = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 6);

  const localFaqs = [
    {
      q: `How much does ${service.name} cost in ${loc.name}?`,
      a: `At Nexcore Technologies, our website development in ${loc.name} starts from just ₹3,500 under our limited-time 60% OFF promotional package, which includes 2 full years of cloud hosting, free domain, mobile-responsive layout, and Google SEO setup. Custom marketing and software packages are priced transparently based on your specific requirements.`,
    },
    {
      q: `How quickly can you deliver ${service.name} for a ${loc.name} business?`,
      a: `Standard projects in ${loc.name} are delivered within 3 to 5 business days. Complex custom solutions, enterprise web apps, or e-commerce platforms take approximately 7 to 14 business days with milestone-based progress reviews.`,
    },
    {
      q: `Why choose Nexcore Technologies for ${service.name} in ${loc.name}?`,
      a: `Nexcore is based directly in the Delhi NCR region (Greater Noida HQ) with dedicated local client managers. We offer unmatched speed, 95+ Google Lighthouse performance scores, certified Google Ads and SEO specialists, and round-the-clock WhatsApp support for businesses in ${loc.name}.`,
    },
    {
      q: `Can you meet our team in ${loc.name} for project discussions?`,
      a: `Yes! Our project managers and senior consultants regularly visit clients across ${loc.name} for in-person kickoffs, strategic planning, and performance reviews.`,
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-hero-mesh py-20 lg:py-28">
        <div className="container-p mx-auto max-w-7xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Link to="/" className="hover:text-secondary">Home</Link>
            <span>/</span>
            <Link to="/locations" className="hover:text-secondary">Locations</Link>
            <span>/</span>
            <Link to="/locations/$city" params={{ city: loc.slug }} className="hover:text-secondary">{loc.name}</Link>
            <span>/</span>
            <span className="text-navy">{service.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
                <MapPin className="size-3.5" />
                #1 {service.name} Agency in {loc.name}
              </div>

              <h1 className="mt-4 font-display text-4xl font-black tracking-tight text-navy sm:text-5xl lg:text-5xl">
                Best <span className="text-gradient">{service.name}</span> in{" "}
                {loc.name}, Delhi NCR
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
                Scale your revenue with battle-tested {service.name.toLowerCase()} engineered specifically for the {loc.name} market. Built for high conversion, maximum ROI, and top 3 Google search rankings.
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="rounded-lg bg-white px-3 py-1.5 border border-border shadow-soft">
                  ⚡ 3-5 Days Delivery
                </span>
                <span className="rounded-lg bg-white px-3 py-1.5 border border-border shadow-soft">
                  🎯 Top 3 Google SEO Setup
                </span>
                <span className="rounded-lg bg-white px-3 py-1.5 border border-border shadow-soft">
                  🛡️ 100% Satisfaction Guarantee
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href={`https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(loc.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-navy shadow-elegant transition hover:scale-105"
                >
                  <MessageCircle className="size-4" /> Get Free {loc.name} Quote
                </a>
                <a
                  href="tel:7607696315"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-bold text-navy shadow-soft transition hover:bg-surface"
                >
                  <Phone className="size-4 text-secondary" /> Call +91 7607696315
                </a>
              </div>
            </div>

            {/* Right Card: Offer Card */}
            <div className="rounded-3xl border-2 border-brand/40 bg-white p-7 shadow-elegant">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <span className="rounded-full bg-brand/20 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-navy">
                    🔥 60% OFF Today in {loc.name}
                  </span>
                  <h2 className="mt-2 font-display text-xl font-bold text-navy">
                    {service.name} Package
                  </h2>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground line-through">₹8,750</div>
                  <div className="font-display text-2xl font-black text-secondary">From ₹3,500</div>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Everything you need to launch and dominate search rankings in {loc.name} with zero technical headaches:
              </p>

              <ul className="mt-4 space-y-2.5 text-xs font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                  <span><strong>2 Years Cloud Hosting</strong> Included Free</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                  <span><strong>Free Domain Name</strong> for 1st Year</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                  <span><strong>Google SEO & Local Maps</strong> Schema Markup</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                  <span><strong>100% Responsive</strong> & Lightning Speed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                  <span><strong>Dedicated WhatsApp Support</strong> with {loc.name} team</span>
                </li>
              </ul>

              <a
                href={`https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%20want%20to%20claim%20the%2060%25%20OFF%20for%20${encodeURIComponent(service.name)}%20in%20${encodeURIComponent(loc.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand py-3 text-xs font-bold text-navy shadow-elegant transition hover:brightness-95"
              >
                Claim This Offer Now <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IN THIS CITY */}
      <section className="container-p mx-auto max-w-7xl py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Strategic Advantage
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
            Why {loc.name} Businesses Choose Nexcore for {service.name}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            We don't provide cookie-cutter solutions. We tailor every campaign and codebase to help you outshine competitors across {loc.name}.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <div className="grid size-12 place-items-center rounded-2xl bg-secondary/10 text-secondary">
              <TrendingUp className="size-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">
              Rank in Google Top 3 in {loc.name}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Built-in Schema.org, local NAP citations, speed optimization, and semantic keywords that get your business discovered by active local buyers.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <div className="grid size-12 place-items-center rounded-2xl bg-brand/20 text-navy">
              <Zap className="size-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">
              Blazing Fast Performance
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Sub-second page load times and 95+ Google Lighthouse scores so mobile visitors from {loc.name} never bounce to a competitor.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 shadow-soft">
            <div className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
              <ShieldCheck className="size-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">
              Direct NCR Support & Meetings
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Headquartered right in Delhi NCR. Get real-time WhatsApp coordination, transparent reporting, and in-person consultations in {loc.name}.
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL AREAS SERVED IN THIS CITY */}
      <section className="bg-surface py-16">
        <div className="container-p mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Local Coverage
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">
            Providing {service.name} Across All Areas of {loc.name}
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {loc.neighborhoods.map((nh, i) => (
              <span
                key={i}
                className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm border border-border"
              >
                📍 {service.name} in {nh}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* FAQS SECTION */}
      <section className="container-p mx-auto max-w-4xl py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Got Questions?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            Frequently Asked Questions — {service.name} in {loc.name}
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {localFaqs.map((faq, idx) => {
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

      {/* CROSS-LINKING: SAME SERVICE IN OTHER DELHI NCR CITIES */}
      <section className="border-t border-border bg-surface py-16">
        <div className="container-p mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold text-navy">
            {service.name} in Other Delhi NCR Cities
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherCitiesForThisService.map((other) => (
              <Link
                key={other.slug}
                to="/locations/$city/$slug"
                params={{ city: other.slug, slug: service.slug }}
                className="group rounded-2xl border border-border bg-white p-4 transition hover:border-brand hover:shadow-soft"
              >
                <p className="font-display text-sm font-bold text-navy group-hover:text-secondary transition">
                  {service.name} in {other.name} ↗
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  Serving {other.region}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES IN THIS CITY */}
      <section className="container-p mx-auto max-w-7xl py-16">
        <h2 className="font-display text-2xl font-bold text-navy">
          Other Digital Services in {loc.name}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherServicesInThisCity.map((os) => (
            <Link
              key={os.slug}
              to="/locations/$city/$slug"
              params={{ city: loc.slug, slug: os.slug }}
              className="group rounded-2xl border border-border bg-white p-4 transition hover:border-brand hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-sm font-bold text-navy group-hover:text-secondary transition">
                  {os.name} in {loc.name}
                </p>
                <ArrowRight className="size-3.5 text-secondary transition group-hover:translate-x-1" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                {os.short}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
      <ContactBlock />
    </>
  );
}
