import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Star, Zap, Search, Rocket, Target, ChevronLeft, ChevronRight,
  BarChart3, LineChart, Globe, PenTool, Video, Bot,
  Check, Sparkles, TrendingUp, Users, Award, Clock, Quote,
  Phone, Mail, MapPin, MessageCircle, Plus, Minus,
  Facebook, Instagram, Youtube, ShieldCheck, Linkedin,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { serviceGroups } from "@/lib/services-data";

/* ---------------- Hero ---------------- */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", `${x * 20}px`);
      el.style.setProperty("--my", `${y * 20}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} className="bg-hero-mesh relative min-h-[92vh] overflow-hidden">
      {/* blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 size-96 animate-blob bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 size-[28rem] animate-blob bg-secondary/25 blur-3xl" style={{ animationDelay: "-4s" }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0F172A_1px,transparent_1px),linear-gradient(to_bottom,#0F172A_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="container-p relative mx-auto grid max-w-7xl gap-14 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        {/* Left */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-navy shadow-soft backdrop-blur">
            <span className="grid size-5 place-items-center rounded-full bg-brand text-navy"><Sparkles className="size-3" /></span>
            Top-Rated Digital Agency in Delhi NCR · Noida · Gurugram · Gr. Noida
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Grow Faster With <span className="text-gradient">Websites, Ads & SEO</span> That Rank Top 3 & Deliver Results.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Headquartered in Greater Noida, Nexcore Technologies engineers high-converting websites,
            high-ROAS Google & Meta ads, and dominant Local SEO for businesses across Noida, Greater Noida, Delhi, Gurugram, and Faridabad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:7607696315" className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant transition hover:brightness-95">
              <Phone className="size-4" /> Call Now
            </a>
            <a href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%20want%20a%20free%20consultation%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-blue transition hover:bg-green-700">
              <MessageCircle className="size-4" /> WhatsApp Now
            </a>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-navy">
              View Portfolio
            </Link>
          </div>


        </div>

        {/* Right — floating dashboard mocks */}
        <div className="relative h-[520px]" style={{ perspective: "1200px" }}>
          <div className="absolute inset-0" style={{ transform: "translate3d(var(--mx,0), var(--my,0), 0)" }}>
            {/* Laptop */}
            <div className="absolute right-0 top-8 w-[88%] animate-float rounded-2xl border border-navy/10 bg-white p-3 shadow-elegant">
              <div className="mb-2 flex gap-1.5"><span className="size-2.5 rounded-full bg-red-400" /><span className="size-2.5 rounded-full bg-amber-400" /><span className="size-2.5 rounded-full bg-emerald-400" /></div>
              <div className="rounded-xl bg-gradient-to-br from-navy to-secondary p-5 text-white">
                <p className="text-xs uppercase tracking-wider text-brand">Nexcore · Performance</p>
                <p className="mt-2 font-display text-2xl font-bold">₹ 1 Lakh+ Revenue</p>
                <p className="text-xs text-white/70">+142% vs last quarter</p>
                <div className="mt-4 flex h-16 items-end gap-1.5">
                  {[30, 50, 42, 68, 55, 78, 90, 65, 88, 72, 95, 80].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-white/20">
                      <div className="rounded-sm bg-brand" style={{ height: `${h}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
                <Metric label="Sessions" value="48.2k" />
                <Metric label="CTR" value="6.8%" />
                <Metric label="ROAS" value="7.4x" />
              </div>
            </div>

            {/* Google Ads card */}
            <div className="absolute -left-2 top-0 w-56 animate-float-slow rounded-2xl border border-navy/10 bg-white p-4 shadow-elegant">
              <div className="flex items-center gap-2">
                <div className="grid size-9 place-items-center rounded-xl bg-softgreen"><Target className="size-4 text-navy" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Google Ads</p>
                  <p className="font-display text-sm font-semibold text-navy">Campaign Live</p>
                </div>
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface"><div className="h-full w-4/5 bg-brand" /></div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface"><div className="h-full w-3/5 bg-secondary" /></div>
              </div>
              <p className="mt-2 text-xs text-secondary"><TrendingUp className="mr-1 inline size-3" />CPL down 42%</p>
            </div>

            {/* Conversion card */}
            <div className="absolute -bottom-2 left-6 w-64 animate-float rounded-2xl border border-navy/10 bg-white p-4 shadow-elegant" style={{ animationDelay: "-2s" }}>
              <p className="text-xs text-muted-foreground">Conversions Today</p>
              <p className="mt-1 font-display text-3xl font-bold text-navy">120+</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold text-navy">+12.4%</span>
                <span className="text-xs text-muted-foreground">vs yesterday</span>
              </div>
              <div className="mt-3 flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Client"
                    className="size-7 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
                <div className="grid size-7 place-items-center rounded-full border-2 border-white bg-surface text-[10px] font-bold text-navy">+95</div>
              </div>
            </div>

            {/* Star badge */}
            <div className="absolute right-4 bottom-14 rotate-6 rounded-2xl bg-navy px-4 py-3 text-white shadow-elegant">
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-brand text-brand" />)}</div>
              <p className="mt-1 text-xs font-semibold">4.9 / 5 rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-surface p-2">
      <p className="text-muted-foreground">{label}</p>
      <p className="font-display text-sm font-bold text-navy">{value}</p>
    </div>
  );
}

