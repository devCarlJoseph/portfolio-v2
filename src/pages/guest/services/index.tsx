import { useState } from "react";
import { ServicesPricingSectionView } from "@/components/features/services/view/services-pricing-section-view";
import { ServicesGuaranteesSectionView } from "@/components/features/services/view/services-guarantees-section-view";
import { ServicesFaqSectionView } from "@/components/features/services/view/services-faq-section-view";
import { ServicesCtaSectionView } from "@/components/features/services/view/services-cta-section-view";

export default function ServicesPage() {
  const [currency, setCurrency] = useState<"PHP" | "USD">("PHP");

  return (
    <div className="space-y-16 sm:space-y-20 py-4 max-w-6xl mx-auto">
      {/* 01: Hero & Pricing Packages */}
      <ServicesPricingSectionView
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* 02: Engineering Commitments & Guarantees */}
      <ServicesGuaranteesSectionView />

      {/* 03: Pricing & Engagement FAQs */}
      <ServicesFaqSectionView />

      {/* 04: Custom Requirements CTA Banner */}
      <ServicesCtaSectionView />
    </div>
  );
}
