import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Star, Zap, Search, Rocket, Target,
  BarChart3, LineChart, Globe, PenTool, Video, Bot,
  Check, Sparkles, TrendingUp, Users, Award, Clock, Quote,
  Phone, Mail, MapPin, MessageCircle, Plus, Minus,
  Facebook, Instagram, Youtube, ShieldCheck,
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
            Trusted by 150+ growing brands worldwide
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-7xl">
            Build stunning websites that <span className="text-gradient">grow your business</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We help startups, brands and enterprises scale with high-performing websites,
            Google Ads, Meta Ads, SEO, branding and digital solutions that generate measurable results.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant transition hover:brightness-95">
              Get Free Quote <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-blue transition hover:brightness-110">
              Book Free Consultation
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-navy">
              View Portfolio
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { icon: Star, label: "150+ Projects Delivered" },
              { icon: ShieldCheck, label: "98% Client Satisfaction" },
              { icon: Zap, label: "Fast Delivery" },
              { icon: Search, label: "SEO Optimized" },
              { icon: Target, label: "Google Ads Certified" },
              { icon: BarChart3, label: "Meta Advertising" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 rounded-2xl border border-navy/10 bg-white/70 px-3 py-2.5 text-xs font-medium text-navy backdrop-blur">
                <b.icon className="size-4 text-secondary" />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right — floating dashboard mocks */}
        <div className="relative h-[520px]" style={{ perspective: "1200px" }}>
          <div className="absolute inset-0" style={{ transform: "translate3d(var(--mx,0), var(--my,0), 0)" }}>
            {/* Laptop */}
            <div className="absolute right-0 top-8 w-[88%] animate-float rounded-2xl border border-navy/10 bg-white p-3 shadow-elegant">
              <div className="mb-2 flex gap-1.5"><span className="size-2.5 rounded-full bg-red-400" /><span className="size-2.5 rounded-full bg-amber-400" /><span className="size-2.5 rounded-full bg-emerald-400" /></div>
              <div className="rounded-xl bg-gradient-to-br from-navy to-secondary p-5 text-white">
                <p className="text-xs uppercase tracking-wider text-brand">Nexcore · Analytics</p>
                <p className="mt-2 font-display text-2xl font-bold">₹ 12.4L revenue</p>
                <p className="text-xs text-white/70">+38% vs last month</p>
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
              <p className="text-xs text-muted-foreground">Conversions today</p>
              <p className="mt-1 font-display text-3xl font-bold text-navy">1,284</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold text-navy">+12.4%</span>
                <span className="text-xs text-muted-foreground">vs yesterday</span>
              </div>
              <div className="mt-3 flex -space-x-2">
                {["A", "B", "C", "D"].map((c, i) => (
                  <div key={c} className={`grid size-7 place-items-center rounded-full border-2 border-white text-[10px] font-bold text-white ${["bg-secondary", "bg-navy", "bg-brand text-navy", "bg-secondary/80"][i]}`}>{c}</div>
                ))}
                <div className="grid size-7 place-items-center rounded-full border-2 border-white bg-surface text-[10px] font-bold text-navy">+9</div>
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

                <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold">
                  <Link
                    to="/contact"
                    className="rounded-full bg-red-600 px-6 py-3 text-white transition hover:bg-red-700 shadow-md hover:shadow-lg text-sm font-semibold flex items-center gap-2"
                  >
                    Get Free Demo
                  </Link>
                  <Link
                    to="/portfolio"
                    className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-zinc-800 shadow-md hover:shadow-lg text-sm font-semibold flex items-center gap-2"
                  >
                    See Past Results <ArrowRight className="size-4" />
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">About Nexcore</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-navy lg:text-5xl">
            A modern agency built for <span className="text-gradient">measurable growth</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Nexcore Technologies is a full-service digital studio combining strategy, design,
            engineering and performance marketing under one roof. We partner with ambitious
            teams to ship products that look world-class and perform even better.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Senior team — no juniors on your account",
              "Transparent pricing and clear milestones",
              "Dedicated project manager on every engagement",
              "Post-launch growth and support built in",
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
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 rounded-full bg-red-600 hover:bg-red-700 text-white px-2.5 sm:px-3.5 py-1 text-[10px] sm:text-xs font-bold shadow-md hover:shadow-lg transition transform active:scale-95"
                    >
                      Book free Demo
                    </Link>
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
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-secondary transition group-hover:text-navy group-hover:underline"
                    >
                      View <ArrowRight className="size-3 sm:size-3.5" />
                    </Link>
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
            <Link to="/contact" className="rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant hover:brightness-95">Get Free Quote</Link>
            <Link to="/contact" className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10">Schedule Consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const testimonials = [
  { name: "Ananya Sharma", role: "Founder, Vertex Retail", quote: "Nexcore rebuilt our storefront and paired it with Google Ads. Revenue nearly tripled inside a quarter — best investment we've made." },
  { name: "Rahul Menon", role: "CMO, Ascend SaaS", quote: "Their Meta Ads team cut our CPL by 42% and doubled qualified demos. Ridiculously good work." },
  { name: "Sophia Nair", role: "CEO, Halcyon Studio", quote: "Design, brand, dev — one team, obsessive quality. It felt like an in-house team, but sharper." },
  { name: "David Park", role: "COO, Kinetic Labs", quote: "They shipped our MVP in 6 weeks and it converts. Communication was flawless throughout." },
];
export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="bg-surface">
      <div className="container-p mx-auto max-w-7xl py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Kind words</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy lg:text-5xl">Loved by founders and marketing leaders.</h2>
        </div>
        <div className="relative mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`rounded-2xl sm:rounded-3xl border border-white/60 bg-white/70 p-4 sm:p-6 shadow-soft backdrop-blur transition ${idx === i ? "ring-2 ring-brand" : ""}`}
            >
              <Quote className="size-6 text-brand" />
              <p className="mt-3 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-secondary to-navy font-display text-sm font-bold text-white">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-3.5 fill-brand text-brand" />)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  { q: "How long does a typical website project take?", a: "Most marketing websites launch in 3–5 weeks. Complex apps and e-commerce projects usually take 6–10 weeks depending on scope." },
  { q: "Do you offer post-launch support?", a: "Yes. Every engagement includes 30 days of complimentary support, and we offer flexible monthly care plans afterwards." },
  { q: "Which industries do you serve?", a: "We work across SaaS, e-commerce, D2C, real estate, healthcare, education and professional services worldwide." },
  { q: "Can you handle both design and paid ads?", a: "Absolutely — that's our sweet spot. We design and build the funnel, then run performance marketing on top for compounding growth." },
  { q: "How much does a project cost?", a: "Projects start from a few thousand USD and scale with scope. Share your goals via the contact form and we'll send a tailored quote within 24 hours." },
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
            <InfoRow icon={Phone} label="+91 7607696315" />
            <InfoRow icon={Mail} label="hello@nexcoretech.com" />
            <InfoRow icon={MapPin} label="Global remote · HQ in Bengaluru, India" />
            <InfoRow icon={Clock} label="Mon–Sat · 9am – 8pm IST" />
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/917607696315" className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-navy shadow-elegant">
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-3 text-sm font-semibold text-navy">
              View on Map
            </a>
          </div>
          <div className="mt-6 flex gap-2 text-navy/60">
            <Facebook className="size-4" /><Instagram className="size-4" /><Youtube className="size-4" />
          </div>
        </div>

        <form className="rounded-3xl border border-border bg-white p-6 shadow-soft lg:p-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" placeholder="Jane Doe" />
            <Field label="Company" placeholder="Acme Inc." />
            <Field label="Email" type="email" placeholder="jane@acme.com" />
            <Field label="Phone" placeholder="+91 99999 99999" />
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy">Service required</label>
              <select className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-sm focus:border-secondary focus:outline-none">
                <option>Website Development</option>
                <option>Google Ads Management</option>
                <option>Meta Ads Management</option>
                <option>SEO Services</option>
                <option>Brand Identity</option>
                <option>Custom Software</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy">Budget</label>
              <select className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-sm focus:border-secondary focus:outline-none">
                <option>Under $2k</option>
                <option>$2k – $5k</option>
                <option>$5k – $15k</option>
                <option>$15k+</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-semibold text-navy">Message</label>
            <textarea rows={5} placeholder="Tell us about your goals…" className="w-full resize-none rounded-xl border border-border bg-white px-3 py-2.5 text-sm focus:border-secondary focus:outline-none" />
          </div>
          <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-navy shadow-elegant transition hover:brightness-95">
            Send request <ArrowRight className="size-4" />
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">By submitting, you agree to our privacy policy.</p>
        </form>
      </div>
    </section>
  );
}
function InfoRow({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="grid size-9 place-items-center rounded-xl bg-white text-secondary shadow-soft"><Icon className="size-4" /></span>
      <span className="text-foreground/90">{label}</span>
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
