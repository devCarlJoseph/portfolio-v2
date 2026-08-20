import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import type { TechItem } from "@/components/features/about/types/tech-stack";

export interface TechCardProps {
  tech: TechItem;
  index: number;
}

export function TechCard({ tech, index }: TechCardProps) {
  const Icon = tech.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.3,
        delay: (index % 4) * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col justify-between rounded-2xl border border-dashed border-border/90 bg-card p-5 transition-all duration-300 hover:border-foreground/40 hover:shadow-md dark:hover:shadow-neutral-950/60"
    >
      <div>
        {/* Card Header with Logo Icon & Level Badge */}
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/80 bg-muted/40 p-2.5 transition-transform duration-300 group-hover:scale-110 shadow-xs">
            <Icon size={28} className="shrink-0" />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="rounded-full bg-muted/60 px-2 py-0.5 font-mono text-[10px] font-semibold text-foreground">
              {tech.level}
            </span>
            {tech.highlight && (
              <span className="flex items-center gap-1 font-mono text-[9.5px] text-muted-foreground font-semibold">
                <Sparkles className="h-2.5 w-2.5 text-foreground" />
                Core
              </span>
            )}
          </div>
        </div>

        {/* Title & Category */}
        <div className="mb-2">
          <h3 className="text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground">
            {tech.name}
          </h3>
          <span className="font-mono text-[10.5px] text-muted-foreground">
            {tech.category}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed">
          {tech.description}
        </p>
      </div>
    </motion.div>
  );
}
