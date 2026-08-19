import type { StudioProps } from "@/components/features/home/types/studio";
import { Terminal, Check, Copy, RotateCcw } from "lucide-react";

export function JsonEditor({
  activeJsonTab,
  setActiveJsonTab,
  setSelectedProjectType,
  setJsonError,
  handleResetConfig,
  handleCopy,
  copied,
  jsonError,
  getActiveJsonText,
  handleJsonUpdate,
}: StudioProps) {
  return (
    <div className="h-full flex flex-col justify-between font-mono text-xs bg-[#181818] text-neutral-200 select-text overflow-hidden">
      {/* VS Code File Tabs Bar */}
      <div className="flex items-center justify-between bg-[#1f1f1f] border-b border-neutral-800 text-[11px] select-none shrink-0 px-1 pt-1">
        {/* Left: 3 File Tabs */}
        <div className="flex items-center gap-0.5 overflow-x-auto scrollbar-none min-w-0">
          <button
            type="button"
            onClick={() => {
              setActiveJsonTab("storefront");
              setSelectedProjectType("storefront");
              setJsonError(null);
            }}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 text-[9.5px] sm:text-[10px] font-mono transition-all border-t-2 cursor-pointer shrink-0 ${
              activeJsonTab === "storefront"
                ? "bg-[#181818] text-white border-amber-500 font-semibold shadow-xs"
                : "bg-[#1f1f1f] text-neutral-400 border-transparent hover:bg-[#252525] hover:text-neutral-200"
            }`}
          >
            <span className="text-amber-400 font-bold">{"{}"}</span>
            <span>storefront.json</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveJsonTab("saas");
              setSelectedProjectType("saas");
              setJsonError(null);
            }}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 text-[9.5px] sm:text-[10px] font-mono transition-all border-t-2 cursor-pointer shrink-0 ${
              activeJsonTab === "saas"
                ? "bg-[#181818] text-white border-sky-500 font-semibold shadow-xs"
                : "bg-[#1f1f1f] text-neutral-400 border-transparent hover:bg-[#252525] hover:text-neutral-200"
            }`}
          >
            <span className="text-sky-400 font-bold">{"{}"}</span>
            <span>saas.json</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveJsonTab("business");
              setSelectedProjectType("business");
              setJsonError(null);
            }}
            className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 text-[9.5px] sm:text-[10px] font-mono transition-all border-t-2 cursor-pointer shrink-0 ${
              activeJsonTab === "business"
                ? "bg-[#181818] text-white border-emerald-500 font-semibold shadow-xs"
                : "bg-[#1f1f1f] text-neutral-400 border-transparent hover:bg-[#252525] hover:text-neutral-200"
            }`}
          >
            <span className="text-emerald-400 font-bold">{"{}"}</span>
            <span>business.json</span>
          </button>
        </div>

        {/* Right: Reset & Copy Actions */}
        <div className="flex items-center gap-1 pl-3 pr-2 shrink-0">
          <button
            type="button"
            onClick={handleResetConfig}
            className="flex items-center gap-1 rounded bg-[#2a2a2a] px-2 py-0.5 text-[9px] text-neutral-400 hover:bg-[#333333] hover:text-white transition-colors cursor-pointer"
            title="Reset active file"
          >
            <RotateCcw className="h-2.5 w-2.5" />
            <span>Reset</span>
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 rounded bg-[#2a2a2a] px-2 py-0.5 text-[9px] text-neutral-300 hover:bg-[#333333] hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-2.5 w-2.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-2.5 w-2.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error Banner if invalid JSON */}
      {jsonError && (
        <div className="bg-rose-950/80 px-3 py-1 text-[9px] font-mono text-rose-300 border-b border-rose-800 flex items-center justify-between shrink-0">
          <span>⚠ {jsonError}</span>
        </div>
      )}

      {/* VS Code Code Editor Textarea */}
      <div className="flex-1 min-h-0 p-2.5 relative">
        <textarea
          value={getActiveJsonText()}
          onChange={(e) => handleJsonUpdate(e.target.value)}
          spellCheck={false}
          className="h-full w-full rounded-md bg-[#1e1e1e] p-3 font-mono text-[10px] sm:text-[11px] leading-relaxed text-emerald-300 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 border border-neutral-800 resize-none transition-all scrollbar-thin scrollbar-thumb-neutral-700"
          placeholder="Edit configuration JSON..."
        />
      </div>

      {/* VS Code Bottom Status Bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#007acc] text-white text-[9px] font-mono select-none shrink-0">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Terminal className="h-2.5 w-2.5" />
            <span>main*</span>
          </span>
          <span>0 errors</span>
        </div>

        <div className="flex items-center gap-3">
          <span>UTF-8</span>
          <span>JSON</span>
          <span>Spaces: 2</span>
          <span className="hidden sm:inline">Prettier: ✓</span>
        </div>
      </div>
    </div>
  );
}