/* ---------------- Trusted logos ---------------- */
export function TrustedLogos() {
  const logos = ["Ruzann", "Manshu Learning", "GradeLab Studios", "Cr Fitness", "Shreee Neurology", "NextGen Logistics", "GrowthHive"];
  return (
    <section className="border-y border-border bg-surface py-10">
      <p className="container-p mx-auto mb-6 max-w-7xl text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by fast-growing teams
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 pl-14">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="font-display text-2xl font-bold tracking-tight text-navy/40">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const homeServices = [
  {
    slug: "website-development",
    icon: Globe,
    name: "Website Development",
    badge: "Web Development & Design",
    desc: "We design and build fast, modern websites that convert your visitors into paying customers.",
    points: [
      "Custom website design made specifically for your brand",
      "Super fast loading speed and mobile-friendly layout",
      "Built-in Google SEO to help customers find you easily",
      "Simple and easy to manage content without coding knowledge",
    ],
  },
  {
    slug: "google-ads-management",
    icon: Target,
    name: "Google Ads Management",
    badge: "Paid Search & Performance",
    desc: "We put your business at the top of Google search when customers are ready to buy.",
    points: [
      "Target real customers actively searching for your services",
      "Stop wasting money on irrelevant clicks and bad leads",
      "A/B tested ad copy to get maximum calls and inquiries",
      "Clear weekly reports so you see your exact profit & ROI",
    ],
  },
  {
    slug: "seo-services",
    icon: Search,
    name: "SEO & Local Search",
    badge: "Google Top 3 Rankings",
    desc: "We get your business ranked in the Top 3 on Google Search & Google Maps across Delhi NCR.",
    points: [
      "Dominate high-intent searches in Delhi, Noida, Gurugram & Faridabad",
      "Google Business Profile (GBP) & Local 3-Pack optimization",
      "High-authority citations & on-page Schema.org rich snippets",
      "Transparent monthly keyword ranking & organic traffic growth reports",
    ],
  },
  {
    slug: "meta-ads-management",
    icon: BarChart3,
    name: "Meta Ads Management",
    badge: "Social Media Acquisition",
    desc: "We run high-converting Facebook and Instagram ads that bring continuous leads.",
    points: [
      "Reach exact age, location, and interest groups of buyers",
      "Eye-catching post designs, reels, and video ad creatives",
      "Retarget people who visited your page to make them buy",
      "Simple tracking showing your exact calls, leads & sales",
    ],
  },
  {
    slug: "video-editing",
    icon: Video,
    name: "Video Editing",
    badge: "Creative & Motion",
    desc: "We turn raw clips into viral Reels, Shorts, and ads that grab attention in seconds.",
    points: [
      "Engaging captions, trending audio, and smooth motion effects",
      "Perfect video formats for Instagram, YouTube Shorts & TikTok",
      "High-converting ad videos designed to drive clicks",
      "Quick delivery with high-definition audio and video quality",
    ],
  },
  {
    slug: "custom-software-development",
    icon: LineChart,
    name: "Custom Software",
    badge: "Engineering & SaaS",
    desc: "We build easy custom software, CRMs, and web apps to automate your business.",
    points: [
      "Tailored software built around your exact daily workflow",
      "User-friendly dashboard for you, your staff, and customers",
      "Safe and secure database with automatic cloud backups",
      "Full technical setup, training, and ongoing support",
    ],
  },
];

export function Services() {
  return (
    <Section eyebrow="What we do" title={<>Services engineered to <span className="text-gradient">move the numbers</span>.</>}>
      <div className="mt-14 space-y-16 lg:space-y-24">
        {homeServices.map((s, index) => {
          const isEven = index % 2 === 0;

          // Card Element
          const CardElement = (
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-white p-8 md:p-10 shadow-elegant transition hover:-translate-y-1 hover:border-brand hover:shadow-2xl">
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-brand/10 blur-3xl transition group-hover:bg-brand/30" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid size-16 place-items-center rounded-2xl bg-softgreen text-navy transition group-hover:bg-brand group-hover:scale-105">
                    <s.icon className="size-8" />
                  </div>
                  <span className="font-mono text-sm font-bold text-muted-foreground/60">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-6 inline-block rounded-full bg-softgreen px-3.5 py-1 text-xs font-semibold text-navy">
                  {s.badge}
                </div>

                <h3 className="mt-3 font-display text-2xl font-bold text-navy md:text-3xl">
                  {s.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold">
                  <Link
                    to="/contact"
                    className="rounded-full bg-red-600 px-5 py-2.5 text-white transition hover:bg-red-700 shadow-md hover:shadow-lg text-sm font-semibold flex items-center gap-1.5"
                  >
                    Get Free Demo
                  </Link>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="rounded-full bg-brand px-5 py-2.5 text-navy transition hover:bg-brand/90 shadow-md hover:shadow-lg text-sm font-semibold flex items-center gap-1.5"
                  >
                    See Pricings <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="rounded-full bg-black px-5 py-2.5 text-white transition hover:bg-zinc-800 shadow-md hover:shadow-lg text-sm font-semibold flex items-center gap-1.5"
                  >
                    See Portfolio
                  </Link>
                </div>
              </div>
            </div>
          );

          // Points / Description Element
          const PointsElement = (
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Key Features & Benefits
              </span>
              <h4 className="mt-2 font-display text-2xl font-bold text-navy md:text-3xl">
                Why choose our <span className="text-gradient">{s.name}</span>
              </h4>

              <ul className="mt-6 space-y-3.5">
                {s.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-surface border border-border/60 transition hover:bg-white hover:border-brand/40 hover:shadow-sm">
                    <div className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-navy font-bold shadow-sm">
                      <Check className="size-3.5" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium leading-relaxed text-navy/90">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );

          return (
            <div
              key={s.slug}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center"
            >
              <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                {CardElement}
              </div>
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                {PointsElement}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- About + Stats ---------------- */
export function About() {
  return (
    <section className="bg-surface">
      <div className="container-p mx-auto grid max-w-7xl gap-14 py-24 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/40 via-lightblue to-secondary/20 blur-2xl" />
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="150+" label="Projects" icon={Rocket} />
            <StatCard value="98%" label="Happy Clients" icon={Users} tone="brand" />
            <StatCard value="2+" label="Years Experience" icon={Award} tone="brand" />
            <StatCard value="24×7" label="Support" icon={Clock} />
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">About Nexcore Technologies</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-navy lg:text-5xl">
            Delhi NCR's Premier Agency Built for <span className="text-gradient">Measurable Growth</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Headquartered in Greater Noida, Nexcore Technologies is a full-service digital agency
            combining strategy, UI/UX design, custom engineering, and performance marketing under one roof.
            We partner with ambitious startups, businesses, and enterprises across Noida, Delhi, Gurugram, and Faridabad
            to build digital assets that rank in Google Top 3 and convert visitors into revenue.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Greater Noida HQ with direct in-person consultations across Delhi NCR",
              "Certified Google & Meta Ads specialists delivering high-ROAS campaigns",
              "Sub-second loading websites with built-in Google SEO & SSL security",
              "Exclusive 60% promotional discount with 2 years cloud hosting included",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 place-items-center rounded-full bg-brand text-navy"><Check className="size-3" strokeWidth={3} /></span>
                <span className="text-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-secondary">Our story</Link>
            <a
              href="tel:7607696315"
              className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-navy hover:bg-lime-400 transition shadow-md inline-flex items-center gap-2"
            >
              <Phone className="size-4" /> Talk to us: 7607696315
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function StatCard({ value, label, icon: Icon, tone }: { value: string; label: string; icon: any; tone?: "brand" }) {
  return (
    <div className={`rounded-3xl border p-6 ${tone === "brand" ? "bg-brand text-navy border-brand" : "bg-white border-border"}`}>
      <Icon className={`size-6 ${tone === "brand" ? "text-navy" : "text-secondary"}`} />
      <p className="mt-4 font-display text-4xl font-bold">{value}</p>
      <p className={`text-sm ${tone === "brand" ? "text-navy/70" : "text-muted-foreground"}`}>{label}</p>
    </div>
  );
}

/* ---------------- Results counter ---------------- */
function useCountUp(target: number, duration = 1600, isFloat = false) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setV(isFloat ? Number((p * target).toFixed(1)) : Math.floor(p * target));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration, isFloat]);
  return { v, ref };
}
function Counter({ to, prefix = "", suffix = "", isFloat = false }: { to: number; prefix?: string; suffix?: string; isFloat?: boolean }) {
  const { v, ref } = useCountUp(to, 1600, isFloat);
  const formatted = isFloat ? v.toFixed(1) : v.toLocaleString();
  return <div ref={ref} className="font-display text-5xl font-bold text-white lg:text-6xl">{prefix}{formatted}{suffix}</div>;
}
export function Results() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_10%,#ACEB26,transparent_40%),radial-gradient(circle_at_80%_80%,#2563EB,transparent_40%)]" />
      <div className="container-p relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Results that matter</p>
          <h2 className="mt-3 font-display text-4xl font-bold lg:text-5xl">Numbers that speak louder than pitches.</h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-4">
          {[
            { to: 1.5, prefix: "₹", suffix: "Cr+", label: "Revenue Generated for Clients", isFloat: true },
            { to: 500, suffix: "+", label: "Projects Completed" },
            { to: 1200, suffix: "+", label: "Qualified Leads" },
            { to: 98, suffix: "%", label: "Client Retention" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur">
              <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} isFloat={s.isFloat} />
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why choose us ---------------- */
export function WhyUs() {
  const items = [
    { icon: Users, title: "Experienced Team", desc: "Senior designers, engineers and strategists on every project." },
    { icon: ShieldCheck, title: "Transparent Pricing", desc: "Clear scope and pricing — never any hidden surprises." },
    { icon: Sparkles, title: "Premium UI / UX", desc: "Design-led thinking baked into every pixel we ship." },
    { icon: Rocket, title: "Latest Technologies", desc: "Modern stacks, AI tooling and world-class performance." },
    { icon: Search, title: "SEO Optimized", desc: "Built to rank from day one with clean, semantic markup." },
    { icon: Clock, title: "Fast Delivery", desc: "Tight sprints, quick feedback loops and on-time launches." },
    { icon: Award, title: "Post-launch Support", desc: "We stay with you long after go-live to keep growing." },
    { icon: TrendingUp, title: "Affordable Pricing", desc: "Premium quality at pricing that scales with your business." },
  ];
  return (
    <Section eyebrow="Why choose Nexcore" title={<>Ship faster, look sharper, <span className="text-gradient">convert better</span>.</>}>
      <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="group rounded-2xl border border-border bg-white p-3.5 sm:p-5 transition hover:border-secondary hover:shadow-blue">
            <div className="grid size-9 sm:size-10 place-items-center rounded-xl bg-lightblue text-secondary transition group-hover:bg-secondary group-hover:text-white">
              <it.icon className="size-4 sm:size-5" />
            </div>
            <h3 className="mt-3 sm:mt-4 font-display text-sm sm:text-base font-semibold text-navy">{it.title}</h3>
            <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Process ---------------- */
export function Process() {
  const steps = ["Discovery", "Planning", "Design", "Development", "Testing", "Launch", "Growth"];
  return (
    <section className="bg-surface">
      <div className="container-p mx-auto max-w-7xl py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our process</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy lg:text-5xl">A proven 7-step system.</h2>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-1/2 hidden h-0.5 bg-gradient-to-r from-brand via-secondary to-brand lg:block" />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-7">
            {steps.map((s, i) => (
              <div key={s} className="relative flex flex-col items-center text-center">
                <div className="grid size-14 place-items-center rounded-2xl border border-border bg-white font-display text-lg font-bold text-navy shadow-soft">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-3 text-sm font-semibold text-navy">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio preview ---------------- */
const portfolio = [
  {
    title: "Career4S",
    tag: "Website",
    metric: "10,000+ Students",
    image: "/projects/career4s.png",
    desc: "Education & Admission Counseling Portal for India & Abroad",
    url: "career4s.com",
    liveUrl: "https://www.career4s.com/",
  },
  {
    title: "Ruzann",
    tag: "Website",
    metric: "Loved by 10k Parents",
    image: "/projects/ruzann.png",
    desc: "AI & Coding Learning Platform for Kids — Interactive & Gamified",
    url: "ruzann.com",
    liveUrl: "https://www.ruzann.com/",
  },
  {
    title: "Manshu Learning",
    tag: "Website",
    metric: "+240% Inquiries",
    image: "/projects/manshu.png",
    desc: "Professional Excellence & Corporate Training Platform",
    url: "manshulearning.com",
    liveUrl: "https://www.manshulearning.com/",
  },
  {
    title: "GradeLab Studios",
    tag: "Website",
    metric: "Cinematic Growth",
    image: "/projects/gradelab.png",
    desc: "High-End Video Production & Cinematic Brand Storytelling",
    url: "gradelabstudios.com",
    liveUrl: "https://www.gradelabstudios.com/",
  },
  {
    title: "CR Fitness",
    tag: "Website",
    metric: "3.8× Memberships",
    image: "/projects/crfitness.png",
    desc: "Premium Fitness Brand Identity & Membership Experience Portal",
    url: "crfitnessgym86.in",
    liveUrl: "https://www.crfitnessgym86.in/",
  },
  {
    title: "Champs Fighter",
    tag: "Branding",
    metric: "Sports Packaging",
    image: "/projects/champs-fighter.jpg",
    desc: "Packaging Design & Social Ad Creative for Sports Equipment",
    url: "champsfighter.com",
  },
  {
    title: "Take A Deals",
    tag: "Branding",
    metric: "E-Commerce Creative",
    image: "/projects/takeadeals.png",
    desc: "Promotional Banner & Digital Ad Campaign Suite for SA E-Commerce",
    url: "takeadeals.com",
  },
  {
    title: "AL CELL Store",
    tag: "Branding",
    metric: "Vibrant Brand Design",
    image: "/projects/alcell.png",
    desc: "Product Marketing Banner & Social Promo Creative Design",
    url: "alcell.co.za",
  },
  {
    title: "Heineken 3",
    tag: "Branding",
    metric: "Commercial Ad Design",
    image: "/projects/heineken.jpg",
    desc: "Sleek Product Poster Visual & Brand Creative Campaign",
    url: "heineken.com",
  },
  {
    title: "Maa Bhojanalaya",
    tag: "Branding",
    metric: "Restaurant Brand Identity",
    image: "/projects/maa-bhojanalaya.jpg",
    desc: "Restaurant Identity, Delivery Banner & Marketing Creative",
    url: "maabhojanalaya.com",
  },
  {
    title: "Google Ads Campaign",
    tag: "Google Ads",
    metric: "16,316 Impr · 251 Clicks",
    image: "/projects/google-ads-1.jpg",
    desc: "Google Search & Performance Campaign — 16,316 impressions & 251 clicks at ₹13.63 CPC.",
    url: "ads.google.com",
  },
  {
    title: "Search Ads ROI",
    tag: "Google Ads",
    metric: "3.76% CTR · ₹18.85 CPC",
    image: "/projects/google-ads-2.jpg",
    desc: "High-converting Google Search Campaign delivering 1,223 impressions & 3.76% CTR.",
    url: "ads.google.com",
  },
];

export function PortfolioPreview() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Website", "Google Ads", "Branding"];
  const items = portfolio.filter((p) => filter === "All" || p.tag === filter);

  return (
    <Section eyebrow="Selected work" title={<>Real work, <span className="text-gradient">real results</span>.</>}>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
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

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
        {items.map((p) => (
          <div
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-white transition-all hover:-translate-y-1.5 hover:border-brand hover:shadow-2xl"
          >
            {/* Browser Header - Only for Website */}
            {p.tag === "Website" && (
              <div className="flex items-center gap-1 sm:gap-1.5 bg-slate-900 px-3 sm:px-4 py-2 sm:py-2.5">
                <div className="size-2 sm:size-2.5 rounded-full bg-red-500/80" />
                <div className="size-2 sm:size-2.5 rounded-full bg-yellow-500/80" />
                <div className="size-2 sm:size-2.5 rounded-full bg-green-500/80" />
                <div className="ml-1.5 sm:ml-2 flex-1 truncate rounded-md bg-white/10 px-2 sm:px-3 py-0.5 font-mono text-[9px] sm:text-[10px] text-white/50">
                  https://{p.url}
                </div>
              </div>
            )}

            {/* Image Preview */}
            <div className={`relative ${p.tag === "Branding" ? "h-48 sm:h-64" : "h-36 sm:h-56"} overflow-hidden bg-slate-100`}>
              <img
                src={p.image}
                alt={p.title}
                className={`h-full w-full ${p.tag === "Branding" ? "object-cover object-center" : "object-cover object-top"} transition duration-500 group-hover:scale-105`}
              />
              <div className="absolute right-2 top-2 sm:right-3 sm:top-3 rounded-full bg-navy/80 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                {p.tag}
              </div>
              <div className="absolute left-2 bottom-2 sm:left-3 sm:bottom-3 rounded-full bg-brand px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-navy shadow-md">
                {p.metric}
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-6">
              <div>
                <h3 className="font-display text-sm sm:text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-none">{p.desc}</p>
              </div>
              <div className="mt-3 sm:mt-5 flex items-center justify-between border-t border-border/50 pt-3 sm:pt-4">
                {p.tag === "Website" ? (
                  <>
                    <a
                      href={p.liveUrl || `https://www.${p.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-bold transition shadow-sm"
                    >
                      <span className="size-1.5 sm:size-2 rounded-full bg-green-400 animate-pulse" />
                      Live Website ↗
                    </a>
                    <a
                      href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%27d%20like%20to%20book%20a%20free%20website%20demo."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-green-600 hover:bg-green-700 text-white px-2.5 sm:px-3.5 py-1 text-[10px] sm:text-xs font-bold shadow-md hover:shadow-lg transition transform active:scale-95"
                    >
                      <MessageCircle className="size-3.5" /> WhatsApp Now
                    </a>
                  </>
                ) : p.tag === "Branding" ? (
                  <>
                    <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground">
                      Brand Design
                    </span>
                    <a
                      href="https://photos.google.com/u/4/share/AF1QipP-rW5OuQ4kSLLOjZYt0lSnhnnjM8X0YqeiujPMpkF8XGYfwOfu5WhEBnDsD16bHg?pli=1&pageId=none&key=c0ZkYWpmNUZodzdxczFwaTV6TmctQUNCQnNRbFdn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-secondary transition hover:text-navy hover:underline"
                    >
                      See More Brands <ArrowRight className="size-3 sm:size-3.5" />
                    </a>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground">
                      Ad Campaign
                    </span>
                    <a
                      href="https://wa.me/917607696315?text=Hi%2C%20I%27m%20interested%20in%20Google%20Ads%20services.%20Can%20I%20get%20more%20details%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-green-600 hover:bg-green-700 text-white px-2.5 sm:px-3.5 py-1 text-[10px] sm:text-xs font-bold shadow-md hover:shadow-lg transition transform active:scale-95"
                    >
                      <MessageCircle className="size-3 sm:size-3.5" />
                      Get More Details
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CTA banner ---------------- */
export function CTABanner() {
  return (
    <section className="container-p mx-auto max-w-7xl py-16">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy p-10 text-white shadow-elegant lg:p-16">
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-brand/40 blur-3xl" />
        <div className="absolute -left-16 -bottom-16 size-64 rounded-full bg-secondary/50 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Ready when you are</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight lg:text-5xl">
              Ready to grow your business?
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              Get a free strategy call with our senior team. We'll audit your current setup and share a clear roadmap — no obligations.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a href="tel:7607696315" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant hover:brightness-95"><Phone className="size-4" /> Call Now</a>
            <a href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20schedule%20a%20free%20consultation%3F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"><MessageCircle className="size-4" /> WhatsApp Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const testimonials = [
  {
    initials: "CS",
    name: "Career4S Team",
    role: "Founder, Career4S",
    category: "EdTech",
    avatarBg: "bg-navy text-white",
    quote: "Nexcore rebuilt our online learning platform and scaled our student enrollment past 10,000+. Communication was seamless and website load times are sub-second.",
  },
  {
    initials: "RZ",
    name: "Ruzann Leadership",
    role: "E-Commerce Director, Ruzann",
    category: "E-Commerce",
    avatarBg: "bg-gradient-to-br from-secondary to-navy text-white",
    quote: "Their Meta Ads & custom storefront design cut our CPL drastically and delivered a 3.2x ROAS in the first month. Ridiculously good ROI.",
  },
  {
    initials: "ML",
    name: "Manshu Learning",
    role: "Head of Growth, Manshu Learning",
    category: "EdTech",
    avatarBg: "bg-[#0A66C2] text-white",
    quote: "Design, branding, and dev — all executed with high precision by one unified team. 5,000+ enrolled students with zero downtime.",
  },
  {
    initials: "GL",
    name: "GradeLab Studios",
    role: "Creative Director, GradeLab Studios",
    category: "Media Studio",
    avatarBg: "bg-[#1877F2] text-white",
    quote: "They designed our website to reflect cinematic excellence. It felt like an in-house elite team, but faster and sharper.",
  },
  {
    initials: "CR",
    name: "CR Fitness Gym",
    role: "Managing Director, CR Fitness",
    category: "Fitness & Gym",
    avatarBg: "bg-emerald-700 text-white",
    quote: "We saw a 3.8x spike in membership leads right after launching the new site and local search ads campaign.",
  },
  {
    initials: "CF",
    name: "Champs Fighter",
    role: "Brand Owner, Champs Fighter",
    category: "Sports Packaging",
    avatarBg: "bg-red-600 text-white",
    quote: "The brand packaging & promotional ad suite designed by Nexcore completely elevated our market presence.",
  },
];

export function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setActiveIdx((n) => (n + 1) % total), 5000);
    return () => clearInterval(t);
  }, [total]);

  const prev = () => setActiveIdx((n) => (n - 1 + total) % total);
  const next = () => setActiveIdx((n) => (n + 1) % total);

  const getPos = (idx: number) => {
    const diff = (idx - activeIdx + total) % total;
    if (diff === 0) return "center";
    if (diff === 1 || diff === total - 2) return diff === 1 ? "right" : "right2";
    if (diff === total - 1) return "left";
    return "hidden";
  };

  return (
    <section className="bg-surface py-20 lg:py-28 overflow-hidden">
      <div className="container-p mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Kind Words</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy lg:text-5xl">
            Loved by founders and marketing leaders.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Real feedback from companies and brands we have built and scaled.
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative mt-16 flex items-center justify-center" style={{ height: "360px" }}>
          {testimonials.map((t, idx) => {
            const pos = getPos(idx);
            if (pos === "hidden" || pos === "right2") return null;

            const isCenter = pos === "center";
            const isLeft = pos === "left";
            const isRight = pos === "right";

            return (
              <div
                key={t.name}
                onClick={() => setActiveIdx(idx)}
                className="absolute w-72 sm:w-80 rounded-3xl bg-white p-6 shadow-xl cursor-pointer select-none transition-all duration-500 ease-in-out"
                style={{
                  transform: isCenter
                    ? "translateX(0) scale(1) rotateY(0deg)"
                    : isLeft
                    ? "translateX(-80%) scale(0.82) rotateY(12deg)"
                    : "translateX(80%) scale(0.82) rotateY(-12deg)",
                  opacity: isCenter ? 1 : 0.55,
                  zIndex: isCenter ? 10 : 5,
                  filter: isCenter ? "none" : "blur(0.5px)",
                  boxShadow: isCenter
                    ? "0 24px 60px rgba(0,0,0,0.14)"
                    : "0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                {/* Category Pill */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-softgreen px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
                    {t.category}
                  </span>
                </div>

                {/* Avatar + Name Row */}
                <div className="mt-4 flex items-center gap-3">
                  <div className={`grid size-14 shrink-0 place-items-center rounded-full font-display text-base font-bold shadow-md ${t.avatarBg}`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-base font-bold text-navy leading-tight">{t.name}</p>
                    <p className="text-xs font-semibold text-secondary leading-tight">{t.category}</p>
                    <p className="text-[11px] text-muted-foreground leading-tight">{t.role}</p>
                    <div className="mt-1 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="size-3 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mt-5">
                  <Quote className="absolute -left-1 -top-1 size-5 text-muted-foreground/30" />
                  <p className="pl-4 text-sm leading-relaxed text-navy/80 italic">
                    {t.quote}
                  </p>
                  <Quote className="absolute -bottom-1 right-0 size-5 rotate-180 text-muted-foreground/30" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-col items-center gap-5">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === activeIdx
                    ? "w-6 h-2.5 bg-secondary"
                    : "w-2.5 h-2.5 bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="grid size-10 place-items-center rounded-full border border-border bg-white shadow-sm text-navy transition hover:bg-navy hover:text-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={next}
              className="grid size-10 place-items-center rounded-full border border-border bg-white shadow-sm text-navy transition hover:bg-navy hover:text-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  {
    q: "How much does website development cost in Delhi NCR?",
    a: "Our promotional business website package starts from just ₹3,500 (with our 60% discount applied), including 2 full years of cloud hosting, free domain name (1st year), 100% mobile-responsive layout, and Google SEO setup. Upgraded Growth & E-Commerce packages start at ₹7,000.",
  },
  {
    q: "How long does it take to design and launch a website?",
    a: "Standard business websites and lead generation landing pages launch in just 3 to 5 business days. Custom e-commerce platforms, web portals, and software applications typically take 7 to 14 business days.",
  },
  {
    q: "Can you help our business rank in the Top 3 on Google Search & Maps?",
    a: "Yes! We specialize in Local SEO engineered for Delhi NCR. We optimize your Google Business Profile (GBP), build high-authority local citations across Noida, Delhi, Gurugram, and Faridabad, and implement Schema.org rich snippets to help you dominate competitive local search.",
  },
  {
    q: "Which areas in Delhi NCR do you provide digital services for?",
    a: "From our Greater Noida headquarters, we serve clients across all major NCR hubs including Noida (Sector 62, 18, 63, Expressway), Greater Noida (Knowledge Park, Pari Chowk, Extension), Gurugram (Cyber City, Golf Course Road, Udyog Vihar), Delhi (Connaught Place, South Delhi, Nehru Place), and Faridabad.",
  },
  {
    q: "Can we have in-person project meetings in Delhi NCR?",
    a: "Yes, absolutely! Our team frequently visits client offices across Noida, Greater Noida, Delhi, and Gurgaon for project discovery, design reviews, and growth strategy sessions.",
  },
  {
    q: "Do you handle both website development and Google/Meta Ads?",
    a: "Yes — that is our biggest competitive advantage. We build conversion-first websites and landing pages, then drive targeted buyers directly to them through certified Google Ads and Meta (Facebook/Instagram) advertising.",
  },
];
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="FAQ" title={<>Answers to <span className="text-gradient">common questions</span>.</>}>
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-white">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
              <span className="font-display font-semibold text-navy">{f.q}</span>
              <span className="grid size-8 place-items-center rounded-full bg-softgreen text-navy">
                {open === i ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            <div className={`grid overflow-hidden transition-all ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="min-h-0">
                <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Contact ---------------- */
export function ContactBlock() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and phone number.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/nexcoretechnologies.team@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Company: formData.company || "N/A",
          Email: formData.email,
          Phone: formData.phone,
          Service: formData.service,
          Message: formData.message || "N/A",
          _subject: `New Lead from Website: ${formData.name} (${formData.service})`,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "Website Development",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMsg("Failed to send message. Please try again or WhatsApp us directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection or contact us via WhatsApp.");
    }
  };

  return (
    <section id="contact" className="bg-surface">
      <div className="container-p mx-auto grid max-w-7xl gap-10 py-24 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Get in touch</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy lg:text-5xl">Let's build something remarkable.</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tell us about your project. We respond within one business day with next steps and a preliminary estimate.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <InfoRow icon={Phone} label="+91 7607696315" href="tel:7607696315" />
            <InfoRow icon={Mail} label="nexcoretechnologies.team@gmail.com" href="mailto:nexcoretechnologies.team@gmail.com" />
            <InfoRow icon={MapPin} label="Greater Noida HQ, UP (Serving Delhi, Noida, Gurugram, Faridabad & NCR)" />
            <InfoRow icon={Clock} label="Mon–Sat · 9am – 8pm IST" />
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-navy shadow-elegant transition hover:brightness-95">
              <MessageCircle className="size-4" /> WhatsApp Us
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-navy/70">
            <a href="https://www.facebook.com/share/1DaCrvDXK4/" target="_blank" rel="noopener noreferrer" className="transition hover:text-secondary hover:scale-110" aria-label="Facebook">
              <Facebook className="size-5" />
            </a>
            <a href="https://www.instagram.com/nexcore.marketing?igsh=MXUzeWx3N3NidnBpMA==" target="_blank" rel="noopener noreferrer" className="transition hover:text-secondary hover:scale-110" aria-label="Instagram">
              <Instagram className="size-5" />
            </a>
            <a href="https://www.linkedin.com/company/nexcore-technologies-india/" target="_blank" rel="noopener noreferrer" className="transition hover:text-secondary hover:scale-110" aria-label="LinkedIn">
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>

        <form className="rounded-3xl border border-border bg-white p-6 shadow-soft lg:p-8" onSubmit={handleSubmit}>
          {status === "success" && (
            <div className="mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-sm font-medium">
              ✅ Thank you! Your message has been sent directly to <strong>nexcoretechnologies.team@gmail.com</strong>. Our team will contact you within 24 hours.
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 rounded-2xl bg-red-50 border border-red-200 p-4 text-red-800 text-sm font-medium">
              ⚠️ {errorMsg}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy">Name *</label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-sm focus:border-secondary focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy">Company</label>
              <input
                type="text"
                placeholder="Acme Inc."
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-sm focus:border-secondary focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy">Email *</label>
              <input
                type="email"
                required
                placeholder="jane@acme.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-sm focus:border-secondary focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy">Phone *</label>
              <input
                type="tel"
                required
                placeholder="+91 7607696315"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-sm focus:border-secondary focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold text-navy">Service required</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-sm focus:border-secondary focus:outline-none"
              >
                <option>Website Development</option>
                <option>Google Ads Management</option>
                <option>Meta Ads Management</option>
                <option>Video Editing & Creative Ads</option>
                <option>SEO Services</option>
                <option>Brand Identity & Design</option>
                <option>Custom Software Development</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-semibold text-navy">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us about your project requirements & goals…"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded-xl border border-border bg-white px-3 py-2.5 text-sm focus:border-secondary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant transition hover:brightness-95 disabled:opacity-50"
          >
            {status === "submitting" ? (
              <>Sending Request...</>
            ) : (
              <>
                Send Request <ArrowRight className="size-4" />
              </>
            )}
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">By submitting, your request will be delivered to nexcoretechnologies.team@gmail.com.</p>
        </form>
      </div>
    </section>
  );
}
function InfoRow({ icon: Icon, label, href }: { icon: any; label: string; href?: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-xl bg-white text-secondary shadow-soft"><Icon className="size-4" /></span>
      {href ? (
        <a href={href} className="text-foreground/90 hover:text-secondary hover:underline transition">
          {label}
        </a>
      ) : (
        <span className="text-foreground/90">{label}</span>
      )}
    </li>
  );
}
function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-navy">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-sm focus:border-secondary focus:outline-none" />
    </div>
  );
}

/* ---------------- shared Section ---------------- */
export function Section({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section className="container-p mx-auto max-w-7xl py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-navy lg:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
