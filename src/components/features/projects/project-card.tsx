import { ArrowUpRight, Code, Info, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { type ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-border/90 bg-card transition-all duration-300 hover:border-foreground/40 hover:shadow-xl dark:hover:shadow-neutral-950/50"
    >
      {/* Top Media & Image Header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40 border-b border-border/70">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="rounded-full border border-border/80 bg-background/90 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-foreground backdrop-blur-md shadow-sm">
            {project.category}
          </span>
          <span className="rounded-full border border-border/80 bg-background/90 px-2 py-0.5 font-mono text-[10.5px] font-medium text-muted-foreground backdrop-blur-md shadow-sm">
            {project.year}
          </span>
        </div>

        {/* Featured pill if active */}
        {project.featured && (
          <div className="absolute bottom-3 left-3.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-0.5 font-mono text-[10px] font-semibold text-background shadow-md">
              ★ Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Title and Tagline */}
        <div className="mb-2.5">
          <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-muted-foreground font-medium mt-0.5">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="mb-4 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        {/* Highlight features (first 2) */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4 space-y-1.5 border-t border-border/50 pt-3">
            {project.features.slice(0, 2).map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground"
              >
                <CheckCircle2 className="h-3 w-3 shrink-0 text-foreground" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="mt-auto pt-2">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground transition-colors group-hover:border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-2 border-t border-border/60 pt-4">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <Info className="h-3.5 w-3.5" />
              <span>Details</span>
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code`}
                  className="inline-flex items-center gap-1 rounded-lg border border-border bg-muted/30 px-2.5 py-1.5 font-mono text-xs font-medium text-foreground transition-all hover:bg-muted active:scale-95"
                >
                  <Code className="h-3.5 w-3.5" />
                  <span>Code</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1 rounded-lg bg-foreground px-3 py-1.5 text-xs font-semibold text-background transition-all hover:opacity-90 active:scale-95 shadow-sm"
                >
                  <span>Demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
