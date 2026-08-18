import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import type { ServicePackage } from "@/data/services";

interface ServicePricingCardProps {
  service: ServicePackage;
  currency: "PHP" | "USD";
  index: number;
}

export function ServicePricingCard({
  service,
  currency,
  index,
}: ServicePricingCardProps) {
  const displayPrice = currency === "PHP" ? service.pricePhp : service.priceUsd;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.35,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative flex flex-col justify-between rounded-2xl border border-dashed transition-all duration-300 shadow-2xs hover:shadow-xl overflow-hidden ${
        service.popular
          ? "border-foreground/80 bg-card"
          : "border-border/90 bg-card hover:border-foreground/40"
      }`}
    >
      {/* ── Mini macOS Window Title Bar ── */}
      <div className="flex h-10 items-center justify-between border-b border-border/40 bg-muted/30 px-4 select-none">
        {/* macOS Dots */}
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        </div>

        {/* Center Filename Tag */}
        <span className="font-mono text-[10.5px] text-muted-foreground truncate max-w-[170px] sm:max-w-[210px]">
          services.dev/{service.id}.pkg
        </span>

        {/* Popular / Turnaround Badge */}
        {service.popular ? (
          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-foreground uppercase">
            <Sparkles className="h-2.5 w-2.5" />
            <span>POPULAR</span>
          </span>
        ) : (
          <span className="font-mono text-[10px] text-muted-foreground">
            {service.turnaround}
          </span>
        )}
      </div>

      {/* ── Card Body (Compact & Scannable) ── */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Title & Badge */}
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold tracking-tight text-foreground">
              {service.title}
            </h3>
            <span className="shrink-0 rounded-full border border-border/80 bg-muted/40 px-2.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
              {service.badge}
            </span>
          </div>

          <p className="text-xs leading-relaxed text-muted-foreground">
            {service.tagline}
          </p>
        </div>

        {/* Price Strip */}
        <div className="py-2.5 px-3.5 rounded-xl border border-border/50 bg-muted/20 flex items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground font-sans">
              {displayPrice}
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              / {service.billingType}
            </span>
          </div>

          <span className="font-mono text-[10.5px] text-muted-foreground shrink-0">
            {service.turnaround}
          </span>
        </div>

        {/* Deliverables (Curated Top 4 for Quick Scanning) */}
        <div className="space-y-1.5 pt-1">
          <ul className="space-y-1.5">
            {service.deliverables.slice(0, 4).map((item, dIdx) => (
              <li
                key={dIdx}
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <Check className="h-3 w-3 text-foreground shrink-0" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Footer: Stack + Select CTA ── */}
      <div className="p-5 sm:p-6 pt-0 space-y-3">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1 pt-2 border-t border-border/40">
          {service.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/60 bg-muted/20 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {service.stack.length > 4 && (
            <span className="font-mono text-[10px] text-muted-foreground/70">
              +{service.stack.length - 4}
            </span>
          )}
        </div>

        {/* Action Button */}
        <NavLink
          to={`/contact?service=${service.id}`}
          className={`w-full flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all cursor-pointer shadow-xs active:scale-[0.99] ${
            service.popular
              ? "bg-foreground text-background hover:opacity-90"
              : "border border-border bg-card text-foreground hover:bg-muted"
          }`}
        >
          <span>Select Package</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </NavLink>
      </div>
    </motion.div>
  );
}
