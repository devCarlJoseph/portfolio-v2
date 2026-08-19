import { ArrowUpRight, Code2 } from "lucide-react";
import { motion, type PanInfo } from "motion/react";

import type { ProjectItem } from "@/data/projects";

interface ProjectDeckCardProps {
  project: ProjectItem;
  diff: number;
  isActive: boolean;
  onClick: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export function ProjectDeckCard({
  project,
  diff,
  isActive,
  onClick,
  onSwipeLeft,
  onSwipeRight,
}: ProjectDeckCardProps) {
  const isVisible = Math.abs(diff) <= 2;
  if (!isVisible) return null;

  // Clean, subtle fan geometry with comfortable lateral spread
  const getCardTransform = () => {
    switch (diff) {
      case 0: // Front & Center
        return {
          x: "0%",
          y: 0,
          rotate: 0,
          scale: 1,
          zIndex: 30,
          opacity: 1,
          filter: "brightness(1)",
        };
      case -1: // Immediate Left
        return {
          x: "-33%",
          y: 18,
          rotate: -8,
          scale: 0.92,
          zIndex: 20,
          opacity: 0.8,
          filter: "brightness(0.75)",
        };
      case 1: // Immediate Right
        return {
          x: "33%",
          y: 18,
          rotate: 8,
          scale: 0.92,
          zIndex: 20,
          opacity: 0.8,
          filter: "brightness(0.75)",
        };
      case -2: // Far Left
        return {
          x: "-58%",
          y: 36,
          rotate: -14,
          scale: 0.84,
          zIndex: 10,
          opacity: 0.45,
          filter: "brightness(0.55)",
        };
      case 2: // Far Right
        return {
          x: "58%",
          y: 36,
          rotate: 14,
          scale: 0.84,
          zIndex: 10,
          opacity: 0.45,
          filter: "brightness(0.55)",
        };
      default:
        return {
          x: "0%",
          y: 0,
          rotate: 0,
          scale: 0.7,
          zIndex: 0,
          opacity: 0,
          filter: "brightness(0)",
        };
    }
  };

  const transform = getCardTransform();

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (!isActive) return;
    if (info.offset.x < -45) {
      onSwipeLeft();
    } else if (info.offset.x > 45) {
      onSwipeRight();
    }
  };

  return (
    <motion.div
      layout
      animate={transform}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 28,
        mass: 0.8,
      }}
      drag={isActive ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      onClick={() => {
        if (!isActive) onClick();
      }}
      className={`absolute w-[86vw] max-w-[390px] sm:max-w-[430px] md:max-w-[460px] overflow-hidden rounded-2xl border border-dashed border-border/90 bg-card shadow-xl transition-all duration-300 ${
        isActive
          ? "cursor-default ring-1 ring-border/80 shadow-foreground/[0.06] dark:shadow-neutral-950/70"
          : "cursor-pointer hover:border-foreground/30 hover:shadow-md"
      }`}
      style={{
        zIndex: transform.zIndex,
        transformOrigin: "center bottom",
      }}
    >
      {/* Top Header Strip */}
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-4 py-2.5">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {project.category}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground/80">
          {project.year}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col justify-between space-y-3.5 sm:space-y-4">
        {/* Project Thumbnail Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-muted/40">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground leading-snug">
            {project.title}
          </h3>
          <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
            {project.tagline}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded border border-border/70 bg-muted/30 px-1.5 py-0.5 font-mono text-[9.5px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom CTA Row */}
        <div className="pt-3 border-t border-border/60 flex items-center justify-end gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => !isActive && e.preventDefault()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-muted active:scale-95"
            >
              <Code2 className="h-3 w-3" />
              <span>Source</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => !isActive && e.preventDefault()}
              className="group inline-flex items-center gap-1 rounded-lg bg-foreground px-3 py-1.5 text-xs font-semibold text-background transition-all hover:opacity-90 active:scale-95"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
