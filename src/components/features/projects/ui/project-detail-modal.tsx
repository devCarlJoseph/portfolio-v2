import { useEffect } from "react";
import {
  X,
  ExternalLink,
  Code2,
  CheckCircle2,
  Layers,
  Sparkles,
  BarChart3,
  Calendar,
  FolderGit2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { type ProjectItem } from "@/data/projects";
import { NavLink } from "react-router-dom";

export interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl text-foreground"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header Bar with sticky close button */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border/80 bg-card/95 px-6 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  Project Case Study
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[11px] font-medium text-foreground">
                  {project.category}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted/30 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Project Cover Image */}
            <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/90 px-3 py-1.5 font-mono text-xs font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-muted active:scale-95"
                    >
                      <Code2 className="h-3.5 w-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background transition-all hover:opacity-90 active:scale-95 shadow-sm"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Performance Metrics strip (if available) */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-3 rounded-xl border border-border/70 bg-muted/20 p-4">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="flex items-center justify-center gap-1 font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                        <BarChart3 className="h-3 w-3 text-muted-foreground" />
                        <span>{m.label}</span>
                      </div>
                      <div className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Detailed Overview */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  Overview & Engineering Highlights
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Key Features List */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-3">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Key Capabilities & Architecture
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground rounded-lg border border-border/50 bg-card p-2.5"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Breakdown */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-3">
                  <Layers className="h-3.5 w-3.5" />
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-border/80 bg-muted/40 px-3 py-1 font-mono text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metadata details */}
              <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground font-mono">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Release Year: {project.year}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FolderGit2 className="h-3.5 w-3.5" />
                  <span>Category: {project.category}</span>
                </div>
              </div>

              {/* Bottom Inquire / Contact CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border bg-muted/30 p-4">
                <p className="text-xs text-muted-foreground text-center sm:text-left">
                  Need a similar high-performance application built for your business?
                </p>
                <NavLink
                  to="/contact"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background transition-all hover:opacity-90 active:scale-95 shrink-0"
                >
                  <span>Discuss Project</span>
                </NavLink>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
