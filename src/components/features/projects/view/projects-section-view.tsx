import { useState, useMemo } from "react";
import { ALL_PROJECTS, type ProjectCategory, type ProjectItem } from "@/data/projects";
import { ProjectHeroHeader } from "@/components/features/projects/content/project-hero-header";
import { ProjectFilterControls } from "@/components/features/projects/content/project-filter-controls";
import { ProjectEmptyState } from "@/components/features/projects/content/project-empty-state";
import { ProjectCard } from "@/components/features/projects/ui/project-card";
import { ProjectListRow } from "@/components/features/projects/ui/project-list-row";
import { ProjectDetailModal } from "@/components/features/projects/ui/project-detail-modal";
import { AnimatePresence } from "motion/react";

export function ProjectsSectionView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ALL_PROJECTS.length };
    for (const p of ALL_PROJECTS) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filtered projects based on search query and category
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = project.title.toLowerCase().includes(q);
      const inTagline = project.tagline.toLowerCase().includes(q);
      const inDesc = project.description.toLowerCase().includes(q);
      const inStack = project.stack.some((tech) => tech.toLowerCase().includes(q));

      return inTitle || inTagline || inDesc || inStack;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Page Header and Filtering controls */}
      <section className="space-y-8" aria-label="Projects header and filters">
        <ProjectHeroHeader />
        <ProjectFilterControls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          categoryCounts={categoryCounts}
          totalResultsCount={filteredProjects.length}
        />
      </section>

      {/* Main Projects Display */}
      <section aria-label="Projects catalog">
        {filteredProjects.length === 0 ? (
          <ProjectEmptyState
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onResetFilters={handleResetFilters}
          />
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={setActiveModalProject}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectListRow
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={setActiveModalProject}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Project Case Study / Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}

// Re-export with alias for compatibility
export { ProjectsSectionView as ProjectsCatalogSectionView };
