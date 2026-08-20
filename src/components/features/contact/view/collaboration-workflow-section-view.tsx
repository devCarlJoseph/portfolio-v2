import { Search, Compass, Rocket, ShieldCheck } from "lucide-react";
import { CollaborationWorkflowHeader } from "@/components/features/contact/content/collaboration-workflow-header";
import { WorkflowStepCard } from "@/components/features/contact/ui/workflow-step-card";

const STEPS = [
  {
    step: "01",
    title: "Discovery & Alignment",
    desc: "A quick exchange to unpack your product vision, timeline, technical requirements, and core constraints.",
    icon: Search,
  },
  {
    step: "02",
    title: "Architecture & Roadmap",
    desc: "Defining the tech stack, database schema, milestone breakdown, and transparent scope agreement.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Iterative Build & Demos",
    desc: "Fast development sprints with live preview deployments, continuous testing, and async status updates.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Launch & Full Handover",
    desc: "Production deployment, complete IP & repository transfer, documentation, and post-launch stability support.",
    icon: ShieldCheck,
  },
];

export function CollaborationWorkflowSectionView() {
  return (
    <section className="space-y-6 sm:space-y-8 max-w-6xl mx-auto py-10 sm:py-14 border-t border-border/50">
      {/* Section Header */}
      <CollaborationWorkflowHeader />

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {STEPS.map((step, idx) => (
          <WorkflowStepCard
            key={step.step}
            step={step.step}
            title={step.title}
            desc={step.desc}
            icon={step.icon}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}

// Re-export with alias for compatibility
export { CollaborationWorkflowSectionView as CollaborationWorkflowSection };
