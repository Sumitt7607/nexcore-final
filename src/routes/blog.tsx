import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { CTABanner } from "@/components/site/HomeSections";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Nexcore Technologies" },
      { name: "description", content: "Playbooks, case studies and insights on websites, Google Ads, Meta Ads, SEO and brand growth from the Nexcore team." },
      { property: "og:title", content: "Blog — Nexcore Technologies" },
      { property: "og:description", content: "Marketing and product insights from the Nexcore team." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const categories = ["All","Websites","Ads","SEO","Branding","AI"];
const posts = [
  { title: "How we cut CPL by 42% for a D2C brand in 30 days", cat: "Ads", read: "6 min", tone: "from-secondary to-navy" },
  { title: "The anatomy of a 9% conversion landing page", cat: "Websites", read: "8 min", tone: "from-brand to-secondary" },
  { title: "Local SEO in 2026 — the playbook that still works", cat: "SEO", read: "10 min", tone: "from-navy to-secondary" },
  { title: "Building a brand identity that feels premium", cat: "Branding", read: "5 min", tone: "from-brand to-navy" },
  { title: "Deploying AI chatbots that actually convert", cat: "AI", read: "7 min", tone: "from-secondary to-brand" },
  { title: "The engineering behind fast, SEO-friendly websites", cat: "Websites", read: "9 min", tone: "from-navy to-brand" },
];

function Blog() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="bg-hero-mesh">
        <div className="container-p mx-auto max-w-7xl py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Blog</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-navy lg:text-6xl">Insights that <span className="text-gradient">compound</span>.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Practical playbooks on websites, performance ads, SEO and brand — written by the operators shipping the work.</p>
          <div className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 shadow-soft">
            <Search className="size-4 text-muted-foreground" />
            <input placeholder="Search articles…" className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none" />
          </div>
        </div>
      </section>

      <div className="container-p mx-auto max-w-7xl py-16">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button key={c} className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold text-navy hover:border-navy">{c}</button>
          ))}
        </div>

        {/* Featured */}
        <Link to="/blog" className="mt-10 grid overflow-hidden rounded-3xl border border-border bg-white transition hover:shadow-elegant lg:grid-cols-2">
          <div className={`h-64 bg-gradient-to-br ${featured.tone} lg:h-auto`} />
          <div className="p-8">
            <span className="rounded-full bg-softgreen px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">{featured.cat}</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy">{featured.title}</h2>
            <p className="mt-3 text-muted-foreground">A deep look at the campaign structure, creatives and landing pages that drove one of our best performance quarters.</p>
            <p className="mt-4 text-xs text-muted-foreground">{featured.read} read</p>
          </div>
        </Link>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.title} to="/blog" className="group overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-elegant">
              <div className={`h-40 bg-gradient-to-br ${p.tone}`} />
              <div className="p-5">
                <span className="rounded-full bg-lightblue px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary">{p.cat}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{p.read} read</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <CTABanner />
    </>
  );
}
