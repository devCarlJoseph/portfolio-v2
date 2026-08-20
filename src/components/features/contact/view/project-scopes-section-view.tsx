import { PROJECT_SCOPES } from "@/components/features/contact/types/project-scope";
import { ProjectScopesHeader } from "@/components/features/contact/content/project-scopes-header";
import { ProjectScopeCard } from "@/components/features/contact/ui/project-scope-card";

export interface ProjectScopesSectionViewProps {
  onSelectScope?: (scopeId: string) => void;
}

export function ProjectScopesSectionView({
  onSelectScope,
}: ProjectScopesSectionViewProps) {
  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <ProjectScopesHeader />

      {/* 3 Project Scope Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {PROJECT_SCOPES.map((scope, idx) => (
          <ProjectScopeCard
            key={scope.id}
            scope={scope}
            index={idx}
            onSelect={onSelectScope}
          />
        ))}
      </div>
    </section>
  );
}

// Re-export with alias for compatibility
export { ProjectScopesSectionView as ProjectScopesSection };
