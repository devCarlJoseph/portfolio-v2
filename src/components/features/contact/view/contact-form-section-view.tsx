import { motion } from "motion/react";
import { ContactFormHeader } from "@/components/features/contact/content/contact-form-header";
import { ContactDirectInfoCard } from "@/components/features/contact/ui/contact-direct-info-card";
import { ContactMapCard } from "@/components/features/contact/ui/contact-map-card";
import { ContactInquiryForm } from "@/components/features/contact/ui/contact-inquiry-form";

export interface ContactFormSectionViewProps {
  selectedEngagement?: string;
  onEngagementChange?: (id: string) => void;
}

export function ContactFormSectionView({
  selectedEngagement = "web-development",
  onEngagementChange,
}: ContactFormSectionViewProps) {
  return (
    <section id="contact-form" className="space-y-6 sm:space-y-8 pt-4">
      {/* Section Header */}
      <ContactFormHeader />

      {/* Main Grid: Left Column (Direct Contacts & Location Map) + Right Column (Contact Form) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column (5 cols): Direct Contacts & Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 space-y-5"
        >
          <ContactDirectInfoCard />
          <ContactMapCard />
        </motion.div>

        {/* Right Column (7 cols): Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <ContactInquiryForm
            selectedEngagement={selectedEngagement}
            onEngagementChange={onEngagementChange}
          />
        </motion.div>
      </div>
    </section>
  );
}

// Re-export with alias for compatibility
export { ContactFormSectionView as ContactFormSection };
