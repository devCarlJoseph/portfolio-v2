import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export interface WorkflowStepCardProps {
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  index: number;
}

export function WorkflowStepCard({
  step,
  title,
  desc,
  icon: Icon,
  index,
}: WorkflowStepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.35,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col justify-between rounded-xl border border-dashed border-border/90 bg-card p-4 sm:p-5 shadow-2xs transition-all hover:border-foreground/30"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">
            {step}
          </span>
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-muted/30 text-foreground">
            <Icon className="h-3.5 w-3.5" />
          </div>
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
