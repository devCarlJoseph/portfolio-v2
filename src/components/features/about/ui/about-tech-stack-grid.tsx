import { AnimatePresence } from "motion/react";
import type { TechItem } from "@/components/features/about/types/tech-stack";
import { TechCard } from "./tech-card";

export interface AboutTechStackGridProps {
  items: TechItem[];
}

export function AboutTechStackGrid({ items }: AboutTechStackGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
      <AnimatePresence mode="popLayout">
        {items.map((tech, idx) => (
          <TechCard key={tech.name} tech={tech} index={idx} />
        ))}
      </AnimatePresence>
    </div>
  );
}
