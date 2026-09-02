import { Link } from "@tanstack/react-router";
import { Sparkles, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { serviceGroups } from "@/lib/services-data";
import { locationHubs } from "@/lib/locations-data";

export function SiteFooter() {
  const services = serviceGroups.flatMap((g) => g.items).slice(0, 8);

  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="container-p mx-auto max-w-7xl py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="Nexcore Technologies" className="h-28 sm:h-32 w-auto object-contain -my-4" />
            </Link>
            <p className="mt-4 max-w-xs text-xs sm:text-sm text-white/70 leading-relaxed">
              A premier digital agency engineering high-performance websites, certified Google & Meta ads, and top-ranking SEO for brands across Delhi NCR.
            </p>
            <div className="mt-4 space-y-1.5 text-xs text-white/70">
              <p className="flex items-center gap-2">
                <MapPin className="size-3.5 text-brand shrink-0" />
                Greater Noida HQ (Delhi NCR), India
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-3.5 text-brand shrink-0" />
                <a href="tel:7607696315" className="hover:text-brand">+91 7607696315</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-3.5 text-brand shrink-0" />
                <a href="mailto:nexcoretechnologies.team@gmail.com" className="hover:text-brand truncate">
                  nexcoretechnologies.team@gmail.com
                </a>
              </p>
            </div>
            <div className="mt-5 flex gap-2">
              {[
                { name: "Facebook", Icon: Facebook, href: "https://www.facebook.com/share/1DaCrvDXK4/" },
                { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/nexcore.marketing?igsh=MXUzeWx3N3NidnBpMA==" },
                { name: "LinkedIn", Icon: Linkedin, href: "https://www.linkedin.com/company/nexcore-technologies-india/" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid size-8 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-brand hover:bg-brand hover:text-navy"
                >
                  <s.Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <p className="mb-4 font-display text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand">Services</p>
            <ul className="space-y-2 text-xs sm:text-sm">
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

          {/* Col 3: Delhi NCR Locations */}
          <div>
            <p className="mb-4 font-display text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand">Delhi NCR Hubs</p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/locations" className="text-white/90 font-bold hover:text-brand">
                  All Locations Directory ↗
                </Link>
              </li>
              {locationHubs.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to="/locations/$city"
                    params={{ city: loc.slug }}
                    className="text-white/70 transition hover:text-brand"
                  >
                    {loc.name} {loc.slug === "greater-noida" && "(HQ)"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <p className="mb-4 font-display text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand">Company</p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/about" className="text-white/70 hover:text-brand">About Us</Link></li>
              <li><Link to="/portfolio" className="text-white/70 hover:text-brand">Portfolio</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-brand">Blog</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-brand">Contact</Link></li>
              <li><Link to="/privacy" className="text-white/70 hover:text-brand">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-brand">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Col 5: Newsletter & Contact CTA */}
          <div>
            <p className="mb-4 font-display text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand">Stay Updated</p>
            <p className="text-xs text-white/70">Growth playbooks, marketing insights and tech updates for Delhi NCR businesses.</p>
            <form className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5">
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-transparent px-3.5 py-2 text-xs placeholder:text-white/40 focus:outline-none"
              />
              <button className="grid place-items-center bg-brand px-3.5 text-navy" aria-label="Subscribe">
                <ArrowRight className="size-3.5" />
              </button>
            </form>
            <div className="mt-4">
              <a
                href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%27d%20like%20to%20consult%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand/10 border border-brand/40 px-3 py-2 text-xs font-bold text-brand hover:bg-brand hover:text-navy transition"
              >
                Instant WhatsApp Quote ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Nexcore Technologies (Greater Noida, Delhi NCR). All rights reserved.</p>
          <p>Delivering Top-3 Google Search Rankings across Delhi, Noida, Gurugram & Faridabad.</p>
        </div>
      </div>
    </footer>
  );
}
