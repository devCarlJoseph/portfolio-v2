import { CertificationsPageHeader } from "@/components/features/certifications/content/certifications-page-header";
import { CertificationsShelfSectionView } from "@/components/features/certifications/view/certifications-shelf-section-view";

export default function CertificationsPage() {
  return (
    <div className="space-y-12 sm:space-y-14 py-4">
      {/* Header */}
      <CertificationsPageHeader />

      {/* Categorized Certification Tracks Shelf */}
      <CertificationsShelfSectionView />
    </div>
  );
}
