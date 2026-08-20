import { motion } from "motion/react";
import { Trophy, Code2, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";
import type { Certification } from "@/data/certifications";

export interface CertificationBadgeCardProps {
  cert: Certification;
  index: number;
  onSelect: (cert: Certification) => void;
}

export function CertificationBadgeCard({
  cert,
  index,
  onSelect,
}: CertificationBadgeCardProps) {
  const isHackathon = cert.id === "hackathon-3rd-place";
  const defaultRotation = index % 2 === 0 ? -1.2 : 1.2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: defaultRotation }}
      whileInView={{ opacity: 1, y: 0, rotate: defaultRotation }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{
        rotate: 0,
        y: -6,
        transition: { type: "spring", stiffness: 350, damping: 22 },
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelect(cert)}
      className="group relative flex flex-col justify-between rounded-2xl border border-dashed border-border/90 bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-foreground/40 hover:shadow-xl cursor-pointer select-none"
    >
      {/* Top Header Row: Track code & Verified Stamp */}
      <div className="flex items-center justify-between pb-4 border-b border-border/50">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          {cert.trackCode}
        </span>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/30 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
          <ShieldCheck className="h-3 w-3 text-emerald-500" />
          <span>{cert.credentialId}</span>
        </div>
      </div>

      {/* Center Credential Badge Body */}
      <div className="my-6 flex flex-col items-center text-center space-y-4">
        {/* Emblem Housing */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-muted/40 text-foreground shadow-inner transition-transform group-hover:scale-110">
          {isHackathon ? (
            <Trophy className="h-7 w-7 text-foreground" />
          ) : (
            <Code2 className="h-7 w-7 text-foreground" />
          )}

          {/* Ambient Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-foreground/5 opacity-0 blur group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Title & Issuer Monogram */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-tight">
            {cert.title}
          </h3>
          <p className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            {cert.issuerShort}
          </p>
        </div>

        {/* Concise Summary */}
        <p className="text-xs leading-relaxed text-muted-foreground max-w-sm">
          {cert.summary}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap justify-center gap-1.5 pt-1">
          {cert.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border/60 bg-muted/20 px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground"
            >
              {skill}
            </span>
          ))}
          {cert.skills.length > 4 && (
            <span className="rounded-md border border-dashed border-border/70 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              +{cert.skills.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Action Footer with < VERIFY > Style */}
      <div className="pt-4 border-t border-border/50 flex items-center justify-between">
        <span className="font-mono text-[11px] text-muted-foreground flex items-center gap-1">
          <Sparkles className="h-3 w-3 text-muted-foreground" />
          <span>{cert.date}</span>
        </span>

        <div className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-foreground group-hover:underline">
          <span className="text-muted-foreground">⟨</span>
          <span className="tracking-wider">VERIFY CREDENTIAL</span>
          <span className="text-muted-foreground">⟩</span>
          <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
}
