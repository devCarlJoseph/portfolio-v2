import { motion } from "motion/react";
import {
  Trophy,
  Award,
  Calendar,
  Building,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import type { Certification } from "@/data/certifications";

interface CertificationCardProps {
  cert: Certification;
  index: number;
  onSelect: (cert: Certification) => void;
}

export function CertificationCard({
  cert,
  index,
  onSelect,
}: CertificationCardProps) {
  const isHackathon = cert.id === "hackathon-3rd-place";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col justify-between rounded-2xl border border-dashed border-border/90 bg-card p-6 sm:p-8 transition-all duration-300 hover:border-foreground/40 hover:shadow-lg"
    >
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-border/60">
          <div className="flex items-center gap-3">
            {/* Trophy / Emblem Icon Badge */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/30 text-foreground transition-transform group-hover:scale-105">
              {isHackathon ? (
                <Trophy className="h-6 w-6 text-foreground" />
              ) : (
                <Sparkles className="h-6 w-6 text-foreground" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="rounded-full bg-foreground px-2.5 py-0.5 font-mono text-[10.5px] font-bold text-background uppercase tracking-wider">
                  {cert.badge}
                </span>
                <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
                  {cert.category}
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <Building className="h-3 w-3" />
                <span>{cert.issuer}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-lg border border-border/80 bg-muted/30 px-3 py-1 font-mono text-xs font-semibold text-foreground">
            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
            <span>{cert.date}</span>
          </div>
        </div>

        {/* Award Title & Project Focus */}
        <div className="mt-5 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-foreground">
            {cert.title}
          </h2>

          <p className="font-mono text-xs text-muted-foreground flex items-center gap-1">
            <Award className="h-3.5 w-3.5 text-foreground" />
            <span>Event: {cert.event}</span>
          </p>
        </div>

        {/* Summary */}
        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          {cert.summary}
        </p>

        {/* Evaluation Pillars Preview */}
        <div className="mt-6 space-y-2.5">
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
            Key Evaluation Highlights
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {cert.evaluationPillars.map((pillar, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-muted-foreground rounded-lg border border-border/50 bg-muted/20 p-2.5"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-foreground mt-0.5" />
                <span>{pillar}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section: Skills + Interactive Action Button */}
      <div className="mt-8 pt-5 border-t border-border/60 space-y-4">
        {/* Stack Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-mono text-[11px] text-muted-foreground mr-1">
            Verified Stack:
          </span>
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border/70 bg-muted/30 px-2 py-0.5 font-mono text-[11px] font-medium text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Interactive Action Button */}
        <button
          type="button"
          onClick={() => onSelect(cert)}
          className="w-full flex items-center justify-center gap-2 rounded-xl border border-border bg-foreground px-4 py-3 text-xs sm:text-sm font-semibold text-background transition-all hover:opacity-90 active:scale-[0.99] cursor-pointer shadow-xs"
        >
          <span>View Credential & Evaluation Details</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}
