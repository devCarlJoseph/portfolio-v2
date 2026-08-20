import { motion } from "motion/react";
import { Check, ArrowDown } from "lucide-react";
import type { ProjectScope } from "@/components/features/contact/types/project-scope";

export interface ProjectScopeCardProps {
  scope: ProjectScope;
  index: number;
  onSelect?: (scopeId: string) => void;
}

export function ProjectScopeCard({
  scope,
  index,
  onSelect,
}: ProjectScopeCardProps) {
  const Icon = scope.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelect?.(scope.id)}
      className="group relative flex flex-col justify-between rounded-2xl border border-dashed border-border/90 bg-card p-5 sm:p-6 shadow-2xs transition-all duration-300 hover:border-foreground/40 hover:shadow-md cursor-pointer select-none"
    >
      <div className="space-y-3.5">
        {/* Header: Icon + Scope Badge */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-border/40">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted/40 text-foreground transition-transform group-hover:scale-105">
            <Icon className="h-5 w-5" />
          </div>

          <span className="rounded-full border border-border/80 bg-muted/30 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
            {scope.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground">
          {scope.title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed text-muted-foreground">
          {scope.description}
        </p>
      </div>

      {/* Deliverables Checklist */}
      <div className="mt-5 pt-3.5 border-t border-border/40 space-y-3">
        <ul className="space-y-1.5">
          {scope.deliverables.map((item, dIdx) => (
            <li
              key={dIdx}
              className="flex items-start gap-2 text-xs text-muted-foreground"
            >
              <Check className="h-3.5 w-3.5 text-foreground shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 font-mono text-[11px] font-medium text-foreground pt-1 opacity-0 transition-opacity group-hover:opacity-100">
          <span>Select & inquire</span>
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </div>
      </div>
    </motion.div>
  );
}
