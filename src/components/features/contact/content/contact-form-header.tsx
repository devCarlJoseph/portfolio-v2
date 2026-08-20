import { motion } from "motion/react";

export function ContactFormHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border/60 pb-5 text-center sm:text-left"
    >
      <div className="space-y-1">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          Direct Inquiries
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          get in touch
        </h2>
      </div>

      {/* Live Availability Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-medium text-foreground self-center sm:self-auto shadow-2xs">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span>Available for new client projects</span>
      </div>
    </motion.div>
  );
}
