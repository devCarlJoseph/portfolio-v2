import { CONSULTING_OFFERINGS } from "@/components/features/contact/types/consulting";
import { ConsultingHeader } from "@/components/features/contact/content/consulting-header";
import { ConsultingTierCard } from "@/components/features/contact/ui/consulting-tier-card";

export interface ConsultingSectionViewProps {
  onSelectTier?: (tierId: string) => void;
}

export function ConsultingSectionView({
  onSelectTier,
}: ConsultingSectionViewProps) {
  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <ConsultingHeader />

      {/* 2x2 Compact Consulting Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {CONSULTING_OFFERINGS.map((tier, idx) => (
          <ConsultingTierCard
            key={tier.id}
            tier={tier}
            index={idx}
            onSelectTier={onSelectTier}
          />
        ))}
      </div>
    </section>
  );
}

// Re-export with alias for compatibility
export { ConsultingSectionView as ConsultingSection };
