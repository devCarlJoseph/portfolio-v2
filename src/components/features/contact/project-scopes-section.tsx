import { motion } from "motion/react";
import { Globe, Smartphone, Zap, Check, ArrowDown } from "lucide-react";

export interface ProjectScope {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  icon: typeof Globe;
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

interface ProjectScopesSectionProps {
  onSelectScope?: (scopeId: string) => void;
}

export function ProjectScopesSection({
  onSelectScope,
}: ProjectScopesSectionProps) {
  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-2 border-b border-border/60 pb-5 text-center sm:text-left"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          Services & Capabilities
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          how we can work together
        </h1>
        <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground mx-auto sm:mx-0">
          Whether you need a full product built from scratch, mobile app development, or technical architecture guidance, here are the primary ways I help clients ship.
        </p>
      </motion.div>

      {/* 3 Project Scope Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {PROJECT_SCOPES.map((scope, idx) => {
          const Icon = scope.icon;

          return (
            <motion.div
              key={scope.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.35,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => onSelectScope?.(scope.id)}
              className="group relative flex flex-col justify-between rounded-2xl border border-dashed border-border/90 bg-card p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-foreground/40 hover:shadow-md cursor-pointer select-none"
            >
              <div className="space-y-3.5">
                {/* Header: Icon + Scope Badge */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-border/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted/40 text-foreground transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="rounded-full border border-border/80 bg-muted/30 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {scope.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                  {scope.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {scope.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-5 pt-3.5 border-t border-border/40 space-y-3">
                <ul className="space-y-1.5">
                  {scope.deliverables.map((item, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <Check className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1 font-mono text-[11px] font-medium text-foreground pt-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Select & inquire</span>
                  <ArrowDown className="h-3 w-3 animate-bounce" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
