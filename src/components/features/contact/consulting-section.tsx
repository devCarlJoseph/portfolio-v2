import { motion } from "motion/react";
import {
  MessageSquare,
  GraduationCap,
  Compass,
  Code2,
  Check,
  ArrowDown,
} from "lucide-react";

export interface ConsultingTier {
  id: string;
  title: string;
  priceTag: string;
  description: string;
  features: string[];
  icon: typeof MessageSquare;
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

interface ConsultingSectionProps {
  onSelectTier?: (tierId: string) => void;
}

export function ConsultingSection({ onSelectTier }: ConsultingSectionProps) {
  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-2 border-b border-border/60 pb-5 text-center sm:text-left"
      >
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          consulting
        </h1>
        <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground mx-auto sm:mx-0">
          I help founders and teams ship with AI and great software — through hands-on training, technical leadership, and building the thing itself. Here's how we can work together.
        </p>
      </motion.div>

      {/* 2x2 Compact Consulting Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {CONSULTING_OFFERINGS.map((tier, idx) => {
          const WatermarkIcon = tier.icon;

          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.35,
                delay: idx * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => onSelectTier?.(tier.id)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-dashed border-border/90 bg-card p-5 shadow-2xs transition-all duration-300 hover:border-foreground/40 hover:shadow-md cursor-pointer select-none"
            >
              {/* Subtle Corner Watermark Icon */}
              <div
                className="pointer-events-none absolute -bottom-4 -right-4 text-foreground/[0.03] transition-transform duration-300 ease-out group-hover:scale-105 group-hover:text-foreground/[0.06] dark:text-foreground/[0.04] dark:group-hover:text-foreground/[0.08]"
                aria-hidden="true"
              >
                <WatermarkIcon className="h-28 w-28" strokeWidth={1.2} />
              </div>

              {/* Card Header: Title + Price Pill */}
              <div className="relative z-10 space-y-2.5">
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-border/40">
                  <h2 className="text-base font-bold tracking-tight text-foreground">
                    {tier.title}
                  </h2>

                  <span className="shrink-0 rounded-full border border-border/80 bg-muted/40 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-foreground shadow-2xs">
                    {tier.priceTag}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-muted-foreground pr-8">
                  {tier.description}
                </p>
              </div>

              {/* Checklist & Action */}
              <div className="relative z-10 mt-4 pt-3 border-t border-border/40 space-y-2.5">
                <ul className="space-y-1.5">
                  {tier.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <Check className="h-3 w-3 text-foreground shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1.5 font-mono text-[10.5px] font-medium text-foreground pt-1 opacity-0 transition-opacity group-hover:opacity-100">
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
