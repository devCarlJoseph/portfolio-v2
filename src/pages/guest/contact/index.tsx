import { useState } from "react";
import { ProjectScopesSectionView } from "@/components/features/contact/view/project-scopes-section-view";
import { CollaborationWorkflowSectionView } from "@/components/features/contact/view/collaboration-workflow-section-view";
import { ContactFormSectionView } from "@/components/features/contact/view/contact-form-section-view";

export default function ContactPage() {
  const [selectedEngagement, setSelectedEngagement] =
    useState<string>("web-development");

  const handleSelectScope = (scopeId: string) => {
    setSelectedEngagement(scopeId);
    // Smooth scroll down to the contact form
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ProjectScopesSectionView onSelectScope={handleSelectScope} />
      <CollaborationWorkflowSectionView />
      <ContactFormSectionView
        selectedEngagement={selectedEngagement}
        onEngagementChange={setSelectedEngagement}
      />
    </>
  );
}
