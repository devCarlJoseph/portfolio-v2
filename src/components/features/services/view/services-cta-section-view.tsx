import { ServiceCtaCard } from "@/components/features/services/ui/service-cta-card";

export function ServicesCtaSectionView() {
  return (
    <section>
      <ServiceCtaCard />
    </section>
  );
}

// Re-export with alias for compatibility
export { ServicesCtaSectionView as ServicesCtaBanner };
