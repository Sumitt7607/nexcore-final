import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CTABanner } from "@/components/site/HomeSections";
import { SITE_DOMAIN } from "@/lib/locations-data";

const projects = [
  {
    title: "Career4S",
    tag: "Website",
    metric: "10,000+ Students",
    image: "/projects/career4s.png",
    desc: "Education & Admission Counseling Portal for India & Abroad. Trusted by over 10,000 students for their academic journey.",
    url: "career4s.com",
    liveUrl: "https://www.career4s.com/",
    isDashboard: false,
    stats: [],
  },
  {
    title: "Ruzann",
    tag: "Website",
    metric: "Loved by 10k Parents",
    image: "/projects/ruzann.png",
    desc: "AI & Coding Learning Platform built for kids. Interactive video courses, live cohorts & AI Sandbox for creative skill-building.",
    url: "ruzann.com",
    liveUrl: "https://www.ruzann.com/",
    isDashboard: false,
    stats: [],
  },
  {
    title: "Manshu Learning",
    tag: "Website",
    metric: "+240% Inquiries",
    image: "/projects/manshu.png",
    desc: "Professional excellence & corporate training platform delivering high-impact learning solutions to organizations and teams.",
    url: "manshulearning.com",
    liveUrl: "https://www.manshulearning.com/",
    isDashboard: false,
    stats: [],
  },
  {
    title: "GradeLab Studios",
    tag: "Website",
    metric: "Cinematic Growth",
    image: "/projects/gradelab.png",
    desc: "High-end video production studio combining cinematic storytelling with strategic digital marketing for measurable brand growth.",
    url: "gradelabstudios.com",
    liveUrl: "https://www.gradelabstudios.com/",
    isDashboard: false,
    stats: [],
  },
  {
    title: "CR Fitness",
    tag: "Website",
    metric: "3.8× Memberships",
    image: "/projects/crfitness.png",
    desc: "Premium fitness brand identity & membership experience portal. Designed to convert visitors into loyal gym members.",
    url: "crfitnessgym86.in",
    liveUrl: "https://www.crfitnessgym86.in/",
    isDashboard: false,
    stats: [],
  },
  {
    title: "Champs Fighter",
    tag: "Branding",
    metric: "Sports Packaging",
    image: "/projects/champs-fighter.jpg",
    desc: "High-impact packaging design & social ad creative for Champs Fighter classic sports equipment.",
    url: "champsfighter.com",
    isDashboard: false,
    stats: [],
  },
  {
    title: "Take A Deals",
    tag: "Branding",
    metric: "E-Commerce Creative",
    image: "/projects/takeadeals.png",
    desc: "Promotional ad banner & digital campaign creative suite for South Africa's premier e-commerce store.",
    url: "takeadeals.com",
    isDashboard: false,
    stats: [],
  },
  {
    title: "AL CELL Store",
    tag: "Branding",
    metric: "Vibrant Brand Design",
    image: "/projects/alcell.png",
    desc: "Product marketing banner & social promo creative design for AL CELL South Africa E-Commerce.",
    url: "alcell.co.za",
    isDashboard: false,
    stats: [],
  },
  {
    title: "Heineken 3",
    tag: "Branding",
    metric: "Commercial Ad Design",
    image: "/projects/heineken.jpg",
    desc: "Sleek product poster visual & brand creative campaign for Heineken Mid Strength Lager.",
    url: "heineken.com",
    isDashboard: false,
    stats: [],
  },
  {
    title: "Maa Bhojanalaya",
    tag: "Branding",
    metric: "Restaurant Brand Identity",
    image: "/projects/maa-bhojanalaya.jpg",
    desc: "Complete restaurant brand identity, promo banner, and local business marketing design.",
    url: "maabhojanalaya.com",
    isDashboard: false,
    stats: [],
  },
  {
    title: "Google Ads Campaign",
    tag: "Google Ads",
    metric: "16,316 Impressions",
    image: "/projects/google-ads-1.jpg",
    desc: "Live Google Ads campaign dashboard — 251 clicks, 16,316 impressions at ₹13.63 avg. CPC in just 7 days. Real client results.",
    url: "ads.google.com",
    isDashboard: true,
    stats: [
      { label: "Clicks", value: "251", color: "bg-blue-500" },
      { label: "Impressions", value: "16,316", color: "bg-red-500" },
      { label: "Avg. CPC", value: "₹13.63", color: "bg-yellow-500" },
      { label: "Cost", value: "₹3,420", color: "bg-green-600" },
    ],
  },
  {
    title: "Search Ads Results",
    tag: "Google Ads",
    metric: "46 Clicks · 3.76% CTR",
    image: "/projects/google-ads-2.jpg",
    desc: "Google Search Ads campaign showing 1,223 impressions, 46 clicks & 3.76% CTR at only ₹867.08 total spend. Efficient & cost-effective.",
    url: "ads.google.com",
    isDashboard: true,
    stats: [
      { label: "Clicks", value: "46", color: "bg-blue-500" },
      { label: "Impressions", value: "1,223", color: "bg-red-500" },
      { label: "Avg. CPC", value: "₹18.85", color: "bg-yellow-500" },
      { label: "Cost", value: "₹867", color: "bg-green-600" },
    ],
  },
];

