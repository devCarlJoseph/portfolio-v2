import { useState } from "react";
import { SERVICE_FAQS } from "@/data/services";
import { ServicesFaqHeader } from "@/components/features/services/content/services-faq-header";
import { ServiceFaqItem } from "@/components/features/services/ui/service-faq-item";

export function ServicesFaqSectionView() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="space-y-6 sm:space-y-8 max-w-6xl mx-auto py-10 sm:py-14 border-t border-border/50">
      <ServicesFaqHeader />

      <div className="space-y-3 max-w-4xl mx-auto">
        {SERVICE_FAQS.map((faq, idx) => (
          <ServiceFaqItem
            key={idx}
            question={faq.q}
            answer={faq.a}
            isOpen={openIdx === idx}
            onToggle={() => toggleFaq(idx)}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
