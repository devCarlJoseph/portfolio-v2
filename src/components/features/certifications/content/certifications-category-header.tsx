import { motion } from "motion/react";
import type { CertificationCategory } from "@/data/certifications";

export interface CertificationsCategoryHeaderProps {
  category: CertificationCategory;
  index: number;
}

export function CertificationsCategoryHeader({
  category,
  index,
}: CertificationsCategoryHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="space-y-1 text-center sm:text-left"
    >
      <span className="block font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
        {category.label}
      </span>
      <p className="font-mono text-xs text-muted-foreground/80">
        {category.description}
      </p>
    </motion.div>
  );
}
