import { createFileRoute, Link, notFound } from "@tanstack/react-router";
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
  Video,
  BarChart3,
  Code2,
  Star,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { getService, allServices } from "@/lib/services-data";
import { CTABanner, ContactBlock, Process } from "@/components/site/HomeSections";

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

/* -------------------------------------------------------------------------- */
/* CUSTOM SERVICE CONFIGURATIONS FOR GOOGLE ADS, META ADS, VIDEO EDITING,     */
/* CUSTOM SOFTWARE & WEBSITE DEVELOPMENT                                       */
/* -------------------------------------------------------------------------- */

type PortfolioItem = {
  title: string;
  tag: string;
  metric: string;
  image: string;
  desc: string;
  liveUrl?: string;
  displayUrl?: string;
};

type ServiceConfig = {
  bullets: string[];
  portfolioTitle: string;
  portfolioDesc: string;
  portfolioItems: PortfolioItem[];
  promoBadge: string;
  promoTitle: string;
  promoSubtitle: string;
  features: string[];
  faqs: { q: string; a: string }[];
};

const defaultWebsiteConfig: ServiceConfig = {
  bullets: [
    "Website Development",
    "E-Commerce Development",
    "Website Maintenance",
    "Custom Web Applications",
    "High-Converting Landing Pages",
    "and much more...",
  ],
  portfolioTitle: "Website Development Portfolio",
  portfolioDesc: "Explore fast, responsive websites designed and engineered for growing brands.",
  portfolioItems: [
    {
      title: "Career4S",
      tag: "Counseling Portal",
      metric: "10,000+ Students",
      image: "/projects/career4s.png",
      desc: "Education & Admission Counseling Portal for India & Abroad. Fast-loading, responsive, and SEO optimized.",
      liveUrl: "https://www.career4s.com/",
      displayUrl: "career4s.com",
    },
    {
      title: "Ruzann",
      tag: "AI & Coding Platform",
      metric: "Loved by 10k Parents",
      image: "/projects/ruzann.png",
      desc: "Interactive video courses, live cohorts & AI Sandbox designed for kids with modern interactive UI.",
      liveUrl: "https://www.ruzann.com/",
      displayUrl: "ruzann.com",
    },
    {
      title: "Manshu Learning",
      tag: "Corporate Training",
      metric: "+240% Inquiries",
      image: "/projects/manshu.png",
      desc: "Professional excellence & corporate training platform delivering high-impact learning solutions.",
      liveUrl: "https://www.manshulearning.com/",
      displayUrl: "manshulearning.com",
    },
    {
      title: "GradeLab Studios",
      tag: "Production Studio",
      metric: "Cinematic Growth",
      image: "/projects/gradelab.png",
      desc: "High-end video production studio site combining cinematic aesthetics with responsive layout.",
      liveUrl: "https://www.gradelabstudios.com/",
      displayUrl: "gradelabstudios.com",
    },
    {
      title: "CR Fitness",
      tag: "Fitness Portal",
      metric: "3.8× Memberships",
      image: "/projects/crfitness.png",
      desc: "Premium fitness brand identity & membership experience portal designed to convert visitors into gym members.",
      liveUrl: "https://www.crfitnessgym86.in/",
      displayUrl: "crfitnessgym86.in",
    },
  ],
  promoBadge: "🔥 AMAZING CREATIVE OFFER: 60% OFF FOR TODAY",
  promoTitle: "Get the Best Pricing on Website Development",
  promoSubtitle: "Lock in your 60% discount today! Includes hosting, free domain name, SSL, and dedicated support.",
  features: [
    "2 Years Hosting Included",
    "Free Domain Name (1st Year)",
    "Fast & 100% Mobile Responsive Layout",
    "Dedicated Technical Support",
    "Built-in Google SEO & SSL Security",
  ],
  faqs: [
    {
      q: "What is included in the ₹3,500 Basic Website package?",
      a: "The ₹3,500 Basic Website plan includes 2 full years of high-speed cloud hosting, a free domain name for the 1st year, 100% mobile-responsive and ultra-fast design, 6 months of technical support, SSL security, and basic Google SEO setup.",
    },
    {
      q: "What extra benefits do I get with the ₹7,000 Growth package?",
      a: "The Growth package includes everything in the Basic plan, upgraded with 1 full year of dedicated support, custom interactive features, e-commerce / payment gateway integration, speed optimization, and priority maintenance.",
    },
    {
      q: "How does custom pricing work for complex website requirements?",
      a: "For custom web apps, portals, or large enterprise sites, we assess your project requirements and provide a transparent, milestone-based quote tailored strictly to your scope.",
    },
    {
      q: "How long does it take to build and launch my website?",
      a: "Basic websites are completed and launched within 3 to 5 business days. Growth and custom e-commerce websites usually take 7 to 14 business days.",
    },
  ],
};

