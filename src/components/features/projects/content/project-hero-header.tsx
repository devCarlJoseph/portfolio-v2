import { motion } from "motion/react";

export function ProjectHeroHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-border/60 pb-6 text-center md:text-left"
    >
      <div>
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            Projects Portfolio
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          featured work & architecture
        </h1>
        <p className="mt-2.5 max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground mx-auto md:mx-0">
          A comprehensive catalog of production web applications, SaaS
          platforms, mobile experiences, and full-stack systems built for
          performance, resilience, and scale.
        </p>
      </div>

      {/* Quick Highlights / Metrics Strip */}
      <div className="flex items-center justify-center gap-3 self-center md:self-auto rounded-xl border border-border/80 bg-card p-2 sm:p-2.5 shadow-sm">
        <div className="px-3 py-1 text-center border-r border-border/60">
          <div className="font-mono text-[10px] uppercase text-muted-foreground font-semibold">
            Shipped
          </div>
          <div className="text-base sm:text-lg font-bold text-foreground">
            7+ Apps
          </div>
        </div>
        <div className="px-3 py-1 text-center border-r border-border/60">
          <div className="font-mono text-[10px] uppercase text-muted-foreground font-semibold">
            Speed
          </div>
          <div className="text-base sm:text-lg font-bold text-foreground">
            99/100
          </div>
        </div>
        <div className="px-3 py-1 text-center">
          <div className="font-mono text-[10px] uppercase text-muted-foreground font-semibold">
            Stack
          </div>
          <div className="text-base sm:text-lg font-bold text-foreground">
            Full-Stack
          </div>
        </div>
      </div>
    </motion.div>
  );
}
