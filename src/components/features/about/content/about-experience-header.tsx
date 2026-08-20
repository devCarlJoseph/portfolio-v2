import { motion } from "motion/react";

export function AboutExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-border/60 pb-5 text-center sm:text-left"
    >
      <div>
        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            Work Experience
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          work experience
        </h2>
      </div>

      <p className="max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground mx-auto sm:mx-0">
        Practical track record of engineering full-stack solutions, scaling
        architectures, and collaborating with global teams.
      </p>
    </motion.div>
  );
}
