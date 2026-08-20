import { motion } from "motion/react";

export function AboutHeroBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border/60 pb-5"
    >
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold  ">
            Profile & Bio
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          about me
        </h1>
      </div>

      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-medium text-foreground self-start sm:self-auto shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span>Available for projects</span>
        <span className="text-muted-foreground">•</span>
        <span className="font-mono text-muted-foreground">Cebu, PH</span>
      </div>
    </motion.div>
  );
}
