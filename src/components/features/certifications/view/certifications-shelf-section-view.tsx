import { useState } from "react";
import { motion } from "motion/react";
import {
  ALL_CERTIFICATIONS,
  CERTIFICATION_CATEGORIES,
  type Certification,
} from "@/data/certifications";
import { CertificationsCategoryHeader } from "@/components/features/certifications/content/certifications-category-header";
import { CertificationMacbookCard } from "@/components/features/certifications/ui/certification-macbook-card";
import { CertificationEmptyCard } from "@/components/features/certifications/ui/certification-empty-card";
import { CertificationDetailModal } from "@/components/features/certifications/ui/certification-detail-modal";

export function CertificationsShelfSectionView() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Categorized Certification Tracks */}
      <div className="space-y-12 sm:space-y-16">
        {CERTIFICATION_CATEGORIES.map((category, catIdx) => {
          const categoryCerts = ALL_CERTIFICATIONS.filter(
            (c) => c.categoryId === category.id
          );

          return (
            <motion.section
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.4,
                delay: catIdx * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-5"
            >
              {/* Track Title */}
              <CertificationsCategoryHeader
                category={category}
                index={catIdx}
              />

              {/* Cards Shelf */}
              <div className="flex flex-wrap gap-5 sm:gap-6 items-start justify-center lg:justify-start">
                {categoryCerts.length > 0 ? (
                  categoryCerts.map((cert, certIdx) => (
                    <CertificationMacbookCard
                      key={cert.id}
                      cert={cert}
                      index={certIdx}
                      onSelect={setSelectedCert}
                    />
                  ))
                ) : (
                  <CertificationEmptyCard categoryLabel={category.label} />
                )}
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Interactive Detail & Verification Modal */}
      <CertificationDetailModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
