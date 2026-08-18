import { useState } from "react";
import { ALL_SERVICES } from "@/data/services";
import { ServicesHeroSection } from "@/components/features/services/services-hero-section";
import { ServicePricingCard } from "@/components/features/services/service-pricing-card";
import { ServicesGuaranteesStrip } from "@/components/features/services/services-guarantees-strip";
import { ServicesFaqSection } from "@/components/features/services/services-faq-section";
import { ServicesCtaBanner } from "@/components/features/services/services-cta-banner";

export default function ServicesPage() {
  const [currency, setCurrency] = useState<"PHP" | "USD">("PHP");

  return (
    <div className="space-y-16 sm:space-y-20 py-4 max-w-6xl mx-auto">
      {/* 01: Hero & Currency Switcher Header */}
      <ServicesHeroSection currency={currency} onCurrencyChange={setCurrency} />

      {/* 02: Service Pricing Packages Grid */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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

      {/* 03: Engineering Commitments & Guarantees */}
      <ServicesGuaranteesStrip />

      {/* 04: Pricing & Engagement FAQs */}
      <ServicesFaqSection />

      {/* 05: Custom Requirements CTA Banner */}
      <ServicesCtaBanner />
    </div>
  );
}
