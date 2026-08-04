import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Sparkles, Phone, MessageCircle } from "lucide-react";
import { serviceGroups } from "@/lib/services-data";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass shadow-soft" : "bg-transparent",
      )}
    >
      <div className="container-p mx-auto flex h-18 max-w-7xl items-center justify-between py-3">
        <Link to="/" className="group flex items-center">
          <img src="/logo.png" alt="Nexcore Technologies" className="h-32 sm:h-36 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-navy"
          >
            Home
          </Link>

          {/* Services mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-navy">
              Services <ChevronDown className="size-4" />
            </button>
            <div
              className={cn(
                "invisible absolute left-1/2 top-full z-40 -translate-x-1/2 pt-3 opacity-0 transition-all",
                servicesOpen && "visible opacity-100",
              )}
            >
              <div className="grid w-[min(90vw,860px)] grid-cols-3 gap-6 rounded-3xl border border-border bg-white p-6 shadow-elegant">
                {serviceGroups.map((group) => (
                  <div key={group.label}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-secondary">
                      {group.label}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to="/services/$slug"
                            params={{ slug: s.slug }}
                            className="block rounded-lg px-2 py-1.5 text-sm font-medium text-foreground/80 transition hover:bg-softgreen hover:text-navy"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/portfolio" className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-navy">
            Portfolio
          </Link>
          <Link to="/about" className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-navy">
            About Us
          </Link>
          <Link to="/blog" className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-navy">
            Blogs
          </Link>
          <Link to="/contact" className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-navy">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20connect%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-green-600 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
          >
            <MessageCircle className="size-4" /> WhatsApp Now
          </a>
          <a
            href="tel:7607696315"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-navy shadow-elegant transition hover:brightness-95"
          >
            <Phone className="size-4" /> Call Now
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:7607696315"
            className="inline-flex items-center gap-1.5 rounded-full bg-green-600 hover:bg-green-700 text-white px-3.5 py-2 text-xs font-bold shadow-md transition transform active:scale-95"
          >
            <Phone className="size-3.5" />
            Call Now
          </a>
          <button
            className="grid size-10 place-items-center rounded-xl border border-border"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container-p mx-auto max-w-7xl space-y-1 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-surface"
              >
                {l.label}
              </Link>
            ))}
            <details className="rounded-lg">
              <summary className="cursor-pointer list-none px-3 py-2 text-sm font-medium">Services</summary>
              <ul className="pl-4">
                {serviceGroups.flatMap((g) => g.items).map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-surface"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <div className="flex gap-2 pt-3">
              <a
                href="https://wa.me/917607696315?text=Hi%20Nexcore%2C%20I%27m%20interested%20in%20your%20services.%20Can%20we%20connect%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-green-600 px-4 py-2 text-sm font-semibold text-green-700"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
              <a
                href="tel:7607696315"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-navy"
                onClick={() => setOpen(false)}
              >
                <Phone className="size-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
