import { motion } from "motion/react";

export function ProjectScopesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-2 border-b border-border/60 pb-5 text-center sm:text-left"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
        Services & Capabilities
      </span>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
        how we can work together
      </h1>
      <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground mx-auto sm:mx-0">
        Whether you need a full product built from scratch, mobile app development, or technical architecture guidance, here are the primary ways I help clients ship.
      </p>
    </motion.div>
  );
}
