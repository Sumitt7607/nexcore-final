import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, Building2 } from "lucide-react";
import {
  Hero,
  TrustedLogos,
  Services,
  About,
  Results,
  WhyUs,
  Process,
  PortfolioPreview,
  CTABanner,
  Testimonials,
  FAQ,
  ContactBlock,
} from "@/components/site/HomeSections";
import { locationHubs, SITE_DOMAIN } from "@/lib/locations-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Nexcore Technologies — Top Digital Marketing & Web Development Agency in Delhi NCR, Noida & Gurugram",
      },
      {
        name: "description",
        content:
          "Nexcore Technologies builds high-converting websites, manages high-ROAS Google & Meta ads, and delivers top-ranking Local SEO across Delhi NCR including Noida, Greater Noida, Delhi, Gurugram, and Faridabad.",
      },
      {
        property: "og:title",
        content:
          "Nexcore Technologies — Top Digital Marketing & Web Development Agency in Delhi NCR",
      },
      {
        property: "og:description",
        content:
          "Websites, Google Ads, Meta Ads, SEO, branding and custom software engineered to rank in Google Top 3 and drive measurable ROI across Delhi NCR.",
      },
      { property: "og:url", content: `${SITE_DOMAIN}/` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE_DOMAIN}/` }],
  }),
  component: Home,
});

function HomeLocationsSection() {
  return (
    <section className="border-t border-border bg-surface py-20">
      <div className="container-p mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
              <MapPin className="size-3.5" /> Regional Presence
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
              Serving Businesses Across Delhi NCR
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
              From our Greater Noida headquarters, we provide on-ground digital strategy, rapid in-person consultations, and top-ranking search campaigns across NCR's largest business hubs.
            </p>
          </div>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-bold text-white transition hover:bg-secondary"
          >
            Explore All Locations <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locationHubs.map((loc) => (
            <Link
              key={loc.slug}
              to="/locations/$city"
              params={{ city: loc.slug }}
              className="group rounded-3xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand hover:shadow-elegant"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-xl bg-secondary/10 text-secondary">
                    <Building2 className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy group-hover:text-secondary transition">
                      {loc.name}
                    </h3>
                    <p className="text-[11px] font-medium text-muted-foreground">{loc.region}</p>
                  </div>
                </div>
                <ArrowRight className="size-4 text-secondary transition group-hover:translate-x-1" />
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                {loc.heroDesc}
              </p>

              <div className="mt-4 flex flex-wrap gap-1">
                {loc.neighborhoods.slice(0, 3).map((nh, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                  >
                    {nh}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <TrustedLogos />
      <Services />
      <HomeLocationsSection />
      <About />
      <Results />
      <WhyUs />
      <Process />
      <PortfolioPreview />
      <CTABanner />
      <Testimonials />
      <FAQ />
      <ContactBlock />
    </>
  );
}
