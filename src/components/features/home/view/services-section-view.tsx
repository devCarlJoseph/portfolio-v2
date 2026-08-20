import { SERVICES } from "@/components/features/home/types/services";
import { ServicesHeader } from "@/components/features/home/content/services-header";
import { CompactServiceCard } from "@/components/features/home/ui/compact-service-card";

export function ServicesSectionView() {
  return (
    <section className="py-10 sm:py-14 md:py-16 border-t border-border/50">
      <ServicesHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {SERVICES.map((service, i) => (
          <CompactServiceCard
            key={service.id}
            service={service}
            delay={i * 0.06}
          />
        ))}
      </div>
    </section>
  );
}