const serviceCustomConfigs: Record<string, ServiceConfig> = {
  // GOOGLE ADS MANAGEMENT
  "google-ads-management": {
    bullets: [
      "High-Intent Google Search Ads",
      "Performance Max & Shopping Campaigns",
      "Display & Remarketing Banner Ads",
      "YouTube Video & Lead Generation Ads",
      "Negative Keywords & ROAS Tuning",
      "and much more...",
    ],
    portfolioTitle: "Google Ads Portfolio & Campaign Results",
    portfolioDesc: "See real Google Ads campaigns engineered to drive high-intent inquiries and scale ROI.",
    portfolioItems: [
      {
        title: "Google Search Lead Gen",
        tag: "Search Ads",
        metric: "+340% Qualified Leads",
        image: "/projects/google-ads-1.jpg",
        desc: "Laser-targeted Google Search campaign capturing high-intent buyer searches with negative keyword filtering.",
      },
      {
        title: "E-Commerce Performance Max",
        tag: "PMax Campaign",
        metric: "4.8× Average ROAS",
        image: "/projects/gads-result-1.jpg",
        desc: "AI-driven Performance Max ads scaling sales across Google Search, Shopping, YouTube, and Display.",
      },
      {
        title: "Local Business Campaign",
        tag: "Maa Bhojanalaya",
        metric: "1,200+ Monthly Calls",
        image: "/projects/maa-bhojanalaya.jpg",
        desc: "Google Maps & Local Search ads driving foot traffic and high-volume local customer orders.",
      },
      {
        title: "B2B Service Acquisition",
        tag: "Display & Search",
        metric: "52% Lower CPL",
        image: "/projects/gads-result-2.jpg",
        desc: "Structured B2B keyword campaign delivering steady qualified leads while cutting cost-per-lead in half.",
      },
    ],
    promoBadge: "🔥 AMAZING CREATIVE OFFER: 60% OFF FOR TODAY",
    promoTitle: "Get the Best Pricing on Google Ads Setup & Management",
    promoSubtitle: "Stop wasting ad budget on bad clicks. Get our certified Google Ads setup & optimization at 60% OFF today!",
    features: [
      "Complete Keyword & Competitor Research",
      "High-Converting Ad Copy & Extensions",
      "Conversion Tracking & GA4 Setup",
      "Negative Keywords & Bid Strategy Tuning",
      "Weekly Performance Reports & Call Tracking",
    ],
    faqs: [
      {
        q: "How soon will I start seeing leads from Google Ads?",
        a: "Google Ads start showing to active searchers as soon as your campaign goes live. Most clients see incoming calls and form leads within 24 to 48 hours.",
      },
      {
        q: "How do you stop budget waste on irrelevant clicks?",
        a: "We implement exhaustive negative keyword lists, exact match targeting, geo-fencing, and daily bid tuning so your budget is spent only on real buyers.",
      },
      {
        q: "Do I get full access to my Google Ads account?",
        a: "Yes, 100%! You retain full ownership of your Google Ads account, billing, and campaign data at all times.",
      },
    ],
  },

  // META ADS MANAGEMENT
  "meta-ads-management": {
    bullets: [
      "Facebook Feed & Story Ad Creatives",
      "Instagram Reels & Video Ads",
      "Instant Lead Form Campaigns",
      "Retargeting & Custom Audiences",
      "E-Commerce ROAS Scaling",
      "and much more...",
    ],
    portfolioTitle: "Meta Ads & Social Creative Portfolio",
    portfolioDesc: "High-performing Facebook & Instagram ad campaigns designed to capture scroll attention and convert.",
    portfolioItems: [
      {
        title: "Take A Deals Store",
        tag: "E-Commerce Meta Ads",
        metric: "5.2× ROAS",
        image: "/projects/takeadeals.png",
        desc: "High-converting promo ad banners & carousel campaign for South Africa's premier online store.",
      },
      {
        title: "Champs Fighter",
        tag: "Sports Packaging & Ads",
        metric: "+180% Sales Growth",
        image: "/projects/champs-fighter.jpg",
        desc: "Vibrant social ad creative suite & product showcase driving continuous direct-to-consumer sales.",
      },
      {
        title: "AL CELL Store",
        tag: "Social Creative Suite",
        metric: "15,000+ Clicks",
        image: "/projects/alcell.png",
        desc: "Eye-catching banner designs and targeted Facebook lead ads for mobile retail store.",
      },
      {
        title: "Heineken 3 Campaign",
        tag: "Commercial Creative",
        metric: "1M+ Impressions",
        image: "/projects/heineken.jpg",
        desc: "Sleek product poster visuals and social brand campaign designed for high engagement.",
      },
    ],
    promoBadge: "⚡ SPECIAL CREATIVE OFFER: 60% OFF FOR TODAY",
    promoTitle: "Get the Best Pricing on Meta Ads Management",
    promoSubtitle: "Fill your sales pipeline with Facebook & Instagram ads. Claim 60% OFF setup & ad creative design today!",
    features: [
      "Custom Ad Creatives, Reels & Banners",
      "Precise Audience & Interest Targeting",
      "Meta Pixel & Conversion API Setup",
      "A/B Split Testing for Copy & Visuals",
      "Retargeting & Lookalike Audience Scaling",
    ],
    faqs: [
      {
        q: "What ad creatives do you provide for Meta Ads?",
        a: "We design custom graphics, carousel image banners, and short-form video reels tailored specifically for Facebook and Instagram feeds and stories.",
      },
      {
        q: "Can you target specific locations and demographics?",
        a: "Yes! We target precise locations, age groups, income brackets, and specific buyer interests to reach your ideal customer.",
      },
    ],
  },

  // VIDEO EDITING
  "video-editing": {
    bullets: [
      "Viral Instagram Reels & Shorts",
      "High-Converting Video Ad Creatives",
      "YouTube Long-form & Podcast Editing",
      "Motion Graphics & VFX Effects",
      "Color Grading & Kinetic Captions",
      "and much more...",
    ],
    portfolioTitle: "Video Editing & Motion Creative Portfolio",
    portfolioDesc: "Engaging, scroll-stopping videos edited for maximum retention, clicks, and brand impact.",
    portfolioItems: [
      {
        title: "GradeLab Studios",
        tag: "Cinematic Editing",
        metric: "2M+ Views",
        image: "/projects/gradelab.png",
        desc: "High-end video production & cinematic storytelling edited with precision sound and motion graphics.",
      },
      {
        title: "Champs Fighter Reel",
        tag: "Action Video Edit",
        metric: "Viral Engagement",
        image: "/projects/champs-fighter.jpg",
        desc: "High-energy sport clips edited into fast-paced Instagram Reels with trending audio and subtitles.",
      },
      {
        title: "Heineken Commercial",
        tag: "Motion Graphics",
        metric: "Commercial Grade",
        image: "/projects/heineken.jpg",
        desc: "Smooth motion design, color grading, and product visual effects for digital video campaign.",
      },
    ],
    promoBadge: "🎬 CREATIVE OFFER: 60% OFF FOR TODAY",
    promoTitle: "Get the Best Pricing on Video Editing & Reels",
    promoSubtitle: "Turn raw footage into viral Reels, Shorts, and ads. Lock in 60% OFF video packages today!",
    features: [
      "Engaging Subtitles & Animated Captions",
      "Trending Audio & Sound Effects (SFX)",
      "High-Definition 4K Rendering",
      "Custom Motion Graphics & Lower Thirds",
      "Fast 24-48 Hour Turnaround per Video",
    ],
    faqs: [
      {
        q: "What video formats do you deliver?",
        a: "We deliver in 9:16 vertical for Reels/TikTok/Shorts, 16:9 widescreen for YouTube, and 1:1 square for social posts.",
      },
      {
        q: "How do I send my raw video clips?",
        a: "You can upload raw clips via Google Drive, Dropbox, or WeTransfer. We take care of editing, sound, and formatting.",
      },
    ],
  },

  // CUSTOM SOFTWARE DEVELOPMENT
  "custom-software-development": {
    bullets: [
      "Custom CRM & Business ERP Systems",
      "SaaS Platform & Web App Engineering",
      "Automated Workflow & API Systems",
      "Custom Cloud Database Architecture",
      "Enterprise Security & Backups",
      "and much more...",
    ],
    portfolioTitle: "Custom Software & Web Systems Portfolio",
    portfolioDesc: "Bespoke web applications, SaaS products, and custom software engineered to scale.",
    portfolioItems: [
      {
        title: "Ruzann AI Platform",
        tag: "EdTech & AI System",
        metric: "10k+ Active Users",
        image: "/projects/ruzann.png",
        desc: "Interactive video course platform with live cohorts and custom AI Sandbox integration.",
      },
      {
        title: "Manshu Corporate Software",
        tag: "Enterprise Portal",
        metric: "Automated Workflow",
        image: "/projects/manshu.png",
        desc: "Custom training portal with user role management, automated reporting, and CRM integration.",
      },
      {
        title: "Career4S System",
        tag: "Data Counseling Portal",
        metric: "100k+ Records",
        image: "/projects/career4s.png",
        desc: "Scalable web database portal handling thousands of student inquiries and counselor assignments.",
      },
    ],
    promoBadge: "🚀 ENTERPRISE OFFER: 60% OFF FOR TODAY",
    promoTitle: "Get the Best Pricing on Custom Software Development",
    promoSubtitle: "Build powerful custom CRMs, web apps, and SaaS platforms built around your exact business needs.",
    features: [
      "Tailored System Architecture & Database Design",
      "Intuitive Admin & Staff Dashboards",
      "Secure Cloud Hosting & Auto-Backups",
      "API Integrations (Payment, SMS, WhatsApp, CRM)",
      "Full Source Code Ownership & Support",
    ],
    faqs: [
      {
        q: "Do I own the source code of my custom software?",
        a: "Yes, 100%! Upon project completion, full intellectual property and source code ownership are transferred to you.",
      },
      {
        q: "Can you integrate with our existing tools and APIs?",
        a: "Absolutely. We build custom API bridges to integrate seamlessly with your CRM, payment gateways, WhatsApp, and internal tools.",
      },
    ],
  },
};

