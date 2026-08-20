import { motion } from "motion/react";

export function CertificationsPageHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-3 border-b border-border/60 pb-6 text-center sm:text-left"
    >
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
        certifications
      </h1>
      <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground mx-auto sm:mx-0">
        Credentials across hackathons, cloud, engineering, and security — each verifiable at its source.
      </p>
    </motion.div>
  );
}
