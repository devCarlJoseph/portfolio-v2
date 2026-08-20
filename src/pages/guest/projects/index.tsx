import { ProjectsSectionView } from "@/components/features/projects/view/projects-section-view";
import { ProjectsCtaSectionView } from "@/components/features/projects/view/projects-cta-section-view";

export default function ProjectsPage() {
  return (
    <div className="space-y-12 sm:space-y-16 py-4">
      <ProjectsSectionView />
      <ProjectsCtaSectionView />
    </div>
  );
}