function getServiceConfig(slug: string): ServiceConfig {
  if (serviceCustomConfigs[slug]) {
    return serviceCustomConfigs[slug];
  }
  // Generic fallback customizing title & bullets for any other service
  return {
    ...defaultWebsiteConfig,
    promoTitle: `Get the Best Pricing on ${getService(slug)?.name ?? "Our Services"}`,
  };
}

const websitePricingPlans = [
  {
    name: "Basic Website",
    price: "₹3,500",
    period: "one-time",
    featured: false,
    badge: "Starter Package",
    features: [
      "Hosting included for 2 years",
      "Domain Name (1st year free)",
      "Fast & 100% Mobile Responsive",
      "6 Months Dedicated Support",
      "Free SSL & Google SEO Setup",
      "Custom Pages & Lead Contact Form",
    ],
    ctaText: "Get Basic Plan",
  },
  {
    name: "Growth Package",
    price: "₹7,000",
    period: "one-time",
    featured: true,
    badge: "Most Popular",
    features: [
      "Includes everything in Basic",
      "1 Year Dedicated Support",
      "Custom Features & Interactive Layouts",
      "E-Commerce & Payment Gateway Setup",
      "Advanced Speed & Performance Tuning",
      "Priority Maintenance & Backups",
    ],
    ctaText: "Get Growth Plan",
  },
  {
    name: "Custom Package",
    price: "Custom",
    period: "based on requirements",
    featured: false,
    badge: "Tailored & Enterprise",
    features: [
      "Custom pricing based on requirements",
      "Full Web App / Software Architecture",
      "Bespoke CRM & API Integrations",
      "Dedicated Senior Developer Team",
      "Unlimited Revisions & Milestone Sprints",
      "24/7 SLA & Enterprise Priority Support",
    ],
    ctaText: "Get Custom Quote",
  },
];

