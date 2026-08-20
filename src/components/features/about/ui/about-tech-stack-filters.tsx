import {
  CATEGORIES,
  ALL_TECH_STACK,
  type CategoryFilter,
} from "@/components/features/about/types/tech-stack";

export interface AboutTechStackFiltersProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
}

export function AboutTechStackFilters({
  activeCategory,
  onSelectCategory,
}: AboutTechStackFiltersProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;
        const count =
          cat.id === "All"
            ? ALL_TECH_STACK.length
            : ALL_TECH_STACK.filter((t) => t.category === cat.id).length;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              isActive
                ? "bg-foreground text-background shadow-xs"
                : "border border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{cat.label}</span>
            <span
              className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] ${
                isActive
                  ? "bg-background/20 text-background"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
