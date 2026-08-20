import { motion } from "motion/react";

export function ConsultingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-2 border-b border-border/60 pb-5 text-center sm:text-left"
    >
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
        consulting
      </h1>
      <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground mx-auto sm:mx-0">
        I help founders and teams ship with AI and great software — through hands-on training, technical leadership, and building the thing itself. Here's how we can work together.
      </p>
    </motion.div>
  );
}
