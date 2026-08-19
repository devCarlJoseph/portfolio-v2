import {
  Smartphone,
  Globe,
  FileText,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { CompactServiceCard } from "@/components/features/home/ui/compact-service-card";

interface ServiceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  stack: string[];
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
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

export function ServicesSection() {
  return (
    <section className="py-10 sm:py-14 md:py-16 border-t border-border/50">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
              01 — Services
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
            Services & Expertise
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
          End-to-end engineering tailored for founders and businesses who need
          reliable, production-ready software.
        </p>
      </motion.div>

      {/* Small Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {SERVICES.map((service, i) => (
          <CompactServiceCard
            key={service.id}
            service={service}
            delay={i * 0.06}
          />
        ))}
      </div>
    </section>
  );
}
