import { useState } from "react";
import { ProjectScopesSectionView } from "@/components/features/contact/view/project-scopes-section-view";
import { CollaborationWorkflowSectionView } from "@/components/features/contact/view/collaboration-workflow-section-view";
import { ContactFormSectionView } from "@/components/features/contact/view/contact-form-section-view";

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
      <ProjectScopesSectionView onSelectScope={handleSelectScope} />

      {/* 02: 4-Step Collaboration Process */}
      <CollaborationWorkflowSectionView />

      {/* 03: Direct Inquiry Form & Location Map Card */}
      <ContactFormSectionView
        selectedEngagement={selectedEngagement}
        onEngagementChange={setSelectedEngagement}
      />
    </div>
  );
}
