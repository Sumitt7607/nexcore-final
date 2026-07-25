import { createFileRoute } from "@tanstack/react-router";
import { CTABanner, ContactBlock } from "@/components/site/HomeSections";
import { Award, Heart, Rocket, Sparkles, Target, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nexcore Technologies" },
      { name: "description", content: "Nexcore Technologies is a premium digital agency of senior designers, engineers and marketers helping ambitious teams grow online." },
      { property: "og:title", content: "About — Nexcore Technologies" },
      { property: "og:description", content: "Our story, mission, values and the team behind the results." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Sparkles, title: "Design excellence", desc: "Premium craft in every pixel — nothing ships half-polished." },
  { icon: Target, title: "Outcome obsessed", desc: "We design and build for measurable business impact." },
  { icon: Heart, title: "Radical honesty", desc: "Clear scope, straight answers and no marketing fluff." },
  { icon: Rocket, title: "Momentum", desc: "Short sprints, quick decisions and shipping every week." },
];
const team = [
  { name: "Aarav Patel", role: "Founder & Strategy" },
  { name: "Nisha Reddy", role: "Design Director" },
  { name: "Kunal Verma", role: "Engineering Lead" },
  { name: "Meera Kapoor", role: "Head of Growth" },
];
const timeline = [
  { y: "2021", t: "Nexcore founded with 3 founding members." },
  { y: "2022", t: "Crossed 50 projects across websites and ads." },
  { y: "2023", t: "Expanded into brand identity and video." },
  { y: "2024", t: "Launched software & AI chatbot practice." },
  { y: "2025", t: "150+ projects, teams across 3 cities." },
];

function About() {
  return (
    <>
      <section className="bg-hero-mesh">
        <div className="container-p mx-auto max-w-7xl py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">About Us</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-navy lg:text-6xl">A modern agency for the <span className="text-gradient">next decade</span>.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">We combine design, engineering and performance marketing to help teams launch remarkable products and grow them faster.</p>
        </div>
      </section>

      <section className="container-p mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold text-navy lg:text-4xl">Our story</h2>
          <p className="mt-4 text-muted-foreground">Nexcore began with a simple belief: that founders shouldn't have to stitch together a dozen freelancers to launch and grow. We built one senior team that handles brand, product and performance — end to end.</p>
          <p className="mt-3 text-muted-foreground">Today we serve startups, SMEs and enterprises across the world, from stealth-mode products to publicly traded brands.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl border border-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary">Mission</p>
            <p className="mt-2 font-display text-lg font-semibold text-navy">To help ambitious teams ship remarkable products and grow them online.</p>
          </div>
          <div className="rounded-3xl bg-brand p-6 text-navy">
            <p className="text-xs font-semibold uppercase tracking-wider">Vision</p>
            <p className="mt-2 font-display text-lg font-semibold">A world where every great business has a world-class digital presence.</p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-p mx-auto max-w-7xl py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our values</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy">What we care about.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-white p-6">
                <div className="grid size-11 place-items-center rounded-xl bg-softgreen text-navy"><v.icon className="size-5" /></div>
                <h3 className="mt-4 font-display font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-p mx-auto max-w-7xl py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Meet the team</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy">Senior operators, hands on your project.</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t) => (
            <div key={t.name} className="rounded-3xl border border-border bg-white p-6 text-center">
              <div className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-br from-secondary to-navy font-display text-xl font-bold text-white">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <p className="mt-4 font-display font-semibold text-navy">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-p mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Timeline</p>
            <h2 className="mt-3 font-display text-4xl font-bold">Our journey.</h2>
          </div>
          <div className="mt-12 space-y-6">
            {timeline.map((e) => (
              <div key={e.y} className="grid grid-cols-[80px_1fr] items-start gap-6 border-l-2 border-brand/40 pl-6">
                <span className="rounded-full bg-brand px-3 py-1 text-center text-xs font-bold text-navy">{e.y}</span>
                <p className="text-white/80">{e.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-p mx-auto max-w-7xl py-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Award, k: "Awwwards", v: "3× recognition" },
            { icon: Users, k: "50+", v: "team members" },
            { icon: Rocket, k: "150+", v: "successful launches" },
          ].map((a) => (
            <div key={a.k} className="flex items-center gap-4 rounded-3xl border border-border bg-white p-6">
              <div className="grid size-12 place-items-center rounded-2xl bg-lightblue text-secondary"><a.icon className="size-6" /></div>
              <div>
                <p className="font-display text-xl font-bold text-navy">{a.k}</p>
                <p className="text-sm text-muted-foreground">{a.v}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
      <ContactBlock />
    </>
  );
}
