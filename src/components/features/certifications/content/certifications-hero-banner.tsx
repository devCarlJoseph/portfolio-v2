import { motion } from "motion/react";
import { Trophy, Award, Code2, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface HeroStat {
  label: string;
  value: string;
  desc: string;
  icon: LucideIcon;
}

const HERO_STATS: HeroStat[] = [
  {
    label: "Honors & Distinctions",
    value: "2 Awards",
    desc: "Hackathon & Tech Implementation",
    icon: Trophy,
  },
  {
    label: "Competitive Track",
    value: "Top 3 Podium",
    desc: "Mini Hackathon • IT Days",
    icon: Award,
  },
  {
    label: "Special Distinction",
    value: "Best in Tech",
    desc: "Clean Code & Architecture",
    icon: Code2,
  },
  {
    label: "Verification Status",
    value: "Verified",
    desc: "Academic & Panel Evaluated",
    icon: Sparkles,
  },
];

export function CertificationsHeroBanner() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-border/60 pb-6"
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
              01 — Honors & Recognition
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Certifications & Awards
          </h1>
        </div>

        <p className="max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
          Recognitions achieved through competitive software sprints, high-pressure hackathons, and technical design excellence.
        </p>
      </motion.div>

      {/* Metric Stats Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        {HERO_STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-dashed border-border/90 bg-card p-4 sm:p-5 shadow-xs transition-all hover:border-foreground/30"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                  {stat.label}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/40 text-foreground">
                  <Icon className="h-4 w-4" />
                </div>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
                  {stat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