function ServicePage() {
  const { service } = Route.useLoaderData();
  const config = getServiceConfig(service.slug);
  const related = allServices.filter((s) => s.slug !== service.slug).slice(0, 3);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isWebsite = service.slug === "website-development" || service.slug.includes("website");

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-hero-mesh relative overflow-hidden">
        <div className="container-p mx-auto max-w-7xl py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm backdrop-blur">
                <Sparkles className="size-3.5 text-secondary" /> Service Overview
              </div>

              <h1 className="mt-4 font-display text-4xl font-bold text-navy md:text-5xl lg:text-6xl leading-tight">
                {service.name.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-gradient">{service.name.split(" ").slice(-1)}</span>
              </h1>

              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
                {service.short}
              </p>

              {/* OUR SERVICES BULLETS */}
              <div className="mt-8 rounded-3xl border border-border/80 bg-white/90 p-6 shadow-soft backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  Our Services
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {config.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-navy">
                        <CheckCircle2 className="size-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold text-navy">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#pricing-section"
                  className="rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-navy shadow-elegant transition hover:scale-105 hover:bg-brand/90 flex items-center gap-2"
                >
                  See Pricing Plans <ArrowRight className="size-4" />
                </a>
                <a
                  href="tel:7607696315"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-red-700"
                >
                  <Phone className="size-4" /> Call Now
                </a>
                <a
                  href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%20want%20a%20free%20consultation%20for%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-green-700"
                >
                  <MessageCircle className="size-4" /> WhatsApp Now
                </a>
              </div>
            </div>

            {/* HERO RIGHT CARDS */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { icon: Rocket, title: "Fast Execution", desc: "Rapid deployment with clean strategy & engineering" },
                { icon: Globe, title: "Transparent Pricing", desc: "No hidden fees, simple upfront packages" },
                { icon: ShieldCheck, title: "Dedicated Support", desc: "Ongoing care & maintenance included" },
                { icon: Zap, title: "High Conversions", desc: "Designed & optimized for maximum ROI" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition hover:border-brand/50 hover:shadow-md"
                >
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-softgreen text-navy">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION WITH ANIMATED 60% OFF BANNER CARD */}
      <section id="pricing-section" className="container-p mx-auto max-w-7xl py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Pricing & Limited Offer
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl lg:text-5xl">
            Simple, Transparent & Affordable Pricing
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Get top-tier services at unbeatable rates with our limited-time special discount.
          </p>
        </div>

        {/* 60% OFF ANIMATED CREATIVE BANNER CARD */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border-2 border-brand bg-gradient-to-br from-navy via-slate-900 to-navy p-8 md:p-12 shadow-2xl text-white">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-brand/25 blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-red-500/20 blur-3xl" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                {/* ANIMATED CREATIVE 60% OFF TAG */}
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg animate-pulse">
                  <Flame className="size-4 text-yellow-300 fill-yellow-300" />
                  <span>{config.promoBadge}</span>
                </div>

                <h3 className="mt-5 font-display text-3xl font-extrabold md:text-4xl lg:text-5xl text-white leading-tight">
                  {config.promoTitle}
                </h3>

                <p className="mt-3 text-base md:text-lg text-white/80 max-w-2xl">
                  {config.promoSubtitle}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {config.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="grid size-5 shrink-0 place-items-center rounded-full bg-brand text-navy">
                        <Check className="size-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold text-white/90">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center lg:border-l lg:border-white/10 lg:pl-8">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md w-full">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">
                    Today's Exclusive Deal
                  </span>
                  <div className="mt-2 flex items-baseline justify-center gap-2">
                    <span className="font-display text-5xl font-black text-brand">60% OFF</span>
                  </div>
                  <p className="mt-1 text-xs text-white/70">Limited slots available for today</p>

                  <a
                    href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%20want%20the%2060%25%20OFF%20deal.%20Please%20share%20the%20best%20pricing%20for%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 group relative inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-4 text-base font-extrabold text-navy shadow-xl transition-all duration-300 hover:scale-105 hover:bg-brand/90 hover:shadow-brand/40 gap-2"
                  >
                    <MessageCircle className="size-5" /> Get the Best Pricing
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WEBSITE SPECIFIC 3-COLUMN PLANS (BASIC ₹3,500 / GROWTH ₹7,000 / CUSTOM) */}
        {isWebsite && (
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="font-display text-2xl font-bold text-navy">
                Website Development Standard Packages
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Choose between our fixed transparent packages or get custom scope.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 items-stretch">
              {websitePricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300 ${
                    plan.featured
                      ? "border-brand bg-navy text-white shadow-2xl scale-[1.03]"
                      : "border-border bg-white text-navy shadow-soft hover:shadow-elegant"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-navy shadow-md">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    {!plan.featured && (
                      <span className="inline-block rounded-full bg-surface px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy mb-2">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className={`font-display text-2xl font-bold ${plan.featured ? "text-white" : "text-navy"}`}>
                      {plan.name}
                    </h3>

                    <div className="mt-4 flex items-baseline gap-1">
                      <span className={`font-display text-4xl font-extrabold lg:text-5xl ${plan.featured ? "text-brand" : "text-navy"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-xs ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}>
                        / {plan.period}
                      </span>
                    </div>

                    <div className={`mt-6 h-px w-full ${plan.featured ? "bg-white/10" : "bg-border"}`} />

                    <ul className="mt-6 space-y-3.5 text-sm">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${plan.featured ? "bg-brand text-navy" : "bg-softgreen text-navy"}`}>
                            <Check className="size-3" strokeWidth={3} />
                          </span>
                          <span className={plan.featured ? "text-white/90" : "text-navy/90"}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <a
                      href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%27m%20interested%20in%20your%20website%20package.%20Please%20share%20more%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex w-full items-center justify-center rounded-full py-3.5 text-sm font-bold shadow-md transition hover:scale-[1.02] ${
                        plan.featured
                          ? "bg-brand text-navy hover:bg-brand/90"
                          : "bg-navy text-white hover:bg-navy/90"
                      }`}
                    >
                      <MessageCircle className="size-4" /> {plan.ctaText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* PORTFOLIO SECTION TAILORED PER SERVICE */}
      <section className="bg-surface/50 border-y border-border py-20">
        <div className="container-p mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Our Work
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
                {config.portfolioTitle}
              </h2>
              <p className="mt-2 text-muted-foreground max-w-xl">
                {config.portfolioDesc}
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-semibold text-secondary transition hover:text-navy"
            >
              View Full Portfolio <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {config.portfolioItems.map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:border-brand/60 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-navy/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      {project.metric}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="inline-block rounded-full bg-softgreen px-3 py-1 text-xs font-semibold text-navy">
                      {project.tag}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-navy">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-border/40 mt-4">
                  <span className="text-xs font-mono text-muted-foreground">
                    {project.displayUrl ?? "Case Study"}
                  </span>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy transition hover:text-secondary"
                    >
                      Visit Live Site <ExternalLink className="size-3.5" />
                    </a>
                  ) : (
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy transition hover:text-secondary"
                    >
                      Get Similar Results <ArrowRight className="size-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* FAQ SECTION */}
      <section className="container-p mx-auto max-w-4xl py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Got Questions?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {config.faqs.map((faq, idx) => {
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

      <CTABanner />

      {/* RELATED SERVICES */}
      <section className="container-p mx-auto max-w-7xl py-16">
        <h2 className="font-display text-2xl font-bold text-navy">Related services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/services/$slug"
              params={{ slug: r.slug }}
              className="group rounded-3xl border border-border bg-white p-5 transition hover:border-brand hover:shadow-elegant"
            >
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
