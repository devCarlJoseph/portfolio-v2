import { motion } from "motion/react";
import { ALL_SERVICES } from "@/data/services";
import { ServicesHeroBanner } from "@/components/features/services/content/services-hero-banner";
import { ServicesCurrencyToggle } from "@/components/features/services/content/services-currency-toggle";
import { ServicePricingCard } from "@/components/features/services/ui/service-pricing-card";

export interface ServicesPricingSectionViewProps {
  currency: "PHP" | "USD";
  onCurrencyChange: (currency: "PHP" | "USD") => void;
}

export function ServicesPricingSectionView({
  currency,
  onCurrencyChange,
}: ServicesPricingSectionViewProps) {
  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Top Section Header & Currency Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-border/60 pb-6 text-center sm:text-left"
      >
        <ServicesHeroBanner />
        <ServicesCurrencyToggle
          currency={currency}
          onCurrencyChange={onCurrencyChange}
        />
      </motion.div>

      {/* Pricing Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
        {ALL_SERVICES.map((service, idx) => (
          <ServicePricingCard
            key={service.id}
            service={service}
            currency={currency}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}

// Re-export with alias for compatibility
export { ServicesPricingSectionView as ServicesHeroSection };
