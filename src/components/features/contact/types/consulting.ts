import { MessageSquare, GraduationCap, Compass, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ConsultingTier {
  id: string;
  title: string;
  priceTag: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export const CONSULTING_OFFERINGS: ConsultingTier[] = [
  {
    id: "coaching",
    title: "Private Coaching",
    priceTag: "from ₱10k/hr",
    description:
      "1:1 mentoring and guidance — career, code, AI, and building products, tailored to where you are.",
    features: [
      "1:1 sessions",
      "Career & technical roadmap",
      "Flexible scheduling",
    ],
    icon: MessageSquare,
  },
  {
    id: "training",
    title: "AI & Software Trainings",
    priceTag: "₱20k/hr",
    description:
      "Hands-on, practical workshops for teams — generative AI, modern web & mobile, and shipping faster with AI-native tooling.",
    features: [
      "Team workshops",
      "Custom curriculum",
      "On-site or remote",
    ],
    icon: GraduationCap,
  },
  {
    id: "fractional-cto",
    title: "Fractional CTO",
    priceTag: "Custom",
    description:
      "Technical leadership without a full-time hire — architecture, roadmap, hiring, and hands-on execution for founders and teams.",
    features: [
      "Architecture & tech audits",
      "Roadmap & technical strategy",
      "Hiring & team mentorship",
    ],
    icon: Compass,
  },
  {
    id: "development",
    title: "Software Development",
    priceTag: "Custom",
    description:
      "End-to-end product builds — web apps, mobile apps, and AI products, from prototype to production.",
    features: [
      "Full-stack web & mobile apps",
      "MVP sprints to scale",
      "Post-launch SLA & support",
    ],
    icon: Code2,
  },
];
