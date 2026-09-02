import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { CTABanner } from "@/components/site/HomeSections";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Nexcore Technologies" },
      { name: "description", content: "Terms of Service for Nexcore Technologies. Read our terms, conditions, and service agreements." },
      { property: "og:url", content: "https://www.nexcoretech.online/terms" },
    ],
    links: [{ rel: "canonical", href: "https://www.nexcoretech.online/terms" }],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <>
      <section className="bg-hero-mesh py-20">
        <div className="container-p mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-softgreen px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy">
            <ShieldCheck className="size-4 text-secondary" /> Legal Agreement
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-navy sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: August 2026 · Nexcore Technologies
          </p>
        </div>
      </section>

      <section className="container-p mx-auto max-w-4xl py-16">
        <div className="prose prose-slate max-w-none rounded-3xl border border-border bg-white p-8 shadow-soft sm:p-12 space-y-8 text-navy/90">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">1. Acceptance of Terms</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              By accessing or using the services provided by Nexcore Technologies ("Company", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy">2. Services Offered</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nexcore Technologies provides digital services including Website Development, Google Ads Management, Meta Ads Management, Video Editing, Brand Identity Design, and Custom Software Development. Specific project scope, timelines, deliverables, and fees are governed by individual client proposals or service agreements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy">3. Intellectual Property Rights</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Upon full payment of agreed project fees, clients own all final custom deliverables, source code, design assets, and marketing collateral created specifically for their project, unless specified otherwise in the agreement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy">4. Payment & Support Terms</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Payment schedules are outlined in project invoices. Hosting, domain registration, and ongoing maintenance packages (e.g., 6-month or 1-year included support) commence on the date of project delivery.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy">5. Contact Information</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              For any questions regarding these Terms of Service, please reach out to us at:
            </p>
            <p className="mt-3 text-sm font-semibold text-navy">
              Email: <a href="mailto:nexcoretechnologies.team@gmail.com" className="text-secondary underline">nexcoretechnologies.team@gmail.com</a><br />
              Location: Greater Noida, India
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
