import { motion } from "motion/react";
import type { TechItem } from "@/components/features/about/types/tech-stack";
import { TechCard } from "./tech-card";

export interface AboutTechStackGridProps {
  items: TechItem[];
}

export function AboutTechStackGrid({ items }: AboutTechStackGridProps) {
  return (
    <motion.div
      key={items.map((i) => i.name).join(",")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
    >
      {items.map((tech, idx) => (
        <TechCard key={tech.name} tech={tech} index={idx} />
      ))}
    </motion.div>
  );
}
