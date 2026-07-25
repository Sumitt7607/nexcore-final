import { createFileRoute } from "@tanstack/react-router";
import {
  Hero, TrustedLogos, Services, About, Results, WhyUs,
  Process, PortfolioPreview, CTABanner, Testimonials, FAQ, ContactBlock,
} from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexcore Technologies — Premium Digital Agency for Websites, Ads & Growth" },
      { name: "description", content: "Nexcore Technologies builds high-performing websites, runs profitable Google & Meta ads, and delivers SEO, branding and software that grow your business." },
      { property: "og:title", content: "Nexcore Technologies — Premium Digital Agency" },
      { property: "og:description", content: "Websites, Google Ads, Meta Ads, SEO, branding and custom software that generate measurable results." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustedLogos />
      <Services />
      <About />
      <Results />
      <WhyUs />
      <Process />
      <PortfolioPreview />
      <CTABanner />
      <Testimonials />
      <FAQ />
      <ContactBlock />
    </>
  );
}
