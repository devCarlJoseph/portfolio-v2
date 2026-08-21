import type { StudioProps } from "@/components/features/home/types/studio";
import { Layers, ShoppingBag, LayoutDashboard, Globe } from "lucide-react";

export function ProjectSelector({
  selectedProjectType,
  setSelectedProjectType,
  setActiveJsonTab,
  setIsCartOpen,
}: StudioProps) {
  return (
    <div className="flex items-center justify-between border-b border-neutral-100 bg-white/95 px-4 py-2.5 backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-950/95 shrink-0 z-10">
      <div className="flex items-center gap-1.5 font-bold text-xs tracking-tight text-neutral-900 dark:text-white">
        <Layers className="h-3.5 w-3.5 text-neutral-400" />
        <span>Category:</span>
      </div>

      {/* Interactive Category Selector */}
      <div className="flex items-center gap-1.5 text-[10px]">
        <button
          type="button"
          onClick={() => {
            setSelectedProjectType("storefront");
            setActiveJsonTab("storefront");
            setIsCartOpen(false);
          }}
          className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-medium transition-all cursor-pointer ${
            selectedProjectType === "storefront"
              ? "bg-neutral-900 text-white shadow-xs dark:bg-white dark:text-neutral-900 font-semibold"
              : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          }`}
        >
          <ShoppingBag className="h-3 w-3" />
          <span>E-Commerce</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedProjectType("saas");
            setActiveJsonTab("saas");
            setIsCartOpen(false);
          }}
          className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-medium transition-all cursor-pointer ${
            selectedProjectType === "saas"
              ? "bg-neutral-900 text-white shadow-xs dark:bg-white dark:text-neutral-900 font-semibold"
              : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          }`}
        >
          <LayoutDashboard className="h-3 w-3" />
          <span>SaaS Platform</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedProjectType("business");
            setActiveJsonTab("business");
            setIsCartOpen(false);
          }}
          className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-medium transition-all cursor-pointer ${
            selectedProjectType === "business"
              ? "bg-neutral-900 text-white shadow-xs dark:bg-white dark:text-neutral-900 font-semibold"
              : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          }`}
        >
          <Globe className="h-3 w-3" />
          <span>Business Site</span>
        </button>
      </div>
    </div>
  );
}
