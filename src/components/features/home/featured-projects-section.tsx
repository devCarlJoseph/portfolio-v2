import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
} from "lucide-react";
import { motion, type PanInfo } from "motion/react";
import { NavLink } from "react-router-dom";

import { ALL_PROJECTS, type ProjectItem } from "@/data/projects";

const FEATURED_PROJECTS: ProjectItem[] = ALL_PROJECTS.filter((p) => p.featured);

/**
 * --------------------------------------------------------------------------
 * FEATURED PROJECTS SECTION
 * --------------------------------------------------------------------------
 */
export function FeaturedProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = FEATURED_PROJECTS.length;
  const containerRef = useRef<HTMLDivElement>(null);

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        containerRef.current &&
        containerRef.current.matches(":hover")
      ) {
        if (e.key === "ArrowLeft") prevCard();
        if (e.key === "ArrowRight") nextCard();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextCard, prevCard]);

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 md:py-16 border-t border-border/50">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border/60 pb-5"
      >
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
              02 — Projects
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
            Featured Work
          </h2>
        </div>

        <NavLink
          to="/projects"
          className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground transition-colors self-start sm:self-auto"
        >
          <span>All Projects</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </NavLink>
      </motion.div>

      {/* 3D Stack Carousel Container */}
      <div
        ref={containerRef}
        className="relative mx-auto flex h-[480px] sm:h-[500px] w-full max-w-4xl items-center justify-center select-none"
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevCard}
          aria-label="Previous project"
          className="absolute left-0 sm:left-2 md:left-4 z-40 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground backdrop-blur-md transition-all hover:border-foreground/30 hover:text-foreground active:scale-95 shadow-md cursor-pointer"
        >
          <ChevronLeft className="h-4.5 w-4.5" />
        </button>

        <button
          onClick={nextCard}
          aria-label="Next project"
          className="absolute right-0 sm:right-2 md:right-4 z-40 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-card/90 text-muted-foreground backdrop-blur-md transition-all hover:border-foreground/30 hover:text-foreground active:scale-95 shadow-md cursor-pointer"
        >
          <ChevronRight className="h-4.5 w-4.5" />
        </button>

        {/* Render 3D Deck Cards */}
        <div className="relative flex h-full w-full items-center justify-center">
          {FEATURED_PROJECTS.map((project, index) => {
            let diff = index - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            return (
              <ProjectDeckCard
                key={project.id}
                project={project}
                diff={diff}
                isActive={diff === 0}
                onClick={() => setActiveIndex(index)}
                onSwipeLeft={nextCard}
                onSwipeRight={prevCard}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom Indicators with comfortable gap */}
      <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-2.5">
        <div className="flex items-center gap-2">
          {FEATURED_PROJECTS.map((project, i) => (
            <button
              key={project.id}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to ${project.title}`}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                i === activeIndex
                  ? "w-7 bg-foreground"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-[10.5px] uppercase tracking-widest text-muted-foreground/60">
          Click any card to bring to front
        </span>
      </div>
    </section>
  );
}

/**
 * --------------------------------------------------------------------------
 * INDIVIDUAL PROJECT DECK CARD
 * --------------------------------------------------------------------------
 */
interface ProjectDeckCardProps {
  project: ProjectItem;
  diff: number;
  isActive: boolean;
  onClick: () => void;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

function ProjectDeckCard({
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
    info: PanInfo
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
      className={`absolute w-[86vw] max-w-[390px] sm:max-w-[430px] md:max-w-[460px] overflow-hidden rounded-2xl border border-border bg-card shadow-xl transition-all duration-300 ${
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
