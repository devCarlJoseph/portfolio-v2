import { useState } from "react";
import { useGitHubContributions, formatContributionDate } from "@/lib/github";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { getMonochromeColor } from "./monochrome-color";

export function GithubGraphCard() {
  const { data, isLive } = useGitHubContributions();
  const { weeks, monthLabels, totalContributions, username } = data;

  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);

  return (
    <div>
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
                <div className="h-[10px] leading-[10px] flex items-center">
                  Mon
                </div>
                <div className="h-[10px]" />
                <div className="h-[10px] leading-[10px] flex items-center">
                  Wed
                </div>
                <div className="h-[10px]" />
                <div className="h-[10px] leading-[10px] flex items-center">
                  Fri
                </div>
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
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            setHoveredDay({
                              date: formatContributionDate(day.date),
                              count: day.count,
                              x: rect.left + rect.width / 2,
                              y: rect.top - 8,
                            });
                          }}
                          onMouseLeave={() => setHoveredDay(null)}
                          className={`h-[10px] w-[10px] rounded-[2px] transition-transform duration-100 hover:scale-125 cursor-pointer ${getMonochromeColor(
                            day.level,
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
    </div>
  );
}
