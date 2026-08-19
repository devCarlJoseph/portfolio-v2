import type { StudioProps } from "@/components/features/home/types/studio";
import { StudioToolbar } from "@/components/features/home/ui/studio-tool-bar";
import { AppPreview } from "@/components/features/home/content/app-preview";
import { JsonEditor } from "@/components/features/home/content/json-editor";

export function StudioPreview(props: StudioProps) {
  const { activeMode } = props;

  return (
    <div className="lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-end">
      <div className="w-full max-w-lg rounded-xl border border-neutral-200 bg-white shadow-xl shadow-neutral-900/5 dark:border-neutral-800 dark:bg-neutral-950 overflow-hidden transition-all">
        <StudioToolbar {...props} />
        <div className="h-[400px] w-full overflow-hidden flex flex-col justify-between relative">
          {activeMode === "app" ? (
            <AppPreview {...props} />
          ) : (
            <JsonEditor {...props} />
          )}
        </div>
      </div>
    </div>
  );
}
