import { useState, useMemo } from "react";
import {
  ALL_TECH_STACK,
  type CategoryFilter,
} from "@/components/features/about/types/tech-stack";
import { AboutTechStackHeader } from "@/components/features/about/content/about-tech-stack-header";
import { AboutTechStackFilters } from "@/components/features/about/ui/about-tech-stack-filters";
import { AboutTechStackGrid } from "@/components/features/about/ui/about-tech-stack-grid";

export function AboutTechStackSectionView() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>("Front End");

  const filteredTech = useMemo(() => {
    return ALL_TECH_STACK.filter((tech) => tech.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="space-y-8 py-10 sm:py-14 border-t border-border/50">
      <AboutTechStackHeader />
      <AboutTechStackFilters
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <AboutTechStackGrid items={filteredTech} />
    </section>
  );
}
