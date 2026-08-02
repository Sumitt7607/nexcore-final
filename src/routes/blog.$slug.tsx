import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { getBlogPost, blogPosts } from "@/lib/blogs-data";
import { CTABanner } from "@/components/site/HomeSections";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.post;
    const title = p ? `${p.title} — Nexcore Technologies Blog` : "Blog — Nexcore";
    const desc = p?.excerpt ?? "Practical playbooks on websites, performance ads, SEO and branding.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: p?.featuredImage },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    };
  },
  component: BlogPostDetail,
});

function BlogPostDetail() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((b) => b.slug !== post.slug).slice(0, 3);
  const [openedTimestamp, setOpenedTimestamp] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setOpenedTimestamp(`${dateStr} • ${timeStr}`);
  }, [post.slug]);

  return (
    <>
      {/* Blog Article Header */}
      <article className="bg-hero-mesh border-b border-border/50 py-12 lg:py-16">
        <div className="container-p mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm transition hover:bg-navy hover:text-white"
          >
            <ArrowLeft className="size-3.5" /> Back to All Articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="rounded-full bg-softgreen px-3 py-1 font-bold text-navy">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-navy border border-border shadow-xs">
              <Calendar className="size-3.5 text-secondary" />
              <span>Opened: <strong className="text-navy">{openedTimestamp || post.publishDate}</strong></span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-navy border border-border shadow-xs">
              <Clock className="size-3.5 text-secondary" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {post.excerpt}
          </p>

          {/* Author Badge */}
          <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-6">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="size-11 rounded-full object-cover shadow-sm ring-2 ring-brand/30"
              />
              <div>
                <p className="text-sm font-bold text-navy">{post.author.name}</p>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <a
              href="https://wa.me/917607696315"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition"
            >
              Chat with Author
            </a>
          </div>
        </div>
      </article>

      {/* Featured Banner Image */}
      <div className="container-p mx-auto -mt-6 max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-xl">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="h-[300px] w-full object-cover sm:h-[450px]"
          />
        </div>
      </div>

      {/* Article Main Body */}
      <div className="container-p mx-auto max-w-4xl py-12 lg:py-16">
        {/* Key Takeaways Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="mb-12 rounded-2xl border border-brand/40 bg-softgreen/40 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-navy">
              <Sparkles className="size-5 text-secondary" />
              <h3 className="font-display text-lg font-bold">Key Takeaways</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              {post.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-navy/90">
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-brand text-[10px] font-bold text-navy">
                    ✓
                  </span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Content Sections */}
        <div className="space-y-12">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                {section.heading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {section.body}
              </p>

              {/* Bullet points if available */}
              {section.bulletPoints && (
                <ul className="my-4 space-y-2 pl-2">
                  {section.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-sm sm:text-base text-navy/80">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Inline Embedded Image */}
              {section.inlineImage && (
                <figure className="my-8 overflow-hidden rounded-2xl border border-border bg-surface">
                  <img
                    src={section.inlineImage.url}
                    alt={section.inlineImage.caption}
                    className="max-h-[400px] w-full object-cover"
                  />
                  <figcaption className="p-3 text-center text-xs font-medium text-muted-foreground">
                    📷 {section.inlineImage.caption}
                  </figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>

        {/* Article Footer & Consultation CTA */}
        <div className="mt-16 rounded-3xl border border-border bg-navy p-8 text-white shadow-elegant sm:p-12">
          <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            Ready to grow?
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
            Want to implement these strategies in your business?
          </h3>
          <p className="mt-2 max-w-xl text-sm text-white/80">
            Book a free 30-minute consultation with Nexcore operators to review your website, ads, or brand identity.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-navy shadow-lg transition hover:brightness-95"
            >
              Book Free Consultation <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://wa.me/917607696315?text=Hi%2C%20I%20read%20your%20blog%20post%20and%20want%20to%20discuss%20growing%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Related Blog Posts */}
      <section className="bg-surface py-16">
        <div className="container-p mx-auto max-w-7xl">
          <h3 className="font-display text-2xl font-bold text-navy">Related Articles</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((b) => (
              <Link
                key={b.slug}
                to="/blog/$slug"
                params={{ slug: b.slug }}
                onClick={() => window.scrollTo(0, 0)}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-white p-5 transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div>
                  <div className="h-44 overflow-hidden rounded-2xl">
                    <img
                      src={b.featuredImage}
                      alt={b.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-full bg-softgreen px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy">
                      {b.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{b.readTime}</span>
                  </div>
                  <h4 className="mt-2 font-display text-base font-bold text-navy group-hover:text-secondary">
                    {b.title}
                  </h4>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-secondary group-hover:underline">
                  Read Article <ArrowRight className="size-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
