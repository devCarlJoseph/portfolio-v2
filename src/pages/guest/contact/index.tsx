import { useState } from "react";
import { ProjectScopesSection } from "@/components/features/contact/project-scopes-section";
import { CollaborationWorkflowSection } from "@/components/features/contact/collaboration-workflow-section";
import { ContactFormSection } from "@/components/features/contact/contact-form-section";

export default function ContactPage() {
  const [selectedEngagement, setSelectedEngagement] = useState<string>("web-development");

  const handleSelectScope = (scopeId: string) => {
    setSelectedEngagement(scopeId);
    // Smooth scroll down to the contact form
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 py-4 max-w-6xl mx-auto">
      {/* 01: Project Scopes & Services (Real Deliverables) */}
      <ProjectScopesSection onSelectScope={handleSelectScope} />

      {/* 02: 4-Step Collaboration Process */}
      <CollaborationWorkflowSection />

      {/* 03: Direct Inquiry Form & Location Map Card */}
      <ContactFormSection
        selectedEngagement={selectedEngagement}
        onEngagementChange={setSelectedEngagement}
      />
    </div>
  );
}
