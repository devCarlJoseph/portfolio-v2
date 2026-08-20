import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export interface ServiceGuaranteeCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  index: number;
}

export function ServiceGuaranteeCard({
  title,
  desc,
  icon: Icon,
  index,
}: ServiceGuaranteeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col justify-between rounded-xl border border-dashed border-border/90 bg-card p-5 shadow-2xs transition-all hover:border-foreground/40"
    >
      <div className="space-y-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted/40 text-foreground">
          <Icon className="h-4 w-4" />
        </div>

        <h3 className="text-sm sm:text-base font-bold tracking-tight text-foreground">
          {title}
        </h3>

        <p className="text-xs leading-relaxed text-muted-foreground">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
