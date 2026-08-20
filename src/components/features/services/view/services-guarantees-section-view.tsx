import { ShieldCheck, Code2, Award, Clock } from "lucide-react";
import { ServicesGuaranteesHeader } from "@/components/features/services/content/services-guarantees-header";
import { ServiceGuaranteeCard } from "@/components/features/services/ui/service-guarantee-card";

const GUARANTEES = [
  {
    title: "100% IP & Code Ownership",
    desc: "Full source code, repositories, and assets are transferred completely to you with zero vendor lock-in.",
    icon: ShieldCheck,
  },
  {
    title: "30-Day Post-Launch SLA",
    desc: "Complimentary post-launch maintenance, bug fixes, and operational stability checks included in every package.",
    icon: Award,
  },
  {
    title: "Milestone-Based Billing",
    desc: "Transparent payment schedules tied strictly to completed demo deliverables and agreed project milestones.",
    icon: Clock,
  },
  {
    title: "Clean TypeScript Codebase",
    desc: "Engineered with strict typing, modular architectures, and 98+ Google Lighthouse performance benchmarks.",
    icon: Code2,
  },
];

export function ServicesGuaranteesSectionView() {
  return (
    <section className="space-y-6">
      <ServicesGuaranteesHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {GUARANTEES.map((item, idx) => (
          <ServiceGuaranteeCard
            key={idx}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}

// Re-export with alias for compatibility
export { ServicesGuaranteesSectionView as ServicesGuaranteesStrip };
