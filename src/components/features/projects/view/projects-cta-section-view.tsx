import { ProjectCtaCard } from "@/components/features/projects/ui/project-cta-card";

export function ProjectsCtaSectionView() {
  return (
    <section>
      <ProjectCtaCard />
    </section>
  );
}

// Re-export with alias for compatibility
export { ProjectsCtaSectionView as ProjectCtaBanner };
