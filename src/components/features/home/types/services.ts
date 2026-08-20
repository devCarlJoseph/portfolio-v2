import {
  Smartphone,
  Globe,
  FileText,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  stack: string[];
  deliverables: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "mobile-apps",
    index: "01",
    title: "Mobile Apps",
    subtitle: "iOS & Android",
    description:
      "Native and cross-platform mobile apps with fluid animations, offline caching, and App Store readiness.",
    icon: Smartphone,
    stack: ["React Native", "Expo", "SwiftUI", "Firebase"],
    deliverables: ["App Store Deploy", "Push Notifications", "Offline-First"],
  },
  {
    id: "web-apps",
    index: "02",
    title: "Web Apps",
    subtitle: "Full-Stack Platforms",
    description:
      "Scalable web applications with real-time synchronization, role-based auth, and custom dashboards.",
    icon: Globe,
    stack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    deliverables: ["Role-Based Auth", "API Architecture", "Cloud Deploy"],
  },
  {
    id: "landing-page",
    index: "03",
    title: "Landing Pages",
    subtitle: "High-Converting",
    description:
      "Pixel-perfect landing pages engineered for speed, SEO rank, and turning visitors into customers.",
    icon: FileText,
    stack: ["React", "Tailwind CSS", "Motion", "Vercel"],
    deliverables: ["Responsive UI", "SEO & OpenGraph", "Analytics Setup"],
  },
  {
    id: "ad-websites",
    index: "04",
    title: "Ad Websites",
    subtitle: "Campaign & Funnels",
    description:
      "Purpose-built campaign funnels with precise event tracking, A/B variants, and speed optimization.",
    icon: Megaphone,
    stack: ["HTML/CSS", "JavaScript", "GTM", "Meta Pixel"],
    deliverables: ["A/B Testing", "Pixel Tracking", "Speed Optimization"],
  },
];
