import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ArrowRight, Clock, Sparkles } from "lucide-react";
import { blogPosts } from "@/lib/blogs-data";
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
  component: BlogRouteWrapper,
});

function BlogRouteWrapper() {
  const location = useLocation();

  // If navigating to an article child page (e.g. /blog/cpl-reduction-d2c-playbook), render the child route via Outlet!
  if (location.pathname !== "/blog" && location.pathname !== "/blog/") {
    return <Outlet />;
  }

  return <BlogPageContent />;
}

const categories = ["All", "Ads", "Websites", "SEO", "Branding", "AI"];

function BlogPageContent() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = selectedCat === "All" || post.category === selectedCat;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featured = blogPosts[0];

  return (
    <>
      <section className="bg-hero-mesh relative overflow-hidden">
        <div className="container-p mx-auto max-w-7xl py-20 text-center lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-secondary backdrop-blur">
            <Sparkles className="size-3.5" /> Growth Playbooks
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">
            Insights that <span className="text-gradient">compound</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Practical playbooks on websites, performance ads, SEO, and brand identity — written by the operators shipping real results.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2.5 shadow-soft transition-all focus-within:border-navy focus-within:ring-2 focus-within:ring-navy/10">
            <Search className="size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title or keyword…"
              className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>
      </section>

      <div className="container-p mx-auto max-w-7xl py-12 lg:py-16">
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                selectedCat === c
                  ? "bg-navy text-white shadow-md"
                  : "border border-border bg-white text-navy hover:border-navy/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCat === "All" && !searchQuery && featured && (
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:shadow-elegant">
            <div className="grid lg:grid-cols-2">
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative h-64 sm:h-80 lg:h-auto overflow-hidden block"
              >
                <img
                  src={featured.featuredImage}
                  alt={featured.title}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-col justify-between p-8 sm:p-10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-softgreen px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">
                      Featured • {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3.5" /> {featured.readTime}
                    </span>
                  </div>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: featured.slug }}
                    onClick={() => window.scrollTo(0, 0)}
                    className="block"
                  >
                    <h2 className="mt-4 font-display text-2xl font-bold text-navy hover:text-secondary sm:text-3xl lg:text-4xl transition">
                      {featured.title}
                    </h2>
                  </Link>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-6">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={featured.author.avatar}
                      alt={featured.author.name}
                      className="size-8 rounded-full object-cover"
                    />
                    <span className="text-xs font-bold text-navy">{featured.author.name}</span>
                  </div>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: featured.slug }}
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-slate-800"
                  >
                    Read More <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((p) => (
            <div
              key={p.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  onClick={() => window.scrollTo(0, 0)}
                  className="block h-48 overflow-hidden"
                >
                  <img
                    src={p.featuredImage}
                    alt={p.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-softgreen px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                      {p.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" /> {p.readTime}
                    </span>
                  </div>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    onClick={() => window.scrollTo(0, 0)}
                    className="block"
                  >
                    <h3 className="mt-3 font-display text-lg font-bold text-navy group-hover:text-secondary transition">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    {p.excerpt}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border/50 px-6 py-4">
                <span className="text-[11px] font-semibold text-muted-foreground">{p.publishDate}</span>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-navy hover:bg-slate-800 px-4 py-2 text-xs font-bold text-white shadow-sm transition"
                >
                  Read More <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="my-16 text-center">
            <p className="text-lg font-bold text-navy">No articles found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCat("All");
              }}
              className="mt-3 rounded-full bg-navy px-4 py-2 text-xs font-bold text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <CTABanner />
    </>
  );
}
