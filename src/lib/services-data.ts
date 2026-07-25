export type ServiceCategory = {
  label: string;
  items: { slug: string; name: string; short: string }[];
};

export const serviceGroups: ServiceCategory[] = [
  {
    label: "Websites",
    items: [
      { slug: "website-development", name: "Website Development", short: "High-performance custom websites built to convert." },
      { slug: "business-website-development", name: "Business Website Development", short: "Corporate sites that build trust and generate leads." },
      { slug: "ecommerce-website-development", name: "E-Commerce Development", short: "Fast, scalable stores optimized for revenue." },
      { slug: "landing-page-development", name: "Landing Page Development", short: "Conversion-first landing pages for ad campaigns." },
      { slug: "website-redesign", name: "Website Redesign", short: "Modernize your brand with a premium redesign." },
      { slug: "website-maintenance", name: "Website Maintenance", short: "Ongoing care, updates and performance tuning." },
    ],
  },
  {
    label: "Marketing",
    items: [
      { slug: "google-ads-management", name: "Google Ads Management", short: "Certified Google Ads that lower CPL and scale ROI." },
      { slug: "meta-ads-management", name: "Meta Ads Management", short: "Facebook & Instagram ads that fill your pipeline." },
      { slug: "seo-services", name: "SEO Services", short: "Rank higher and win qualified organic traffic." },
      { slug: "local-seo", name: "Local SEO", short: "Dominate local search and Google Maps." },
      { slug: "social-media-marketing", name: "Social Media Marketing", short: "Content and community that grows your brand." },
    ],
  },
  {
    label: "Creative & Software",
    items: [
      { slug: "graphic-designing", name: "Graphic Designing", short: "Beautiful design systems for every channel." },
      { slug: "logo-designing", name: "Logo Designing", short: "Distinctive marks crafted for lasting impact." },
      { slug: "brand-identity", name: "Brand Identity", short: "Full identity systems that feel premium." },
      { slug: "video-editing", name: "Video Editing", short: "Sharp, scroll-stopping video for every platform." },
      { slug: "motion-graphics", name: "Motion Graphics", short: "Animations that make products come alive." },
      { slug: "ai-chatbot-development", name: "AI Chatbot Development", short: "Smart assistants that qualify and convert." },
      { slug: "crm-development", name: "CRM Development", short: "Custom CRMs tailored to your workflows." },
      { slug: "custom-software-development", name: "Custom Software Development", short: "Bespoke software engineered to scale." },
    ],
  },
];

export const allServices = serviceGroups.flatMap((g) => g.items);
export const getService = (slug: string) => allServices.find((s) => s.slug === slug);
