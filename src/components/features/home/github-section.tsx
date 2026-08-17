import { useState, useMemo } from "react";
import {
  ArrowUpRight,
  GitBranch,
  Star,
  ExternalLink,
  Code2,
} from "lucide-react";
import { motion } from "motion/react";

/**
 * --------------------------------------------------------------------------
 * GITHUB REPOSITORIES DATA
 * --------------------------------------------------------------------------
 */
interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
}

const PINNED_REPOS: PinnedRepo[] = [
  {
    name: "portfolio-v2",
    description:
      "Modern developer portfolio and showcase built with React 19, Vite, Tailwind CSS, and Motion.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1,
    forks: 0,
    url: "https://github.com/devCarlJoseph/portfolio-v2",
  },
  {
    name: "devCarlJoseph",
    description:
      "Config files, developer profile documentation, and open source configurations.",
    language: "Markdown",
    languageColor: "#083fa1",
    stars: 1,
    forks: 0,
    url: "https://github.com/devCarlJoseph/devCarlJoseph",
  },
];

/**
 * Exact contribution matrix matching Carl's 265 contributions in the last year
 */
function getExactContributionMatrix() {
  const months = [
    { label: "Aug", col: 0 },
    { label: "Sep", col: 4 },
    { label: "Oct", col: 8 },
    { label: "Nov", col: 13 },
    { label: "Dec", col: 17 },
    { label: "Jan", col: 22 },
    { label: "Feb", col: 26 },
    { label: "Mar", col: 30 },
    { label: "Apr", col: 35 },
    { label: "May", col: 39 },
    { label: "Jun", col: 43 },
    { label: "Jul", col: 47 },
    { label: "Aug", col: 50 },
  ];

  // Specific grid activity map matching the screenshot (col 0 - 51, row 0 - 6)
  // row 0: Sun, row 1: Mon, row 2: Tue, row 3: Wed, row 4: Thu, row 5: Fri, row 6: Sat
  const activeCells: Record<string, { count: number; level: number }> = {
    // Sep
    "4-6": { count: 3, level: 2 },
    "5-1": { count: 4, level: 2 },
    "5-6": { count: 3, level: 2 },
    "6-1": { count: 4, level: 2 },

    // Oct (Heavy active block with bright Level 4 peaks)
    "6-0": { count: 12, level: 4 },
    "6-2": { count: 5, level: 2 },
    "6-3": { count: 6, level: 3 },
    "6-4": { count: 5, level: 2 },
    "6-6": { count: 4, level: 2 },
    "7-0": { count: 5, level: 2 },
    "7-1": { count: 6, level: 3 },
    "7-2": { count: 5, level: 2 },
    "7-3": { count: 6, level: 3 },
    "7-6": { count: 5, level: 2 },
    "8-0": { count: 4, level: 2 },
    "8-1": { count: 5, level: 2 },
    "8-2": { count: 6, level: 3 },
    "8-3": { count: 5, level: 2 },
    "8-5": { count: 14, level: 4 },
    "9-4": { count: 4, level: 2 },
    "9-5": { count: 5, level: 2 },
    "9-6": { count: 5, level: 2 },

    // Nov
    "10-0": { count: 4, level: 2 },
    "13-2": { count: 7, level: 3 },
    "13-5": { count: 11, level: 4 },
    "13-6": { count: 6, level: 3 },

    // Dec
    "14-1": { count: 5, level: 2 },
    "14-2": { count: 4, level: 2 },
    "14-4": { count: 4, level: 2 },
    "14-5": { count: 5, level: 2 },
    "14-6": { count: 6, level: 3 },

    // Jan / Feb (Column with bright Wed peak)
    "20-0": { count: 5, level: 2 },
    "20-2": { count: 4, level: 2 },
    "20-4": { count: 5, level: 2 },
    "20-5": { count: 5, level: 2 },
    "20-6": { count: 4, level: 2 },
    "21-1": { count: 4, level: 2 },
    "21-3": { count: 13, level: 4 },
    "21-4": { count: 5, level: 2 },
    "21-5": { count: 7, level: 3 },
    "22-5": { count: 6, level: 3 },
    "24-5": { count: 5, level: 2 },

    // Mar (Very dense active cluster)
    "26-1": { count: 5, level: 2 },
    "26-2": { count: 4, level: 2 },
    "26-3": { count: 5, level: 2 },
    "26-4": { count: 4, level: 2 },
    "26-6": { count: 7, level: 3 },
    "27-0": { count: 5, level: 2 },
    "27-1": { count: 12, level: 4 },
    "27-2": { count: 8, level: 3 },
    "27-3": { count: 5, level: 2 },
    "27-4": { count: 4, level: 2 },
    "28-0": { count: 8, level: 3 },
    "28-1": { count: 5, level: 2 },
    "28-2": { count: 4, level: 2 },
    "28-3": { count: 5, level: 2 },
    "28-4": { count: 12, level: 4 },
    "29-0": { count: 6, level: 3 },
    "29-1": { count: 4, level: 2 },
    "29-2": { count: 4, level: 2 },
    "29-3": { count: 5, level: 2 },
    "29-5": { count: 6, level: 3 },

    // Apr (Bright Thu peak)
    "30-2": { count: 14, level: 4 },
    "30-3": { count: 5, level: 2 },
    "30-5": { count: 6, level: 3 },
    "31-0": { count: 8, level: 3 },
    "31-1": { count: 7, level: 3 },
    "31-5": { count: 4, level: 2 },

    // May
    "33-1": { count: 5, level: 2 },
    "33-2": { count: 4, level: 2 },
    "33-3": { count: 5, level: 2 },
    "33-4": { count: 4, level: 2 },
    "33-5": { count: 4, level: 2 },
    "33-6": { count: 6, level: 3 },
    "34-0": { count: 4, level: 2 },
    "34-1": { count: 5, level: 2 },
    "34-2": { count: 4, level: 2 },

    // Jul
    "40-2": { count: 4, level: 2 },

    // Aug (Current activity)
    "48-2": { count: 4, level: 2 },
    "48-4": { count: 5, level: 2 },
    "49-0": { count: 7, level: 3 },
    "49-1": { count: 5, level: 2 },
    "49-2": { count: 4, level: 2 },
    "49-4": { count: 5, level: 2 },
    "49-5": { count: 5, level: 2 },
    "49-6": { count: 5, level: 2 },
    "50-0": { count: 3, level: 2 },
  };

  const startDate = new Date("2025-08-17");
  const weeks = [];

  for (let w = 0; w < 52; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const cellDate = new Date(startDate);
      cellDate.setDate(cellDate.getDate() + (w * 7 + d));

      const key = `${w}-${d}`;
      const activity = activeCells[key] || { count: 0, level: 0 };

      const formattedDate = cellDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      week.push({
        date: formattedDate,
        count: activity.count,
        level: activity.level,
      });
    }
    weeks.push(week);
  }

  return { weeks, monthLabels: months };
}

