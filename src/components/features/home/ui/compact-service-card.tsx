import { motion } from "motion/react";
import type { ServiceItem } from "@/components/features/home/types/services";

export interface CompactServiceCardProps {
  service: ServiceItem;
  delay?: number;
}

export function CompactServiceCard({
  service,
  delay = 0,
}: CompactServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <div className="group relative flex h-full flex-col justify-between rounded-md border border-dashed border-border/90 bg-card p-4.5 sm:p-5 transition-all duration-300 hover:border-foreground/30 hover:shadow-md hover:shadow-foreground/[0.02]">
        {/* Top: Index + Icon */}
        <div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-semibold text-muted-foreground/60 transition-colors duration-300 group-hover:text-foreground">
              {service.index}
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted/40 transition-all duration-300 group-hover:border-foreground/20 group-hover:bg-foreground group-hover:text-background text-foreground">
              <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="mt-3">
            <h3 className="text-sm sm:text-base font-bold tracking-tight text-foreground">
              {service.title}
            </h3>
            <p className="font-mono text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              {service.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {service.description}
          </p>
        </div>

        {/* Bottom: Tech Tags */}
        <div className="mt-4 pt-3 border-t border-border/60">
          <div className="flex flex-wrap gap-1">
            {service.stack.map((tech: string) => (
              <span
                key={tech}
                className="inline-flex items-center rounded border border-border/70 bg-muted/30 px-1.5 py-0.5 font-mono text-[9.5px] font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