const filters = ["All", "Website", "Google Ads", "Branding"];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Client Portfolio & Case Studies | Nexcore Technologies (Delhi NCR)" },
      { name: "description", content: "Explore live websites, Google Ads campaigns, and SEO case studies delivered by Nexcore Technologies for clients across Delhi, Noida, Greater Noida, and Gurugram." },
      { property: "og:title", content: "Client Portfolio & Case Studies — Nexcore Technologies" },
      { property: "og:description", content: "Real websites, ad campaigns and measurable results for businesses across Delhi NCR and India." },
      { property: "og:url", content: `${SITE_DOMAIN}/portfolio` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE_DOMAIN}/portfolio` }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const items = projects.filter((p) => filter === "All" || p.tag === filter);

  return (
    <>
      <section className="bg-hero-mesh">
        <div className="container-p mx-auto max-w-7xl py-16 sm:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our Track Record</p>
          <h1 className="mt-3 font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-navy">
            Work Built to <span className="text-gradient">Rank & Convert</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Explore live websites, certified Google & Meta ad dashboards, and software we built for clients across Delhi NCR and India — with real, verifiable metrics.
          </p>
        </div>
      </section>

      <div className="container-p mx-auto max-w-7xl py-10 sm:py-16">
        {/* Filter buttons — scrollable on mobile */}
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                filter === f
                  ? "bg-navy text-white shadow-md"
                  : "border border-border bg-white text-navy hover:border-navy"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid — 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-xl"
            >
              {/* Browser chrome header - Only for Website */}
              {p.tag === "Website" && (
                <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-2">
                  <div className="size-2.5 rounded-full bg-red-500/80" />
                  <div className="size-2.5 rounded-full bg-yellow-500/80" />
                  <div className="size-2.5 rounded-full bg-green-500/80" />
                  <div className="ml-2 flex-1 truncate rounded-md bg-white/10 px-2 py-0.5 font-mono text-[9px] text-white/50">
                    https://{p.url}
                  </div>
                </div>
              )}

              {/* Screenshot / Graphic preview */}
              <div className={`relative ${p.tag === "Branding" ? "h-52 sm:h-64" : "h-44 sm:h-56"} overflow-hidden bg-slate-100`}>
                <img
                  src={p.image}
                  alt={p.title}
                  className={`h-full w-full ${p.tag === "Branding" ? "object-cover object-center" : "object-cover object-top"} transition duration-700 group-hover:scale-105`}
                />
                <div className="absolute right-2 top-2 rounded-full bg-navy/80 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  {p.tag}
                </div>
                <div className="absolute bottom-2 left-2 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold text-navy shadow-md">
                  {p.metric}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-navy">{p.title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">{p.desc}</p>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border/50 pt-4">
                  {p.tag === "Website" ? (
                    <>
                      <a
                        href={p.liveUrl || `https://www.${p.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 text-[11px] font-bold transition shadow-sm"
                      >
                        <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
                        Live Website ↗
                      </a>
                      <a
                        href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20for%20my%20website."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 text-[11px] font-bold shadow-md transition active:scale-95"
                      >
                        <MessageCircle className="size-3" /> WhatsApp Now
                      </a>
                    </>
                  ) : p.tag === "Branding" ? (
                    <>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-[11px] font-semibold text-navy">
                        <span className="size-1.5 rounded-full bg-green-500" />
                        Brand Design
                      </span>
                      <a
                        href="https://photos.google.com/u/4/share/AF1QipP-rW5OuQ4kSLLOjZYt0lSnhnnjM8X0YqeiujPMpkF8XGYfwOfu5WhEBnDsD16bHg?pli=1&pageId=none&key=c0ZkYWpmNUZodzdxczFwaTV6TmctQUNCQnNRbFdn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary transition hover:text-navy hover:underline"
                      >
                        See More Brands <ArrowRight className="size-3" />
                      </a>
                    </>
                  ) : (
                    <>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-[11px] font-semibold text-navy">
                        <span className="size-1.5 rounded-full bg-green-500" />
                        Ad Campaign
                      </span>
                      <a
                        href="https://wa.me/917607696315?text=Hi%2C%20I%27m%20interested%20in%20Google%20Ads%20services.%20Can%20I%20get%20more%20details%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 text-[11px] font-bold shadow-md transition active:scale-95"
                      >
                        <MessageCircle className="size-3" />
                        Get Details
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
    </>
  );
}
