import {
  FAQ_CATEGORIES,
  FAQS,
  type FaqCategory,
} from "@/components/features/home/types/faq";

export interface CategoryFilterCardProps {
  selectedCategory: FaqCategory;
  onSelectCategory: (category: FaqCategory) => void;
}

export function CategoryFilterCard({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterCardProps) {
  return (
    <div className="rounded-xl border border-border/80 bg-card p-3.5 space-y-1 shadow-sm">
      <span className="block px-2 py-1 font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground/70 font-semibold">
        Filter by Topic
      </span>
      <div className="flex flex-col gap-1">
        {FAQ_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-foreground text-background font-semibold"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <span>{cat.label}</span>
            <span className="font-mono text-[10px] opacity-70">
              {cat.id === "all"
                ? FAQS.length
                : FAQS.filter((f) => f.category === cat.id).length}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
