import { ArrowUpRight, Code2, Info } from "lucide-react";
import { motion } from "motion/react";
import { type ProjectItem } from "@/data/projects";

export interface ProjectListRowProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export function ProjectListRow({
  project,
  index,
  onSelect,
}: ProjectListRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: (index % 5) * 0.04 }}
      className="group flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl border border-border/80 bg-card p-4 sm:p-5 transition-all duration-200 hover:border-foreground/40 hover:shadow-md"
    >
      {/* Left info */}
      <div className="flex items-start sm:items-center gap-4">
        {/* Small thumbnail preview */}
        <div className="hidden sm:block h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-border bg-muted">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-mono text-xs text-muted-foreground font-medium">
              {project.year}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="rounded-full bg-muted/60 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-foreground">
              {project.category}
            </span>
            {project.featured && (
              <span className="rounded-full bg-foreground px-2 py-0.5 font-mono text-[9.5px] font-bold text-background">
                Featured
              </span>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-1 max-w-xl">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Right Tech stack & Actions */}
      <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 sm:gap-4 border-t border-border/40 md:border-t-0 pt-3 md:pt-0">
        {/* Stack chips (show first 3) */}
        <div className="hidden lg:flex items-center gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/60 bg-muted/30 px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="font-mono text-[10px] text-muted-foreground">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1 rounded-lg border border-border bg-muted/30 px-2.5 py-1.5 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
          >
            <Info className="h-3.5 w-3.5" />
            <span>Details</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code"
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1.5 font-mono text-xs font-medium text-foreground transition-all hover:bg-muted active:scale-95"
            >
              <Code2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Code</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-foreground px-3 py-1.5 text-xs font-semibold text-background transition-all hover:opacity-90 active:scale-95 shadow-sm"
            >
              <span>Demo</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
