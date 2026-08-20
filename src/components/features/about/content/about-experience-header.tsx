import { motion } from "motion/react";

export function AboutExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border/60 pb-5"
    >
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
            02 — Work Experience
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
          Work Experience
        </h2>
      </div>

      <p className="max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
        Practical track record of engineering full-stack solutions, scaling
        architectures, and collaborating with global teams.
      </p>
    </motion.div>
  );
}
