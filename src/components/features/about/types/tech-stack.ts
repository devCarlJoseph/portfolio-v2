import type { IconName } from "tech-stack-icons";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Cpu,
  Layers,
} from "lucide-react";

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Databases" | "Mobile" | "DevOps & Tools";
  level: "Expert" | "Advanced" | "Proficient";
  iconName: IconName;
  description: string;
  highlight?: boolean;
}

export const CATEGORIES = [
  { id: "All", label: "All Tech", icon: Layers },
  { id: "Frontend", label: "Frontend", icon: Code2 },
  { id: "Backend", label: "Backend & APIs", icon: Server },
  { id: "Databases", label: "Databases & Cloud", icon: Database },
  { id: "Mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "DevOps & Tools", label: "DevOps & Tools", icon: Cpu },
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number]["id"];

export const ALL_TECH_STACK: TechItem[] = [
  // Frontend
  {
    name: "React 19",
    category: "Frontend",
    level: "Expert",
    iconName: "react",
    description:
      "Component architecture, custom hooks, Server Actions, concurrent rendering.",
    highlight: true,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Advanced",
    iconName: "nextjs2",
    description:
      "App Router, SSR, SSG, Edge middleware, image & font optimization.",
    highlight: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Advanced",
    iconName: "typescript",
    description:
      "Strict typing, generics, schema inference with Zod, end-to-end safety.",
    highlight: true,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Expert",
    iconName: "tailwindcss",
    description:
      "Modern utility styling, design token systems, dark/light themes.",
    highlight: true,
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Expert",
    iconName: "js",
    description:
      "Modern asynchronous workflows, event loop, DOM APIs, functional methods.",
  },
  {
    name: "Vue.js",
    category: "Frontend",
    level: "Proficient",
    iconName: "vuejs",
    description:
      "Composition API, reactive stores, modular single-file components.",
  },
  {
    name: "Astro",
    category: "Frontend",
    level: "Proficient",
    iconName: "astro",
    description:
      "Content collections, zero-JS island hydration, markdown architecture.",
  },

  // Backend & APIs
  {
    name: "Node.js",
    category: "Backend",
    level: "Advanced",
    iconName: "nodejs",
    description:
      "High-concurrency backend services, streaming IO, runtime worker processes.",
    highlight: true,
  },
  {
    name: "Laravel",
    category: "Backend",
    level: "Advanced",
    iconName: "laravel",
    description:
      "Robust PHP framework, Eloquent ORM, queue workers, MVC architecture.",
    highlight: true,
  },
  {
    name: "Python",
    category: "Backend",
    level: "Proficient",
    iconName: "python",
    description:
      "Automation scripting, LLM integration, data extraction, fast prototyping.",
  },
  {
    name: "GraphQL",
    category: "Backend",
    level: "Proficient",
    iconName: "graphql",
    description:
      "Declarative schema modeling, resolvers, query batching & mutations.",
  },
  {
    name: "Stripe APIs",
    category: "Backend",
    level: "Advanced",
    iconName: "stripe",
    description:
      "Elements checkout, customer portal, webhook fulfillment, subscriptions.",
    highlight: true,
  },

  // Databases & Storage
  {
    name: "PostgreSQL",
    category: "Databases",
    level: "Advanced",
    iconName: "postgresql",
    description:
      "ACID compliance, complex relational modeling, indexes, JSONB queries.",
    highlight: true,
  },
  {
    name: "Supabase",
    category: "Databases",
    level: "Advanced",
    iconName: "supabase",
    description:
      "Postgres database, Row Level Security (RLS), auth tokens, live sync.",
    highlight: true,
  },
  {
    name: "Prisma ORM",
    category: "Databases",
    level: "Advanced",
    iconName: "prisma",
    description:
      "Type-safe database client, schema migrations, relational joins.",
  },
  {
    name: "Redis",
    category: "Databases",
    level: "Proficient",
    iconName: "redis",
    description:
      "In-memory caching, rate limit counters, session stores, low-latency queues.",
  },
  {
    name: "MongoDB",
    category: "Databases",
    level: "Proficient",
    iconName: "mongodb",
    description:
      "Document storage, aggregation pipelines, flexible unstructured schemas.",
  },

  // Mobile
  {
    name: "React Native",
    category: "Mobile",
    level: "Advanced",
    iconName: "reactnative",
    description:
      "Cross-platform mobile apps for iOS and Android with native performance.",
    highlight: true,
  },
  {
    name: "Expo & EAS",
    category: "Mobile",
    level: "Advanced",
    iconName: "expo",
    description:
      "Managed workflows, OTA updates, custom development clients, EAS builds.",
  },

  // DevOps & Tools
  {
    name: "Docker",
    category: "DevOps & Tools",
    level: "Proficient",
    iconName: "docker",
    description:
      "Containerized environments, multi-stage builds, Docker Compose networks.",
  },
  {
    name: "Git & GitHub",
    category: "DevOps & Tools",
    level: "Advanced",
    iconName: "git",
    description:
      "Branching strategies, pull request reviews, CI/CD automated actions.",
    highlight: true,
  },
  {
    name: "Vite",
    category: "DevOps & Tools",
    level: "Advanced",
    iconName: "vitejs",
    description:
      "Lightning-fast HMR, Rollup bundling, plugin ecosystem integration.",
  },
  {
    name: "Vercel",
    category: "DevOps & Tools",
    level: "Advanced",
    iconName: "vercel",
    description:
      "Edge networks, serverless functions, automatic preview deployments.",
  },
  {
    name: "Figma",
    category: "DevOps & Tools",
    level: "Expert",
    iconName: "figma",
    description:
      "UI/UX component systems, token extraction, pixel-perfect translation.",
  },
];
