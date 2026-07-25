import { Link } from "@tanstack/react-router";
import { Sparkles, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import { serviceGroups } from "@/lib/services-data";

export function SiteFooter() {
  const services = serviceGroups.flatMap((g) => g.items).slice(0, 8);

  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="container-p mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-xl bg-brand text-navy">
                <Sparkles className="size-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold">Nexcore<span className="text-brand">.</span></span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/70">
              A premium digital agency helping brands ship stunning websites, run profitable ads and scale online.
            </p>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-brand hover:bg-brand hover:text-navy"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-brand">Services</p>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-white/70 transition hover:text-brand"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-brand">Company</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-brand">About Us</Link></li>
              <li><Link to="/portfolio" className="text-white/70 hover:text-brand">Portfolio</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-brand">Blog</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-brand">Contact</Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-brand">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-brand">Terms</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-brand">Newsletter</p>
            <p className="text-sm text-white/70">Growth insights, marketing playbooks and product updates. No spam.</p>
            <form className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-transparent px-4 py-2.5 text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button className="grid place-items-center bg-brand px-4 text-navy" aria-label="Subscribe">
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Nexcore Technologies. All rights reserved.</p>
          <p>Crafted with precision — built to convert.</p>
        </div>
      </div>
    </footer>
  );
}
