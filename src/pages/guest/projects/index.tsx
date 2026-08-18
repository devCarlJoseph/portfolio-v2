import { useState, useMemo } from "react";
import { ALL_PROJECTS, type ProjectCategory, type ProjectItem } from "@/data/projects";
import { ProjectHeroHeader } from "@/components/features/projects/project-hero-header";
import { ProjectCard } from "@/components/features/projects/project-card";
import { ProjectListRow } from "@/components/features/projects/project-list-row";
import { ProjectDetailModal } from "@/components/features/projects/project-detail-modal";
import { ProjectCtaBanner } from "@/components/features/projects/project-cta-banner";
import { SearchX, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ProjectsPage() {
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
    <div className="space-y-12 sm:space-y-16 py-4">
      {/* Page Header and Filtering controls */}
      <ProjectHeroHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        categoryCounts={categoryCounts}
        totalResultsCount={filteredProjects.length}
      />

      {/* Main Projects Display */}
      <section aria-label="Projects list">
        {filteredProjects.length === 0 ? (
          /* Empty Search State */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 px-6 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground mb-4">
              <SearchX className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">
              No matching projects found
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mb-6">
              We couldn't find any projects matching "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all hover:bg-muted active:scale-95 shadow-xs cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset all filters</span>
            </button>
          </motion.div>
        ) : viewMode === "grid" ? (
          /* Grid View */
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
          /* List / Archive View */
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

      {/* Bottom CTA Banner */}
      <ProjectCtaBanner />
    </div>
  );
}
