import { Terminal, LayoutTemplate, Globe2 } from "lucide-react";
import type { StudioProps } from "@/components/features/home/types/studio";

export function StudioToolbar({
  activeMode,
  setActiveMode,
  getAddressUrl,
}: StudioProps) {
  return (
    <div className="flex h-11 items-center justify-between border-b border-neutral-200/80 bg-neutral-100/70 px-3.5 py-2 dark:border-neutral-800 dark:bg-neutral-900/80 select-none">
      <div className="flex items-center space-x-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block shadow-2xs" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block shadow-2xs" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block shadow-2xs" />
      </div>
      <div className="mx-2 flex max-w-[210px] sm:max-w-[240px] flex-1 items-center justify-center gap-1.5 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-mono text-neutral-600 dark:bg-neutral-800/90 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50 shadow-2xs">
        <Globe2 className="h-3 w-3 text-neutral-400 shrink-0" />
        <span className="truncate">{getAddressUrl()}</span>
      </div>
      <div className="flex items-center rounded-md bg-neutral-200/60 p-0.5 text-[10px] font-medium dark:bg-neutral-800">
        <button
          type="button"
          onClick={() => setActiveMode("app")}
          className={`flex items-center gap-1 rounded px-2.5 py-1 transition-all cursor-pointer ${activeMode === "app" ? "bg-white text-neutral-900 shadow-2xs dark:bg-neutral-700 dark:text-white" : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"}`}
        >
          <LayoutTemplate className="h-3 w-3" />
          <span>App</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveMode("json")}
          className={`flex items-center gap-1 rounded px-2.5 py-1 transition-all cursor-pointer ${activeMode === "json" ? "bg-white text-neutral-900 shadow-2xs dark:bg-neutral-700 dark:text-white" : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"}`}
        >
          <Terminal className="h-3 w-3" />
          <span>JSON</span>
        </button>
      </div>
    </div>
  );
}
