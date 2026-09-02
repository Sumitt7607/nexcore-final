export type LocationHub = {
  slug: string;
  name: string;
  shortName: string;
  region: string;
  tagline: string;
  heroDesc: string;
  neighborhoods: string[];
  geo: {
    lat: number;
    lng: number;
  };
  address: string;
  localStats: {
    label: string;
    value: string;
  }[];
  localHighlights: string[];
  faqs: { q: string; a: string }[];
};

export const SITE_DOMAIN = "https://www.nexcoretech.online";

export const locationHubs: LocationHub[] = [
  {
    slug: "noida",
    name: "Noida",
    shortName: "Noida",
    region: "Gautam Buddha Nagar, Uttar Pradesh (Delhi NCR)",
    tagline: "Top Web Development, Google Ads & Digital Marketing Agency in Noida",
    heroDesc:
      "Helping startups, corporate brands, and scaling businesses across Noida (Sector 62, Sector 18, Sector 63, Expressway & Film City) dominate search rankings, capture verified leads, and build high-converting websites.",
    neighborhoods: [
      "Sector 62 (IT & Corporate Hub)",
      "Sector 18 (Commercial & Retail)",
      "Sector 63 (Tech & B2B Hub)",
      "Noida-Greater Noida Expressway",
      "Sector 125 & 126",
      "Film City (Sector 16A)",
      "Sector 15 & 16",
    ],
    geo: {
      lat: 28.5355,
      lng: 77.391,
    },
    address: "Serving all Noida Sectors (Expressway, Sector 62, Sector 18 & Greater Noida)",
    localStats: [
      { label: "Noida Projects Delivered", value: "85+" },
      { label: "Average ROAS for Noida Clients", value: "4.8×" },
      { label: "Google Top 3 Rankings Won", value: "92%" },
      { label: "Avg. Turnaround Time", value: "3-5 Days" },
    ],
    localHighlights: [
      "Local support team available for in-person meetings across Noida & Expressway",
      "Specialized in high-intent lead generation for Noida tech firms, B2B companies & real estate",
      "Certified Google Ads & Meta Ads specialists with proven Delhi NCR case studies",
      "Custom, lightning-fast websites with 2 years cloud hosting & free domain included",
    ],
    faqs: [
      {
        q: "Why should businesses in Noida choose Nexcore Technologies?",
        a: "Nexcore Technologies is headquartered in the Noida-Greater Noida belt, allowing us to offer dedicated local support, deep knowledge of the Delhi NCR market dynamics, and fast turnaround for corporate websites, e-commerce stores, and ROI-focused ad campaigns.",
      },
      {
        q: "Do you offer in-person consultations in Noida?",
        a: "Yes! Our team frequently visits client offices across Sector 62, Sector 18, Sector 63, and along the Noida Expressway for project kickoffs, design sprints, and marketing strategy reviews.",
      },
      {
        q: "How fast can you launch a website for a Noida-based business?",
        a: "Standard business websites and landing pages are designed, developed, and deployed within 3 to 5 business days, complete with Google SEO setup, SSL, and mobile responsiveness.",
      },
      {
        q: "Can you help our Noida business rank in the Top 3 on Google?",
        a: "Yes. We combine hyper-targeted Local SEO (optimizing Google Business Profile, local citations, and on-page schema) with high-authority content strategy to outrank competitors in Noida search results.",
      },
    ],
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    shortName: "Gr. Noida",
    region: "Gautam Buddha Nagar, Uttar Pradesh (Delhi NCR)",
    tagline: "Premier Website Development & Digital Agency in Greater Noida (HQ)",
    heroDesc:
      "Direct from our Greater Noida headquarters, we engineer high-performance websites, custom software, and profitable advertising systems for businesses in Knowledge Park, Pari Chowk, Alpha, Beta, and Greater Noida West.",
    neighborhoods: [
      "Pari Chowk",
      "Knowledge Park I, II & III",
      "Greater Noida West (Noida Extension)",
      "Alpha 1 & 2",
      "Beta 1 & 2",
      "Ecotech Industrial Area",
      "Delta & Gamma Sectors",
    ],
    geo: {
      lat: 28.4744,
      lng: 77.504,
    },
    address: "Greater Noida, Uttar Pradesh, 201310, India (Nexcore HQ)",
    localStats: [
      { label: "Greater Noida HQ Clients", value: "110+" },
      { label: "Client Satisfaction Rate", value: "99.4%" },
      { label: "Local Businesses Scaled", value: "45+" },
      { label: "Local Support Response", value: "< 15 Mins" },
    ],
    localHighlights: [
      "Headquartered right in Greater Noida with full in-house development and marketing staff",
      "Special discounts and dedicated onboarding for Greater Noida businesses and educational institutions",
      "Rapid on-site meetings across Pari Chowk, Knowledge Park, and Noida Extension",
      "End-to-end services: Web, Ads, SEO, Brand Design, Video Production, and Custom Software",
    ],
    faqs: [
      {
        q: "Where is Nexcore Technologies based in Greater Noida?",
        a: "Nexcore Technologies is headquartered in Greater Noida, catering directly to clients across Knowledge Park, Pari Chowk, Greater Noida West, and all residential/commercial sectors.",
      },
      {
        q: "What services do you provide in Greater Noida?",
        a: "We provide complete end-to-end digital solutions including custom website development, e-commerce stores, certified Google Ads management, Meta ads, Local SEO, brand identity, and bespoke software/CRM systems.",
      },
      {
        q: "What is included in the ₹3,500 promotional website package for Greater Noida clients?",
        a: "It includes 2 full years of high-speed cloud hosting, a free domain name (1st year), 100% mobile-responsive layout, basic Google SEO integration, SSL security, and 6 months of technical support.",
      },
    ],
  },
  {
    slug: "delhi",
    name: "Delhi",
    shortName: "Delhi",
    region: "National Capital Territory of Delhi",
    tagline: "Leading Website Development, SEO & Google Ads Company in Delhi",
    heroDesc:
      "Supercharge your brand with premier digital engineering. We craft bespoke websites, high-ROAS ad campaigns, and dominant organic search strategies for enterprises and startups throughout Delhi.",
    neighborhoods: [
      "Connaught Place (CP)",
      "South Extension & Greater Kailash",
      "Nehru Place (IT Hub)",
      "Saket & Hauz Khas",
      "Dwarka & Janakpuri",
      "Netaji Subhash Place & Pitampura",
      "Okhla Industrial Area",
      "Rohini & North Delhi",
    ],
    geo: {
      lat: 28.6139,
      lng: 77.209,
    },
    address: "Delhi NCR Service Area (Connaught Place, South Delhi, Nehru Place, Okhla)",
    localStats: [
      { label: "Delhi Enterprise Clients", value: "95+" },
      { label: "Ad Spend Managed", value: "₹2.5 Cr+" },
      { label: "Organic Search Growth", value: "+320%" },
      { label: "Average Conversion Rate", value: "6.4%" },
    ],
    localHighlights: [
      "Proven track record serving top retail, healthcare, legal, real estate, and D2C brands in Delhi",
      "Aggressive Local SEO campaigns that secure Top 3 Google Map pack and organic positions",
      "Data-backed Google Ads and Meta Ads campaigns that minimize cost-per-lead (CPL)",
      "Ultra-modern UI/UX design matching global design standards",
    ],
    faqs: [
      {
        q: "How does Nexcore help Delhi businesses stand out from local competitors?",
        a: "Delhi is one of the most competitive markets in India. We give you an unfair advantage with speed-optimized websites built for high conversions, aggressive Google Ads with negative keyword filtering, and systematic Local SEO targeting high-intent buyer searches.",
      },
      {
        q: "Can your team work with Delhi-based corporate firms?",
        a: "Yes. We work closely with B2B firms, retail businesses, healthcare clinics, and startups across South Delhi, Connaught Place, Nehru Place, and West Delhi.",
      },
      {
        q: "Do you handle e-commerce development for Delhi brands?",
        a: "Yes, we build scalable Shopify, WooCommerce, and custom React/Next.js e-commerce platforms with integrated Indian payment gateways (Razorpay, Cashfree, PhonePe), shipping APIs, and conversion tracking.",
      },
    ],
  },
  {
    slug: "gurugram",
    name: "Gurugram",
    shortName: "Gurugram",
    region: "Haryana (Delhi NCR / Millennium City)",
    tagline: "Top Web Development, Performance Marketing & SEO Agency in Gurugram",
    heroDesc:
      "Engineered for the Millennium City's high-growth startups and Fortune 500 brands. We deliver scalable web applications, enterprise branding, and ROI-focused digital marketing across Cyber City, Golf Course Road, and Sohna Road.",
    neighborhoods: [
      "Cyber City & DLF Phase 1-5",
      "Golf Course Road & Golf Course Extension",
      "Udyog Vihar (Phases 1-5)",
      "Sohna Road & Subhash Chowk",
      "MG Road",
      "Sector 29 & Sector 44",
      "Manesar Industrial Area",
    ],
    geo: {
      lat: 28.4595,
      lng: 77.0266,
    },
    address: "Serving Gurugram (Cyber City, Golf Course Road, Udyog Vihar & Sohna Road)",
    localStats: [
      { label: "Gurugram Tech & B2B Clients", value: "70+" },
      { label: "Average Lead Cost Reduction", value: "48%" },
      { label: "Enterprise Web Apps Shipped", value: "35+" },
      { label: "Client Retention Rate", value: "96%" },
    ],
    localHighlights: [
      "Modern tech stack: React, TanStack, Next.js, Node, Tailwind, and Cloudflare",
      "Specialized B2B lead generation engines for Gurugram tech, consulting, and finance companies",
      "Complete brand identity design: logos, design systems, pitch decks, and video assets",
      "Certified Google Premier Partner-level campaign structures with transparent reporting",
    ],
    faqs: [
      {
        q: "Why choose Nexcore Technologies for web development in Gurugram?",
        a: "Gurugram companies demand cutting-edge technology, clean code, and rapid execution. We build blazingly fast websites that load in under 1.5 seconds, achieve 95+ Google Lighthouse scores, and convert high-value corporate prospects.",
      },
      {
        q: "What ad strategies work best for Gurugram B2B companies?",
        a: "For Gurugram B2B firms, we deploy high-intent Google Search campaigns targeting exact decision-maker keywords, paired with Meta retargeting and dedicated conversion-optimized landing pages.",
      },
      {
        q: "Can we have in-person strategy sessions in Gurugram?",
        a: "Absolutely. Our founders and tech leads regularly meet clients in Cyber City, Golf Course Road, and Udyog Vihar for roadmap planning and quarterly reviews.",
      },
    ],
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    shortName: "Faridabad",
    region: "Haryana (Delhi NCR)",
    tagline: "Best Website Development & Digital Marketing Services in Faridabad",
    heroDesc:
      "Transforming manufacturing giants, industrial businesses, and local service providers in Faridabad into online revenue powerhouses with modern websites, Google Ads, and local search dominance.",
    neighborhoods: [
      "Mathura Road Industrial Corridor",
      "NIT Faridabad (1, 2, 3, 4, 5)",
      "Sector 15 & Sector 16",
      "Ballabgarh Industrial Zone",
      "Neharpar (Greater Faridabad)",
      "Green Fields Colony",
      "Sector 28 & 31",
    ],
    geo: {
      lat: 28.4089,
      lng: 77.3178,
    },
    address: "Serving Faridabad (Mathura Road, NIT, Neharpar & Ballabgarh)",
    localStats: [
      { label: "Faridabad Industrial Clients", value: "50+" },
      { label: "Local Inquiries Generated", value: "15,000+" },
      { label: "Google Maps 3-Pack Win Rate", value: "88%" },
      { label: "Typical Launch Time", value: "3-5 Days" },
    ],
    localHighlights: [
      "Industrial & B2B website design showcasing product catalogs, machinery, and technical specs",
      "Targeted Google Local SEO that puts your Faridabad business in Google Maps top 3",
      "Affordable pricing with transparent milestone deliverables and zero hidden fees",
      "Full ongoing maintenance, security patching, and hosting support included",
    ],
    faqs: [
      {
        q: "How can Nexcore help manufacturing and industrial firms in Faridabad?",
        a: "We build professional, trust-building catalog websites that showcase your plant capabilities, certifications, and product ranges, coupled with Google Search Ads that capture buyers looking for suppliers in Delhi NCR.",
      },
      {
        q: "Can you manage our Google Business Profile in Faridabad?",
        a: "Yes. Our Local SEO package includes complete Google Business Profile optimization, citation building on top Indian business directories (Justdial, IndiaMART), and review management.",
      },
      {
        q: "Is ongoing website maintenance included?",
        a: "Yes, all our website packages include complimentary technical support, security updates, uptime monitoring, and cloud hosting.",
      },
    ],
  },
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    shortName: "Delhi NCR",
    region: "National Capital Region (Delhi, Noida, Gurgaon, Faridabad, Ghaziabad)",
    tagline: "Top Digital Marketing, Web Development & Growth Agency Across Delhi NCR",
    heroDesc:
      "The premier digital growth partner for businesses across the entire National Capital Region. From high-converting websites to million-rupee ad campaigns, we deliver measurable results across Delhi, Noida, Greater Noida, Gurugram, and Faridabad.",
    neighborhoods: [
      "Delhi (North, South, East, West & Central)",
      "Noida & Greater Noida",
      "Gurugram & Manesar",
      "Faridabad & Ballabgarh",
      "Ghaziabad & Indirapuram",
    ],
    geo: {
      lat: 28.6139,
      lng: 77.209,
    },
    address: "Nexcore Technologies — Greater Noida HQ, Serving Entire Delhi NCR",
    localStats: [
      { label: "Total Delhi NCR Projects", value: "350+" },
      { label: "Average Client ROI", value: "5.2×" },
      { label: "Client Recommendation Rate", value: "98%" },
      { label: "Years Serving NCR", value: "5+ Years" },
    ],
    localHighlights: [
      "Regional coverage across all major NCR commercial and industrial corridors",
      "Unified digital services: Website Engineering, Ads, SEO, Video, Branding & Software",
      "Flat, transparent pricing with our 60% promotional discount and 2-year hosting included",
      "Direct communication via dedicated WhatsApp group with our engineering team",
    ],
    faqs: [
      {
        q: "What makes Nexcore the #1 digital agency in Delhi NCR?",
        a: "We combine Silicon Valley-grade website development standards with deeply localized Delhi NCR marketing expertise. We don't just build websites; we build lead-generating growth assets backed by certified ads management and SEO.",
      },
      {
        q: "Can you serve multi-location businesses across Delhi NCR?",
        a: "Yes! We specialize in multi-location SEO and regional ad campaigns that allow brands with branches in Noida, Delhi, and Gurgaon to dominate local search across all locations simultaneously.",
      },
    ],
  },
];

export const allLocations = locationHubs;
export const getLocation = (slug: string) => locationHubs.find((loc) => loc.slug === slug);

export function getCityServiceName(cityName: string, serviceName: string): string {
  return `${serviceName} in ${cityName}`;
}

export function getCityServiceHeadline(cityName: string, serviceName: string): string {
  return `Best ${serviceName} Company in ${cityName}, Delhi NCR`;
}

export function getCityServiceDescription(cityName: string, serviceName: string): string {
  return `Looking for the top ${serviceName.toLowerCase()} in ${cityName}? Nexcore Technologies delivers high-performance solutions, proven Google rankings, and high-converting results for businesses in ${cityName} and across Delhi NCR.`;
}
