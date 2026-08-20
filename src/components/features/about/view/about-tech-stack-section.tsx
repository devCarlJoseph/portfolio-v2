import { useState, useMemo } from "react";
import {
  ALL_TECH_STACK,
  type CategoryFilter,
} from "@/components/features/about/types/tech-stack";
import { AboutTechStackHeader } from "@/components/features/about/content/about-tech-stack-header";
import { AboutTechStackFilters } from "@/components/features/about/ui/about-tech-stack-filters";
import { AboutTechStackGrid } from "@/components/features/about/ui/about-tech-stack-grid";

export function AboutTechStackSectionView() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredTech = useMemo(() => {
    if (activeCategory === "All") return ALL_TECH_STACK;
    return ALL_TECH_STACK.filter((tech) => tech.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="space-y-8">
      <AboutTechStackHeader />
      <AboutTechStackFilters
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      <AboutTechStackGrid items={filteredTech} />
    </section>
  );
}
