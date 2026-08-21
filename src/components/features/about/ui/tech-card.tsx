import StackIcon from "tech-stack-icons";
import type { TechItem } from "@/components/features/about/types/tech-stack";
import { useIsDarkMode } from "@/lib/use-theme";

export interface TechCardProps {
  tech: TechItem;
  index: number;
}

export function TechCard({ tech }: TechCardProps) {
  const isDark = useIsDarkMode();
  const iconVariant = tech.variant || (isDark ? "dark" : "light");

  return (
    <div className="group relative flex flex-row items-center gap-3 rounded-2xl border border-dashed border-border/90 bg-card p-4 transition-all duration-200 hover:border-foreground/40 hover:shadow-md dark:hover:shadow-neutral-950/60">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-muted/40 p-2 transition-transform duration-300 group-hover:scale-110 shadow-xs">
        <StackIcon
          name={tech.iconName}
          variant={iconVariant}
          className="h-6 w-6 shrink-0"
        />
      </div>

      <h3 className="text-sm font-bold tracking-tight text-foreground">
        {tech.name}
      </h3>
    </div>
  );
}
