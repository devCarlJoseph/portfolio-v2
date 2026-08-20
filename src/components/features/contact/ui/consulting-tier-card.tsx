import { motion } from "motion/react";
import { Check, ArrowDown } from "lucide-react";
import type { ConsultingTier } from "@/components/features/contact/types/consulting";

export interface ConsultingTierCardProps {
  tier: ConsultingTier;
  index: number;
  onSelectTier?: (tierId: string) => void;
}

export function ConsultingTierCard({
  tier,
  index,
  onSelectTier,
}: ConsultingTierCardProps) {
  const WatermarkIcon = tier.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelectTier?.(tier.id)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-dashed border-border/90 bg-card p-5 shadow-2xs transition-all duration-300 hover:border-foreground/40 hover:shadow-md cursor-pointer select-none"
    >
      {/* Subtle Corner Watermark Icon */}
      <div
        className="pointer-events-none absolute -bottom-4 -right-4 text-foreground/[0.03] transition-transform duration-300 ease-out group-hover:scale-105 group-hover:text-foreground/[0.06] dark:text-foreground/[0.04] dark:group-hover:text-foreground/[0.08]"
        aria-hidden="true"
      >
        <WatermarkIcon className="h-28 w-28" strokeWidth={1.2} />
      </div>

      {/* Card Header: Title + Price Pill */}
      <div className="relative z-10 space-y-2.5">
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-border/40">
          <h2 className="text-base font-bold tracking-tight text-foreground">
            {tier.title}
          </h2>

          <span className="shrink-0 rounded-full border border-border/80 bg-muted/40 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-foreground shadow-2xs">
            {tier.priceTag}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed text-muted-foreground pr-8">
          {tier.description}
        </p>
      </div>

      {/* Checklist & Action */}
      <div className="relative z-10 mt-4 pt-3 border-t border-border/40 space-y-2.5">
        <ul className="space-y-1.5">
          {tier.features.map((feature, fIdx) => (
            <li
              key={fIdx}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <Check className="h-3 w-3 text-foreground shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 font-mono text-[10.5px] font-medium text-foreground pt-1 opacity-0 transition-opacity group-hover:opacity-100">
          <span>Select & inquire</span>
          <ArrowDown className="h-3 w-3 animate-bounce" />
        </div>
      </div>
    </motion.div>
  );
}
