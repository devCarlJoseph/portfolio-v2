import { ServiceCtaCard } from "@/components/features/services/ui/service-cta-card";

export function ServicesCtaSectionView() {
  return (
    <section className="max-w-6xl mx-auto py-10 sm:py-14 border-t border-border/50">
      <ServiceCtaCard />
    </section>
  );
}

// Re-export with alias for compatibility
export { ServicesCtaSectionView as ServicesCtaBanner };
