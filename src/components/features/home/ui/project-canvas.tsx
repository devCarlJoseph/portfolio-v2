import type { StudioProps } from "@/components/features/home/types/studio";
import { StorefrontPreview } from "@/components/features/home/content/store-front-preview";
import { SaasPreview } from "@/components/features/home/content/saas-preview";
import { BusinessPreview } from "@/components/features/home/content/business-preview";

export function ProjectCanvas(props: StudioProps) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 sm:px-5 sm:py-4 space-y-4 text-neutral-900 dark:text-white scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-800">
      <StorefrontPreview {...props} />
      <SaasPreview {...props} />
      <BusinessPreview {...props} />
    </div>
  );
}
