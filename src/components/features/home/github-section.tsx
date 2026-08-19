import { useState } from "react";
import { ArrowUpRight, GitBranch, Star, Code2 } from "lucide-react";
import { motion } from "motion/react";
import { useGitHubContributions } from "@/lib/github";
import { GithubGraphCard } from "./ui/github-graph-card";

export function GithubSection() {
  const { data } = useGitHubContributions();
  const { repositories, username } = data;

  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);

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
              04 — Activity
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
            GitHub Contributions & Open Source
          </h2>
        </div>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground transition-colors self-start sm:self-auto"
        >
          <span>@{username}</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </motion.div>

      {/* GitHub Graph Card */}
      <GithubGraphCard />

      {/* Featured Repositories */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground">
            Featured Repositories
          </h3>
          <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
            Open Source
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {repositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card p-4 sm:p-5 transition-all duration-300 hover:border-foreground/30 hover:shadow-md hover:shadow-foreground/[0.02]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="font-mono text-xs sm:text-sm font-bold text-foreground group-hover:underline decoration-border">
                      {repo.name}
                    </span>
                  </div>
                  <span className="inline-flex items-center rounded border border-border bg-muted/40 px-1.5 py-0.5 font-mono text-[9.5px] font-medium text-muted-foreground">
                    Public
                  </span>
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {repo.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="font-mono text-[11px] text-muted-foreground font-medium">
                    {repo.language}
                  </span>
                </div>

                <div className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch className="h-3 w-3" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {hoveredDay && (
        <div
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full rounded-md border border-border bg-foreground px-2.5 py-1 text-center font-mono text-[10.5px] font-medium text-background shadow-lg"
          style={{
            left: `${hoveredDay.x}px`,
            top: `${hoveredDay.y}px`,
          }}
        >
          <span className="font-bold">
            {hoveredDay.count === 0
              ? "No contributions"
              : `${hoveredDay.count} contribution${hoveredDay.count > 1 ? "s" : ""}`}
          </span>{" "}
          on {hoveredDay.date}
        </div>
      )}
    </section>
  );
}
