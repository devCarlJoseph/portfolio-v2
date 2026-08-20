import { Globe, Smartphone, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProjectScope {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
}

export const PROJECT_SCOPES: ProjectScope[] = [
  {
    id: "web-development",
    title: "Full-Stack Web & MVP Builds",
    badge: "From MVP to Scale",
    description:
      "Modern web applications, SaaS dashboards, and e-commerce platforms engineered with React 19, Next.js, and scalable database backends.",
    deliverables: [
      "Custom responsive frontend & UI design",
      "Robust API routes, auth & database schemas",
      "Stripe payment & third-party integrations",
    ],
    icon: Globe,
  },
  {
    id: "mobile-development",
    title: "Cross-Platform Mobile Apps",
    badge: "iOS & Android",
    description:
      "Native-feel mobile apps built with React Native and Expo, featuring fluid animations, offline caching, and seamless device integration.",
    deliverables: [
      "Single codebase for iOS & Android",
      "Push notifications & device APIs",
      "App Store & Google Play release prep",
    ],
    icon: Smartphone,
  },
  {
    id: "tech-audit",
    title: "Architecture & Code Audits",
    badge: "Performance & Quality",
    description:
      "Evaluating existing codebases to eliminate bottlenecks, resolve technical debt, optimize database queries, and harden application security.",
    deliverables: [
      "Full code quality & architecture review",
      "Database query & latency optimization",
      "TypeScript strict safety refactoring",
    ],
    icon: Zap,
  },
];
