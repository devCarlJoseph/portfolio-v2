import { motion } from "motion/react";

export function CollaborationWorkflowHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-2 border-b border-border/60 pb-5 text-center sm:text-left"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
        Collaboration Workflow
      </span>
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
        how the process works
      </h2>
      <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground mx-auto sm:mx-0">
        A predictable, transparent engineering workflow designed to minimize friction and deliver reliable software.
      </p>
    </motion.div>
  );
}
