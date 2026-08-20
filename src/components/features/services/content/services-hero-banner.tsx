import { motion } from "motion/react";

export function ServicesHeroBanner() {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-center sm:justify-start gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          Services & Pricing
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        services & pricing
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl text-xs sm:text-sm leading-relaxed text-muted-foreground pt-2"
      >
        Clear, transparent milestone-based pricing for high-impact software
        solutions. Every package includes clean TypeScript source code,
        responsive multi-device design, automated deployment, and dedicated
        post-launch support.
      </motion.p>
    </div>
  );
}
