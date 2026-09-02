import { createFileRoute, Link } from "@tanstack/react-router";
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
} from "lucide-react";
import { locationHubs, SITE_DOMAIN } from "@/lib/locations-data";
import { allServices } from "@/lib/services-data";
import { ContactBlock, CTABanner } from "@/components/site/HomeSections";

export const Route = createFileRoute("/locations/")({
  head: () => {
    const title =
      "Digital Marketing & Web Development in Delhi NCR | Noida, Delhi, Gurugram — Nexcore";
    const desc =
      "Nexcore Technologies provides high-converting website development, Google Ads, Meta Ads, and SEO services across Delhi NCR including Noida, Greater Noida, Delhi, Gurugram, and Faridabad.";
    const canonical = `${SITE_DOMAIN}/locations`;

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
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Nexcore Technologies",
            url: canonical,
            telephone: "+91-7607696315",
            email: "nexcoretechnologies.team@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Knowledge Park & Pari Chowk Region",
              addressLocality: "Greater Noida",
              addressRegion: "Uttar Pradesh",
              postalCode: "201310",
              addressCountry: "IN",
            },
            areaServed: [
              { "@type": "City", name: "Delhi" },
              { "@type": "City", name: "Noida" },
              { "@type": "City", name: "Greater Noida" },
              { "@type": "City", name: "Gurugram" },
              { "@type": "City", name: "Faridabad" },
              { "@type": "AdministrativeArea", name: "Delhi NCR" },
            ],
            priceRange: "₹₹",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "128",
            },
          }),
        },
      ],
    };
  },
  component: LocationsDirectoryPage,
});

function LocationsDirectoryPage() {
  const topServices = allServices.slice(0, 6);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-hero-mesh py-20 lg:py-28">
        <div className="container-p mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
            <MapPin className="size-3.5" />
            Delhi NCR Service Coverage
          </div>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Dominating Digital Growth Across{" "}
            <span className="text-gradient">Delhi NCR</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-muted-foreground">
            Whether you are a startup in <strong>Noida</strong>, an enterprise in{" "}
            <strong>Gurugram</strong>, a corporate firm in <strong>Delhi</strong>, an institution in{" "}
            <strong>Greater Noida</strong>, or an industry in <strong>Faridabad</strong> — Nexcore
            Technologies engineers custom websites, high-ROAS ads, and top-ranking SEO strategies
            tailored to your market.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%20want%20to%20discuss%20services%20in%20Delhi%20NCR."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-navy shadow-elegant transition hover:scale-105"
            >
              <MessageCircle className="size-4" /> Speak with Delhi NCR Lead
            </a>
            <a
              href="tel:7607696315"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-bold text-navy shadow-soft transition hover:bg-surface"
            >
              <Phone className="size-4 text-secondary" /> +91 7607696315
            </a>
          </div>
        </div>
      </section>

      {/* CITIES GRID */}
      <section className="container-p mx-auto max-w-7xl py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Target Locations
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
            Select Your City to Explore Local Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Explore dedicated services, localized case studies, and tailored pricing packages for
            your city in Delhi NCR.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locationHubs.map((loc) => (
            <div
              key={loc.slug}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-brand hover:shadow-elegant"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-10 place-items-center rounded-2xl bg-secondary/10 text-secondary">
                      <Building2 className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-navy">{loc.name}</h3>
                      <p className="text-xs font-semibold text-muted-foreground">{loc.region}</p>
                    </div>
                  </div>
                  {loc.slug === "greater-noida" && (
                    <span className="rounded-full bg-brand/20 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-navy">
                      Headquarters
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {loc.heroDesc}
                </p>

                {/* Local Stats */}
                <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-surface p-3.5">
                  {loc.localStats.slice(0, 2).map((st, i) => (
                    <div key={i}>
                      <div className="font-display text-lg font-black text-navy">{st.value}</div>
                      <div className="text-[11px] text-muted-foreground">{st.label}</div>
                    </div>
                  ))}
                </div>

                {/* Popular Neighborhoods */}
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Key Areas Covered:
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {loc.neighborhoods.slice(0, 4).map((nh, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                      >
                        {nh}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 border-t border-border/60 pt-5">
                <Link
                  to="/locations/$city"
                  params={{ city: loc.slug }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white transition group-hover:bg-secondary"
                >
                  Explore {loc.name} Services <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK SERVICE COMBINATIONS */}
      <section className="bg-surface py-20">
        <div className="container-p mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              High-Demand Services
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
              Most Popular City & Service Searches
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              Direct access to our most requested digital solutions across Delhi NCR hubs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locationHubs
              .filter((l) => l.slug !== "delhi-ncr")
              .map((loc) => (
                <div key={loc.slug} className="rounded-3xl border border-border bg-white p-6">
                  <div className="flex items-center gap-2 border-b border-border/60 pb-3 font-display text-lg font-bold text-navy">
                    <MapPin className="size-4 text-secondary" />
                    Top Services in {loc.name}
                  </div>
                  <ul className="mt-4 space-y-2.5 text-xs">
                    {topServices.map((srv) => (
                      <li key={srv.slug}>
                        <Link
                          to="/locations/$city/$slug"
                          params={{ city: loc.slug, slug: srv.slug }}
                          className="flex items-center justify-between font-semibold text-slate-700 transition hover:text-secondary"
                        >
                          <span>
                            {srv.name} in {loc.name}
                          </span>
                          <ArrowRight className="size-3 text-secondary" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <ContactBlock />
    </>
  );
}
