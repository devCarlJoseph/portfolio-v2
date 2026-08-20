import { SearchX, RotateCcw } from "lucide-react";
import { motion } from "motion/react";

export interface ProjectEmptyStateProps {
  searchQuery: string;
  selectedCategory: string;
  onResetFilters: () => void;
}

export function ProjectEmptyState({
  searchQuery,
  selectedCategory,
  onResetFilters,
}: ProjectEmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 px-6 text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground mb-4">
        <SearchX className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-1">
        No matching projects found
      </h3>
      <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mb-6">
        We couldn't find any projects matching "{searchQuery}" in category "{selectedCategory}".
      </p>
      <button
        type="button"
        onClick={onResetFilters}
        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all hover:bg-muted active:scale-95 shadow-xs cursor-pointer"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        <span>Reset all filters</span>
      </button>
    </motion.div>
  );
}
