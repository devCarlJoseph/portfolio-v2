import { motion } from "motion/react";

interface ServicesHeroSectionProps {
  currency: "PHP" | "USD";
  onCurrencyChange: (c: "PHP" | "USD") => void;
}

export function ServicesHeroSection({
  currency,
  onCurrencyChange,
}: ServicesHeroSectionProps) {
  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Top Meta & Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-border/60 pb-6 text-center sm:text-left"
      >
        <div className="space-y-1.5">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
              01 — Services & Pricing
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Services & Pricing
          </h1>
        </div>

        {/* Currency Switcher Pill */}
        <div className="flex items-center justify-center sm:justify-end gap-2.5">
          <span className="font-mono text-xs text-muted-foreground font-medium">
            Display Currency:
          </span>
          <div
            className="flex items-center rounded-lg border border-border/80 bg-muted/40 p-0.5"
            role="group"
            aria-label="Select pricing currency"
          >
            <button
              type="button"
              onClick={() => onCurrencyChange("PHP")}
              className={`rounded-md px-3 py-1 font-mono text-xs font-semibold transition-all cursor-pointer ${
                currency === "PHP"
                  ? "bg-foreground text-background shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              PHP (₱)
            </button>
            <button
              type="button"
              onClick={() => onCurrencyChange("USD")}
              className={`rounded-md px-3 py-1 font-mono text-xs font-semibold transition-all cursor-pointer ${
                currency === "USD"
                  ? "bg-foreground text-background shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>
      </motion.div>

      {/* Subtitle & Value Proposition */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl text-xs sm:text-sm leading-relaxed text-muted-foreground"
      >
        Clear, transparent milestone-based pricing for high-impact software solutions. Every package includes clean TypeScript source code, responsive multi-device design, automated deployment, and dedicated post-launch support.
      </motion.p>
    </section>
  );
}
