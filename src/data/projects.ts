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
    id: "commerce-flow",
    title: "Commerce Flow",
    tagline: "Headless E-Commerce Platform & Checkout",
    category: "Full-Stack Web",
    year: "2025",
    featured: true,
    description:
      "Modern headless commerce engine featuring sub-second product search, Stripe payments, real-time inventory, and an analytics dashboard.",
    longDescription:
      "Commerce Flow is an enterprise-grade headless storefront engineered for scale. It features dynamic server-side rendering, instant faceted search, secure webhooks for multi-currency Stripe checkout, automated tax calculations, and a high-performance inventory synchronization engine.",
    imageUrl: "/projects/project-ecommerce.jpg",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"],
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "pulse-fitness",
    title: "Pulse Fitness",
    tagline: "Mobile Workout Tracker & Health Intelligence",
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "insightlogix",
    title: "InsightLogix",
    tagline: "Real-Time SaaS Analytics & Funnel Platform",
    category: "SaaS Platform",
    year: "2024",
    featured: true,
    description:
      "Business intelligence platform offering live metric tracking, customer funnel visualization, cohort retention, and automated reports.",
    longDescription:
      "InsightLogix ingests millions of telemetry events per day to empower founders with clear operational metrics. With customized D3.js visualization widgets, WebSocket streaming updates, and automated weekly digests, teams make data-backed growth decisions faster.",
    imageUrl: "/projects/project-saas-analytics.jpg",
    stack: ["React", "D3.js", "Node.js", "MongoDB", "WebSocket", "Tailwind CSS"],
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
    id: "gymbro-ai",
    title: "GymBro AI",
    tagline: "AI Workout Generator & Form Intelligence",
    category: "Mobile App",
    year: "2025",
    featured: false,
    description:
      "Intelligent personal trainer leveraging LLMs to create tailored periodization routines and dietary breakdowns based on biometrics.",
    longDescription:
      "GymBro AI removes the guesswork from resistance training. By analyzing user goals, available equipment, recovery status, and dietary preferences, it synthesizes tailored split routines and macro targets that adapt as performance increases.",
    imageUrl: "/projects/gymbro.jpg",
    stack: ["Next.js", "OpenAI API", "PostgreSQL", "Supabase", "TypeScript", "Tailwind CSS"],
    features: [
      "Dynamic prompt engineering with structured JSON schema outputs",
      "Macro & caloric target calculator with meal recommendations",
      "Body split adaptation based on logged fatigue levels",
      "Exercise substitution engine based on available gym equipment",
      "One-click routine export to calendar and mobile devices",
    ],
    metrics: [
      { label: "Routines Gen.", value: "45k+" },
      { label: "Response Time", value: "1.2s" },
      { label: "Satisfaction", value: "98%" },
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "luxura-estates",
    title: "Luxura Estates",
    tagline: "High-Converting Real Estate Portal & Funnel",
    category: "Landing & Platform",
    year: "2024",
    featured: true,
    description:
      "Luxury real estate platform with interactive map filtering, virtual 3D property showcases, and optimized lead-capture funnels.",
    longDescription:
      "Luxura Estates is built to turn high-net-worth browsers into scheduled private viewing appointments. Featuring interactive Mapbox clustering, high-resolution media carousels, instant mortgage calculators, and an integrated CRM webhook pipeline.",
    imageUrl: "/projects/project-real-estate.jpg",
    stack: ["React", "Mapbox GL", "Tailwind CSS", "Motion", "Supabase"],
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
    id: "mayi-creative",
    title: "Mayi Creative Hub",
    tagline: "Brand Strategy & Interactive Agency Showcase",
    category: "Landing & Platform",
    year: "2024",
    featured: false,
    description:
      "Editorial agency platform featuring fluid micro-interactions, dark mode aesthetics, dynamic case studies, and fast static generation.",
    longDescription:
      "Mayi Creative is a showcase of cutting-edge web design and smooth typography. Built for a boutique creative agency, it combines frictionless page transitions, responsive video showcases, and a bespoke inquiry funnel.",
    imageUrl: "/projects/mayi.jpg",
    stack: ["Astro", "React", "TypeScript", "Tailwind CSS", "Motion"],
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
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "tarsi-erp",
    title: "Tarsi ERP",
    tagline: "Cloud Inventory & Order Management System",
    category: "Enterprise ERP",
    year: "2024",
    featured: false,
    description:
      "Comprehensive multi-warehouse management solution with barcode scanning, purchase order automation, and ledger reconciliation.",
    longDescription:
      "Tarsi ERP streamlines complex supply chain operations for retail distributors. Designed for rapid data entry with keyboard shortcuts, barcode scanner listener support, and real-time multi-location stock reconciliation.",
    imageUrl: "/projects/tarsi.jpg",
    stack: ["Vue.js", "Laravel", "MySQL", "Redis", "Tailwind CSS", "Docker"],
    features: [
      "Multi-warehouse inventory reconciliation with audit trail",
      "Hardware barcode scanner event capture support",
      "Supplier PO generation with automatic reorder thresholds",
      "Double-entry bookkeeping journal export",
      "Role-based permission matrix for warehouse staff and accountants",
    ],
    metrics: [
      { label: "SKUs Managed", value: "150k+" },
      { label: "Sync Latency", value: "< 20ms" },
      { label: "Time Saved", value: "18h/wk" },
    ],
    liveUrl: "https://example.com",
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
