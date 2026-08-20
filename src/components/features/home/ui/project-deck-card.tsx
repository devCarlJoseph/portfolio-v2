import {
  ArrowUpRight,
  Code2,
  Lock,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Activity,
} from "lucide-react";
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

  // 3D stack fan geometry with comfortable lateral spread and scale
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
          x: "-32%",
          y: 16,
          rotate: -7,
          scale: 0.91,
          zIndex: 20,
          opacity: 0.82,
          filter: "brightness(0.78)",
        };
      case 1: // Immediate Right
        return {
          x: "32%",
          y: 16,
          rotate: 7,
          scale: 0.91,
          zIndex: 20,
          opacity: 0.82,
          filter: "brightness(0.78)",
        };
      case -2: // Far Left
        return {
          x: "-56%",
          y: 32,
          rotate: -13,
          scale: 0.82,
          zIndex: 10,
          opacity: 0.45,
          filter: "brightness(0.55)",
        };
      case 2: // Far Right
        return {
          x: "56%",
          y: 32,
          rotate: 13,
          scale: 0.82,
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
      className={`group absolute w-[92vw] max-w-[420px] sm:max-w-[470px] md:max-w-[500px] select-none transition-all duration-300 ${
        isActive ? "cursor-default" : "cursor-pointer hover:scale-[0.93]"
      }`}
      style={{
        zIndex: transform.zIndex,
        transformOrigin: "center bottom",
      }}
    >
      {/* Subtle Depth Shadow Behind Active Card */}
      {isActive && (
        <div className="absolute -inset-1 -z-10 rounded-3xl bg-foreground/5 shadow-2xl transition-opacity duration-300 dark:bg-neutral-900/80" />
      )}

      {/* Main Container */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card p-3 sm:p-4 shadow-xl transition-all duration-300 hover:border-foreground/40 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-neutral-950/90">
        
        {/* ======================================================== */}
        {/* DETAILED MACBOOK PRO HARDWARE CHASSIS */}
        {/* ======================================================== */}
        <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-[#18181b] dark:bg-[#111113] shadow-md">
          
          {/* Top Lid Outer Border & Camera Notch */}
          <div className="relative flex h-8 items-center justify-between border-b border-neutral-800 bg-[#202024] dark:bg-[#161618] px-3">
            
            {/* macOS Window Controls (Traffic Lights with micro rings) */}
            <div className="flex items-center gap-1.5">
              <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#ff5f56] border border-[#e0443e] shadow-2xs" />
              <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#ffbd2e] border border-[#dea123] shadow-2xs" />
              <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#27c93f] border border-[#1aab29] shadow-2xs" />
              
              {/* Safari Navigation Chevrons */}
              <div className="hidden sm:flex items-center gap-0.5 ml-2 text-neutral-400">
                <ChevronLeft className="h-3 w-3" />
                <ChevronRight className="h-3 w-3 opacity-40" />
              </div>
            </div>

            {/* Safari Address Bar */}
            <div className="flex items-center gap-1.5 rounded-md border border-neutral-700/60 bg-[#131316] dark:bg-[#0c0c0e] px-2.5 py-0.5 text-center shadow-inner">
              <Lock className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
              <span className="font-mono text-[9.5px] text-neutral-200 font-medium tracking-tight truncate max-w-[120px] sm:max-w-[160px]">
                https://{project.id}.dev
              </span>
              <RotateCw className="h-2 w-2 text-neutral-400 hidden sm:inline" />
            </div>

            {/* Right Status Indicator */}
            <div className="flex items-center gap-1 font-mono text-[9px] text-neutral-300 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="hidden sm:inline">HTTPS</span>
            </div>
          </div>

          {/* MacBook Display Screen */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black group/screen">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover/screen:scale-105"
              loading="lazy"
            />

            {/* Sharp Solid Badges Over Screen */}
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
              <span className="rounded border border-neutral-700 bg-neutral-900/95 px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-wider text-white shadow-sm">
                {project.category}
              </span>
            </div>

            <div className="absolute top-2.5 right-2.5 rounded border border-neutral-700 bg-neutral-900/95 px-2 py-0.5 font-mono text-[9.5px] font-medium text-neutral-300 shadow-sm">
              {project.year}
            </div>

            {/* Hover Action Overlay */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => !isActive && e.preventDefault()}
                className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-200 group-hover/screen:opacity-100"
              >
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-600 bg-neutral-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95">
                  <span>Launch Preview</span>
                  <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            )}
          </div>

          {/* MacBook Anodized Aluminum Bottom Lip & Center Thumb Notch */}
          <div className="relative flex h-4 w-full items-center justify-center border-t border-neutral-700/80 bg-gradient-to-b from-[#27272b] to-[#1c1c1f] dark:from-[#1e1e22] dark:to-[#141416]">
            <div className="h-1 w-14 rounded-b bg-neutral-900 border-b border-x border-neutral-600/40 shadow-inner" />
          </div>
        </div>

        {/* ======================================================== */}
        {/* DETAILED PROJECT METADATA & TECHNICAL SPECS */}
        {/* ======================================================== */}
        <div className="mt-3.5 space-y-3 px-1">
          {/* Header Row: Title + Tagline */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground leading-snug">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 rounded border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.2 font-mono text-[9px] font-semibold text-amber-500 dark:text-amber-400">
                    <Sparkles className="h-2.5 w-2.5" />
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Live Metrics Chips (if available) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <div className="flex items-center gap-1 font-mono text-[9.5px] font-semibold text-muted-foreground mr-1">
                <Activity className="h-3 w-3 text-emerald-500" />
                <span>Specs:</span>
              </div>
              {project.metrics.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-1 rounded border border-border bg-muted/50 px-2 py-0.5 font-mono text-[9.5px]"
                >
                  <span className="text-muted-foreground">{m.label}:</span>
                  <span className="font-semibold text-foreground">{m.value}</span>
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded border border-border bg-muted/40 px-2 py-0.5 font-mono text-[9.5px] font-medium text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2.5 border-t border-border">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              {project.category}
            </span>

            <div className="flex items-center gap-2 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => !isActive && e.preventDefault()}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1.5 text-xs font-semibold text-foreground transition-all hover:bg-muted active:scale-95 shadow-2xs"
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
                  className="group/btn inline-flex items-center gap-1 rounded-lg bg-foreground px-3 py-1.5 text-xs font-semibold text-background transition-all hover:opacity-90 active:scale-95 shadow-sm"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
