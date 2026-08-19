import { useState, useRef, useEffect, useCallback } from "react";

import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { ALL_PROJECTS, type ProjectItem } from "@/data/projects";
import { ProjectDeckCard } from "@/components/features/home/ui/project-deck-card";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const FEATURED_PROJECTS: ProjectItem[] = ALL_PROJECTS.filter((p) => p.featured);

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
      if (containerRef.current && containerRef.current.matches(":hover")) {
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
