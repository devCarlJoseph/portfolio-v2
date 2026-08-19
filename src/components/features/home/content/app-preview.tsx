import type { StudioProps } from "@/components/features/home/types/studio";
import { ProjectSelector } from "@/components/features/home/content/project-selector";
import { ProjectCanvas } from "@/components/features/home/ui/project-canvas";
import { CartDrawer } from "@/components/features/home/content/cart-drawer";

export function AppPreview(props: StudioProps) {
  return (
    <div className="h-full flex flex-col justify-between select-none">
      <ProjectSelector {...props} />
      <ProjectCanvas {...props} />
      <CartDrawer {...props} />
    </div>
  );
}
