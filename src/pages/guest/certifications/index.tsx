import { useState } from "react";
import { motion } from "motion/react";
import {
  ALL_CERTIFICATIONS,
  CERTIFICATION_CATEGORIES,
  type Certification,
} from "@/data/certifications";
import { CertificationMacbookCard } from "@/components/features/certifications/certification-macbook-card";
import { CertificationEmptyCard } from "@/components/features/certifications/certification-empty-card";
import { CertificationDetailModal } from "@/components/features/certifications/certification-detail-modal";

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="space-y-12 sm:space-y-14 py-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-3 border-b border-border/60 pb-6 text-center sm:text-left"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          certifications
        </h1>
        <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground mx-auto sm:mx-0">
          Credentials across hackathons, cloud, engineering, and security — each verifiable at its source.
        </p>
      </motion.div>

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
              <div className="space-y-1 text-center sm:text-left">
                <span className="block font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
                  {category.label}
                </span>
                <p className="font-mono text-xs text-muted-foreground/80">
                  {category.description}
                </p>
              </div>

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
