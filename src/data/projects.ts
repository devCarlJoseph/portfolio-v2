export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack Web" | "Mobile App" | "SaaS Platform" | "Landing & Platform" | "Enterprise ERP";
  year: string;
  featured: boolean;
  description: string;
  longDescription: string;
  imageUrl: string;
  stack: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

export const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "haygo-car",
    title: "HayGo Car Rental",
    tagline: "Car Rental",
    category: "Full-Stack Web",
    year: "2025",
    featured: true,
    description:
      "Modern headless commerce engine featuring sub-second product search, Stripe payments, real-time inventory, and an analytics dashboard.",
    longDescription:
      "Commerce Flow is an enterprise-grade headless storefront engineered for scale. It features dynamic server-side rendering, instant faceted search, secure webhooks for multi-currency Stripe checkout, automated tax calculations, and a high-performance inventory synchronization engine.",
    imageUrl: "/projects/project-ecommerce.jpg",
    stack: ["Php", "React", "TypeScript", "MySQL", "Tailwind CSS"],
    features: [
      "Sub-second faceted product filtering & instant search",
      "Stripe Elements checkout with webhook fulfillment",
      "Real-time stock reservation and webhook synchronization",
      "Automated PDF invoicing and buyer receipts",
      "Admin order management portal with revenue analytics",
    ],
    metrics: [
      { label: "Page Speed", value: "99/100" },
      { label: "Checkout Time", value: "< 35s" },
      { label: "Test Coverage", value: "94%" },
    ],
    githubUrl: "https://github.com/devCarlJoseph/haygo-car-rental.git",
  },
  {
    id: "elluna",
    title: "Elluna",
    tagline: "Mobile Pregnancy Tracker & Baby Growth",
    category: "Mobile App",
    year: "2025",
    featured: true,
    description:
      "Cross-platform fitness app with smart workout logging, activity rings, Apple Health sync, and automated progressive overload charts.",
    longDescription:
      "Pulse Fitness delivers an intuitive mobile companion for athletes and gym-goers. Built with React Native and Expo, it synchronizes workout sessions offline-first, syncs biometrics with Apple Health and Google Fit, and generates predictive strength progressions with D3 visual charts.",
    imageUrl: "/projects/project-fitness-app.jpg",
    stack: ["React Native", "Expo", "Firebase", "HealthKit", "TypeScript", "Tailwind CSS"],
    features: [
      "Offline-first session caching with automated sync",
      "Apple Health & Google Fit bidirectional metric import",
      "Adaptive rest timers with background notifications",
      "Progressive overload progression visualizer",
      "Custom routine builder with video demo guides",
    ],
    metrics: [
      { label: "Crash Free Rate", value: "99.8%" },
      { label: "Active Users", value: "12k+" },
      { label: "App Rating", value: "4.9 ★" },
    ],
    liveUrl: "",
    githubUrl: "https://github.com/devCarlJoseph/elluna-app.git",
  },
  {
    id: "srp-attendance",
    title: "SRP Acolytes Attendance Tracker",
    tagline: "Real-Time SaaS Analytics & Funnel Platform",
    category: "SaaS Platform",
    year: "2024",
    featured: true,
    description:
      "Business intelligence platform offering live metric tracking, customer funnel visualization, cohort retention, and automated reports.",
    longDescription:
      "InsightLogix ingests millions of telemetry events per day to empower founders with clear operational metrics. With customized D3.js visualization widgets, WebSocket streaming updates, and automated weekly digests, teams make data-backed growth decisions faster.",
    imageUrl: "/projects/project-saas-analytics.jpg",
    stack: ["React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Live WebSocket telemetry ingestion pipeline",
      "Interactive funnel dropoff & cohort retention charts",
      "Configurable KPI anomaly alerts via Slack/Email",
      "Granular role-based access control (RBAC)",
      "Automated CSV/PDF scheduled report exports",
    ],
    metrics: [
      { label: "Events/Day", value: "2.4M" },
      { label: "Query Latency", value: "< 45ms" },
      { label: "Uptime", value: "99.95%" },
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "portoflio",
    title: "Portfolio V2",
    tagline: "A New Version of Carl Joseph Sumagang Portfolio",
    category: "Landing & Platform",
    year: "2025",
    featured: true,
    description:
      "Luxury real estate platform with interactive map filtering, virtual 3D property showcases, and optimized lead-capture funnels.",
    longDescription:
      "Luxura Estates is built to turn high-net-worth browsers into scheduled private viewing appointments. Featuring interactive Mapbox clustering, high-resolution media carousels, instant mortgage calculators, and an integrated CRM webhook pipeline.",
    imageUrl: "/projects/portfolio.png",
    stack: ["React", "TypeScript", "Tailwind CSS", "Motion", "ShadCn"],
    features: [
      "Mapbox spatial radius property search with custom markers",
      "High-speed 3D virtual tour embed support",
      "Dynamic mortgage & amortization payment estimator",
      "Instant broker scheduling calendar with automated email confirmations",
      "Optimized SEO schema markup for real estate listings",
    ],
    metrics: [
      { label: "Lead Conv.", value: "+38%" },
      { label: "LCP Score", value: "0.8s" },
      { label: "SEO Score", value: "100" },
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "hysync ",
    title: "Hysync - Hytale Server",
    tagline: "Hysync Server for the game Hytale",
    category: "Landing & Platform",
    year: "2025",
    featured: false,
    description:
      "Editorial agency platform featuring fluid micro-interactions, dark mode aesthetics, dynamic case studies, and fast static generation.",
    longDescription:
      "Mayi Creative is a showcase of cutting-edge web design and smooth typography. Built for a boutique creative agency, it combines frictionless page transitions, responsive video showcases, and a bespoke inquiry funnel.",
    imageUrl: "/projects/hysync.png",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    features: [
      "Zero-JS baseline architecture with island hydration",
      "Fluid scroll-driven cursor animations and smooth page reveals",
      "Interactive case study galleries with full-bleed imagery",
      "Accessible dark/light color grading system",
      "Static site generation with edge CDN deployment",
    ],
    metrics: [
      { label: "Performance", value: "100/100" },
      { label: "Bundle Size", value: "< 28kB" },
      { label: "SEO Rank", value: "#1" },
    ],
    liveUrl: "https://www.hysync.org/",
    githubUrl: "https://github.com",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Full-Stack Web",
  "SaaS Platform",
  "Mobile App",
  "Landing & Platform",
  "Enterprise ERP",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