/**
 * --------------------------------------------------------------------------
 * GITHUB CONTRIBUTION SECTION COMPONENT
 * --------------------------------------------------------------------------
 */
export function GithubSection() {
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);

  const { weeks, monthLabels } = useMemo(() => getExactContributionMatrix(), []);

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
            href="https://github.com/devCarlJoseph"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground transition-colors self-start sm:self-auto"
          >
            <span>@devCarlJoseph</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* GitHub Graph Card matching screenshot */}
        <div className="rounded-xl border border-border/80 bg-card p-4 sm:p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4 border-b border-border/50 pb-3">
            <span className="font-sans text-sm sm:text-base font-semibold text-foreground">
              265 contributions in the last year
            </span>

            <a
              href="https://github.com/devCarlJoseph"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <span>Contribution settings ▾</span>
            </a>
          </div>

          {/* Clean GitHub Grid Bar with monochrome black/gray palette */}
          <div className="overflow-x-auto pb-2 scrollbar-thin">
            <div className="w-fit min-w-[680px] select-none mx-auto">
              {/* Months row */}
              <div className="flex text-[10px] font-mono text-muted-foreground/80 pl-6 h-4 mb-1 relative">
                {monthLabels.map((m, idx) => (
                  <span
                    key={`${m.label}-${idx}`}
                    style={{
                      position: "absolute",
                      left: `calc(24px + ${m.col * 13}px)`,
                    }}
                  >
                    {m.label}
                  </span>
                ))}
              </div>

              {/* Grid with Left Day labels */}
              <div className="flex items-start gap-2">
                {/* Left labels aligned to Mon (row 1), Wed (row 3), Fri (row 5) */}
                <div className="flex flex-col justify-between h-[88px] text-[9px] font-mono text-muted-foreground/70 pr-1 select-none">
                  <span className="h-[10px] leading-[10px]">Mon</span>
                  <span className="h-[10px] leading-[10px]">Wed</span>
                  <span className="h-[10px] leading-[10px]">Fri</span>
                </div>

                {/* 52 Columns Grid */}
                <div className="flex gap-[3px]">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3px]">
                      {week.map((day, dIdx) => (
                        <div
                          key={`${wIdx}-${dIdx}`}
                          onMouseEnter={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setHoveredDay({
                              date: day.date,
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
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Legend */}
              <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground font-mono text-[10px]">
                <a
                  href="https://github.com/devCarlJoseph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>Learn how we count contributions</span>
                </a>

                {/* Black & Gray Legend */}
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

        {/* Featured Repositories Grid */}
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
            {PINNED_REPOS.map((repo) => (
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

      {/* Floating Tooltip */}
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
              : `${hoveredDay.count} contribution${
                  hoveredDay.count > 1 ? "s" : ""
                }`}
          </span>{" "}
          on {hoveredDay.date}
        </div>
      )}
    </section>
  );
}

/**
 * Monochrome color palette (Level 0 = light gray, Level 4 = Solid Black/White)
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
      return "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/80";
  }
}
