import { Search, X, LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";
import { PROJECT_CATEGORIES, type ProjectCategory } from "@/data/projects";

export interface ProjectFilterControlsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  categoryCounts: Record<string, number>;
  totalResultsCount: number;
}

export function ProjectFilterControls({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
  categoryCounts,
  totalResultsCount,
}: ProjectFilterControlsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="space-y-4"
    >
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Live Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by title, stack (e.g. Next.js, Stripe, Supabase)..."
            className="w-full rounded-xl border border-border bg-card pl-10 pr-9 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* View Mode & Results Count */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <span className="font-mono text-xs text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{totalResultsCount}</span> projects
          </span>

          <div className="flex items-center rounded-lg border border-border bg-muted/40 p-0.5">
            <button
              type="button"
              onClick={() => onViewModeChange("grid")}
              aria-label="Grid view"
              className={`flex h-7 w-7 items-center justify-center rounded-md transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange("list")}
              aria-label="List view"
              className={`flex h-7 w-7 items-center justify-center rounded-md transition-all cursor-pointer ${
                viewMode === "list"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <List className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <div className="flex items-center gap-1 text-muted-foreground mr-1 shrink-0">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          <span className="font-mono text-xs uppercase font-semibold tracking-wider">
            Category:
          </span>
        </div>

        {PROJECT_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          const count = categoryCounts[cat] ?? 0;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onCategoryChange(cat)}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-foreground text-background shadow-xs"
                  : "border border-border bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              <span>{cat}</span>
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
    </motion.div>
  );
}
