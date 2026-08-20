import { CertificationCtaCard } from "@/components/features/certifications/ui/certification-cta-card";

export function CertificationsCtaSectionView() {
  return (
    <section>
      <CertificationCtaCard />
    </section>
  );
}

// Re-export with alias for compatibility
export { CertificationsCtaSectionView as CertificationsCtaSection };
