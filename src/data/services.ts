export interface ServicePackage {
  id: string;
  title: string;
  badge: string;
  popular?: boolean;
  tagline: string;
  description: string;
  pricePhp: string;
  priceUsd: string;
  billingType: string;
  turnaround: string;
  deliverables: string[];
  stack: string[];
  idealFor: string;
}

export const ALL_SERVICES: ServicePackage[] = [
  {
    id: "landing-page",
    title: "High-Converting Landing Page",
    badge: "Speed & Conversion",
    tagline: "Pixel-perfect marketing sites engineered for speed, SEO rank, and turning visitors into paying users.",
    description:
      "A bespoke, responsive single-page or multi-section landing page crafted with modern React/Next.js, fluid animations, OpenGraph social cards, and Google Analytics / Meta Pixel event tracking.",
    pricePhp: "₱35,000",
    priceUsd: "$700",
    billingType: "One-time project",
    turnaround: "1 — 2 weeks",
    deliverables: [
      "Custom responsive design (Figma to Code)",
      "98+ Google Lighthouse Performance & SEO",
      "Interactive micro-animations with Motion",
      "Analytics, conversion tracking & pixel setup",
      "Lead capture forms & email integration",
      "14-day post-launch support & warranty",
    ],
    stack: ["React 19", "Next.js", "Tailwind CSS", "Motion", "Vercel"],
    idealFor: "Founders launching a new product, creators, and marketing campaigns.",
  },
  {
    id: "fullstack-mvp",
    title: "Full-Stack Web App / MVP",
    badge: "Most Popular",
    popular: true,
    tagline: "End-to-end production web applications with authentication, custom dashboards, database, and payments.",
    description:
      "A complete scalable web platform from prototype to production. Includes full backend architecture, PostgreSQL/Supabase database schemas, role-based access control, secure Stripe payments, and admin dashboards.",
    pricePhp: "₱95,000",
    priceUsd: "$1,850",
    billingType: "Milestone-based",
    turnaround: "3 — 5 weeks",
    deliverables: [
      "Complete full-stack architecture & API routes",
      "User authentication & Role-Based Access Control",
      "PostgreSQL / Supabase relational database",
      "Stripe multi-currency checkout & webhook billing",
      "Custom administrator management dashboard",
      "Automated CI/CD deployment & staging environments",
      "30-day post-launch maintenance & bug-free SLA",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma", "Stripe"],
    idealFor: "Early-stage startups, SaaS founders, and businesses digitizing core operations.",
  },
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile App",
    badge: "iOS & Android",
    tagline: "Native-performance mobile apps built with React Native and Expo, ready for App Store & Google Play.",
    description:
      "A single high-performance codebase targeting both iOS and Android. Built with offline-first local data caching, push notification infrastructure, native device camera/location integrations, and seamless user onboarding.",
    pricePhp: "₱120,000",
    priceUsd: "$2,400",
    billingType: "Milestone-based",
    turnaround: "4 — 6 weeks",
    deliverables: [
      "Cross-platform iOS and Android application",
      "Offline-first data caching & sync logic",
      "Push notifications & deep linking setup",
      "Native device hardware integrations (Camera, GPS, Biometrics)",
      "App Store & Google Play submission assistance",
      "30-day post-launch warranty & updates",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Tailwind CSS", "Node.js"],
    idealFor: "Businesses requiring a dedicated mobile presence and direct client engagement.",
  },
  {
    id: "dedicated-retainer",
    title: "Dedicated Engineering Retainer",
    badge: "Fractional / Dedicated",
    tagline: "Continuous full-stack development, feature roadmap execution, and technical architecture leadership.",
    description:
      "Direct fractional engineering access to build continuous features, refactor legacy code, review PRs, maintain uptime, and provide architectural leadership without the overhead of a full-time hire.",
    pricePhp: "₱65,000 / mo",
    priceUsd: "$1,300 / mo",
    billingType: "Monthly retainer",
    turnaround: "Continuous sprints",
    deliverables: [
      "Dedicated weekly engineering hours & sprint commits",
      "Feature development, bug fixes & database tuning",
      "Direct Slack / Discord / async communication",
      "Priority response time (< 12 hrs)",
      "Architecture reviews & technical mentorship",
      "Cancel or pause anytime with 14-day notice",
    ],
    stack: ["Full Tech Stack", "Architecture", "DevOps", "Code Reviews"],
    idealFor: "Growing products with ongoing feature roadmaps and founders needing senior technical bandwidth.",
  },
];

export const SERVICE_FAQS = [
  {
    q: "How does the payment milestone structure work?",
    a: "Projects are typically split into transparent, milestone-based installments (e.g., 40% kickoff deposit, 30% halfway demo review, and 30% upon final launch and IP handover). We accept bank transfers in PHP (BDO, BPI, GCash) and international payments in USD via Stripe or Wire transfer.",
  },
  {
    q: "Do I own 100% of the code and intellectual property?",
    a: "Yes, completely. Upon final milestone completion, full source code ownership, repository access, design assets, and deployment keys are transferred 100% to you with zero vendor lock-in.",
  },
  {
    q: "What happens after the project is launched?",
    a: "All fixed-price projects include a complimentary 14 to 30-day warranty period covering bug fixes and minor adjustments to ensure smooth post-launch operations. For long-term maintenance and new feature rollouts, we can transition to a flexible monthly retainer.",
  },
  {
    q: "Can you sign a Non-Disclosure Agreement (NDA)?",
    a: "Absolutely. I am glad to sign mutual NDAs before reviewing proprietary documents, schemas, or confidential product ideas.",
  },
];
