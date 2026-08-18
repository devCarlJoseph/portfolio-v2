import { motion } from "motion/react";
import { Clock } from "lucide-react";

interface CertificationEmptyCardProps {
  categoryLabel: string;
}

export function CertificationEmptyCard({
  categoryLabel,
}: CertificationEmptyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex w-full max-w-[280px] flex-col justify-between rounded-2xl border border-dashed border-border/80 bg-card/40 p-6 shadow-2xs transition-all duration-300 hover:border-foreground/30 hover:bg-card/70 select-none"
    >
      {/* Mini macOS Window Header Dots */}
      <div className="flex items-center justify-between pb-3 border-b border-border/40">
        <div className="flex items-center gap-1.5 opacity-50">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground/70 font-semibold uppercase">
          PENDING
        </span>
      </div>

      {/* Center Content: Icon + Message */}
      <div className="my-6 flex flex-col items-center text-center space-y-3">
        {/* Placeholder Icon Well */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-dashed border-border bg-muted/20 text-muted-foreground/70 shadow-2xs">
          <Clock className="h-6 w-6 text-muted-foreground/70" />
          <div className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-muted-foreground opacity-50" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-muted-foreground/60" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h4 className="text-sm sm:text-base font-bold tracking-tight text-foreground/80">
            No certificates yet
          </h4>
          <p className="font-mono text-[10.5px] text-muted-foreground/80 max-w-[220px] leading-relaxed">
            Actively pursuing accreditations & projects in {categoryLabel.toLowerCase()}.
          </p>
        </div>
      </div>

      {/* Bottom Status Pill */}
      <div className="pt-3 border-t border-border/40 flex items-center justify-center">
        <span className="font-mono text-[11px] text-muted-foreground/70">
          ⟨ IN PROGRESS ⟩
        </span>
      </div>
    </motion.div>
  );
}
