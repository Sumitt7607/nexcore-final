import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/site/HomeSections";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Nexcore Technologies" },
      { name: "description", content: "Privacy Policy for Nexcore Technologies. Learn how we collect, use, and protect your data." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <section className="bg-hero-mesh py-20">
        <div className="container-p mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-softgreen px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-navy">
            <ShieldCheck className="size-4 text-secondary" /> Data & Transparency
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-navy sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: August 2026 · Nexcore Technologies
          </p>
        </div>
      </section>

      <section className="container-p mx-auto max-w-4xl py-16">
        <div className="prose prose-slate max-w-none rounded-3xl border border-border bg-white p-8 shadow-soft sm:p-12 space-y-8 text-navy/90">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">1. Introduction</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nexcore Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy">2. Information We Collect</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We collect personal information that you voluntarily provide to us when you fill out contact forms, request quotes, or communicate with us. This includes:
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-2 text-muted-foreground">
              <td><strong>Contact Data:</strong> Name, email address, phone number, company name.</td>
              <td><strong>Project Information:</strong> Details regarding requested website, marketing, or custom software services.</td>
              <td><strong>Technical Data:</strong> IP address, browser type, device information, and site interaction data captured via analytics tools.</td>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy">3. How We Use Your Information</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We use the collected information for specific business purposes, including:
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-2 text-muted-foreground">
              <td>Responding to your project inquiries and delivering requested quotes.</td>
              <td>Providing client support, website maintenance, and custom software delivery.</td>
              <td>Sending relevant marketing communications, campaign updates, or technical notices.</td>
              <td>Improving website performance, security, and user experience.</td>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy">4. Data Sharing & Security</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              We do not sell, rent, or trade your personal information to third parties. We implement industry-standard encryption and security measures to protect your personal data from unauthorized access, disclosure, or alteration.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-navy">5. Contact Us</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              If you have any questions or concerns regarding this Privacy Policy, please contact our team at:
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
