import { useState } from "react";
import { ServicesPricingSectionView } from "@/components/features/services/view/services-pricing-section-view";
import { ServicesGuaranteesSectionView } from "@/components/features/services/view/services-guarantees-section-view";
import { ServicesFaqSectionView } from "@/components/features/services/view/services-faq-section-view";
import { ServicesCtaSectionView } from "@/components/features/services/view/services-cta-section-view";

export default function ServicesPage() {
  const [currency, setCurrency] = useState<"PHP" | "USD">("PHP");

  return (
    <>
      <ServicesPricingSectionView
        currency={currency}
        onCurrencyChange={setCurrency}
      />
      <ServicesGuaranteesSectionView />
      <ServicesFaqSectionView />
      <ServicesCtaSectionView />
    </>
  );
}
