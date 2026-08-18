import { useState } from "react";
import {
  ArrowUpRight,
  GitBranch,
  Star,
  ExternalLink,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";
import {
  useGitHubContributions,
  formatContributionDate,
} from "@/lib/github";

export function GithubSection() {
  const { data, isLive } = useGitHubContributions();
  const { weeks, monthLabels, totalContributions, repositories, username } = data;

  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 md:py-16 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        <div className="rounded-xl border border-border/80 bg-card p-4 sm:p-6 shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5 border-b border-border/50 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="font-sans text-sm sm:text-base font-semibold text-foreground">
                {totalContributions} contributions in the last year
              </span>
              {isLive && (
                <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="h-3 w-3" />
                  Live
                </span>
              )}
            </div>

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>Contribution settings ▾</span>
            </a>
          </div>

          {/* Contribution Grid */}
          <div className="overflow-x-auto pb-2 scrollbar-thin">
            <div className="w-fit min-w-[720px] select-none mx-auto py-1">
              {/* Month labels */}
              <div className="relative h-4 mb-1.5 text-[10px] font-mono text-muted-foreground/80 select-none">
                {monthLabels.map((m, idx) => (
                  <span
                    key={`${m.label}-${idx}`}
                    className="absolute top-0"
                    style={{ left: `${28 + m.col * 13}px` }}
                  >
                    {m.label}
                  </span>
                ))}
              </div>

              {/* Grid with weekday labels */}
              <div className="flex items-start">
                {/* Weekday labels */}
                <div className="grid grid-rows-7 gap-[3px] h-[88px] text-[9px] font-mono text-muted-foreground/70 select-none w-7 pr-1">
                  <div className="h-[10px]" />
                  <div className="h-[10px] leading-[10px] flex items-center">Mon</div>
                  <div className="h-[10px]" />
                  <div className="h-[10px] leading-[10px] flex items-center">Wed</div>
                  <div className="h-[10px]" />
                  <div className="h-[10px] leading-[10px] flex items-center">Fri</div>
                  <div className="h-[10px]" />
                </div>

                {/* Week columns */}
                <div className="flex gap-[3px]">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="grid grid-rows-7 gap-[3px]">
                      {Array.from({ length: 7 }).map((_, weekday) => {
                        const day = week.find((d) => d.weekday === weekday);
                        if (!day) {
                          return (
                            <div
                              key={weekday}
                              className="h-[10px] w-[10px] opacity-0 pointer-events-none"
                            />
                          );
                        }

                        return (
                          <div
                            key={weekday}
                            onMouseEnter={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setHoveredDay({
                                date: formatContributionDate(day.date),
                                count: day.count,
                                x: rect.left + rect.width / 2,
                                y: rect.top - 8,
                              });
                            }}
                            onMouseLeave={() => setHoveredDay(null)}
                            className={`h-[10px] w-[10px] rounded-[2px] transition-transform duration-100 hover:scale-125 cursor-pointer ${getMonochromeColor(
                              day.level
                            )}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-5 pt-3 border-t border-border/40 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground font-mono text-[10px]">
                <a
                  href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>Learn how we count contributions</span>
                </a>

                <div className="flex items-center gap-1.5">
                  <span className="text-[10px]">Less</span>
                  <div className="h-[10px] w-[10px] rounded-[2px] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800" />
                  <div className="h-[10px] w-[10px] rounded-[2px] bg-neutral-300 dark:bg-neutral-700" />
                  <div className="h-[10px] w-[10px] rounded-[2px] bg-neutral-400 dark:bg-neutral-500" />
                  <div className="h-[10px] w-[10px] rounded-[2px] bg-neutral-600 dark:bg-neutral-300" />
                  <div className="h-[10px] w-[10px] rounded-[2px] bg-black dark:bg-white" />
                  <span className="text-[10px]">More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

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

/**
 * Monochrome black color palette
 * Level 0 = empty, Level 4 = solid black (light) / solid white (dark)
 */
function getMonochromeColor(level: number): string {
  switch (level) {
    case 1:
      return "bg-neutral-300 dark:bg-neutral-700";
    case 2:
      return "bg-neutral-400 dark:bg-neutral-500";
    case 3:
      return "bg-neutral-600 dark:bg-neutral-300";
    case 4:
      return "bg-black dark:bg-white";
    case 0:
    default:
      return "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800";
  }
}
