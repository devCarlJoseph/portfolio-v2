import { useState, useEffect } from "react";
import {
  FALLBACK_GITHUB_DATA,
  type ContributionDay,
  type MonthLabel,
  type RepoItem,
  type GitHubData,
} from "./github-data";

export type { ContributionDay, MonthLabel, RepoItem, GitHubData };
export type GitHubRepo = RepoItem;

const CACHE_KEY = "portfolio_github_live_v5";
const CACHE_TTL_MS = 2 * 60 * 1000; // 2 minutes — short TTL so new pushes show quickly

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * Format a YYYY-MM-DD string into "MMM D, YYYY" avoiding timezone offsets
 */
export function formatContributionDate(dateStr: string): string {
  try {
    const parts = dateStr.split("-").map(Number);
    if (parts.length === 3) {
      const [year, month, day] = parts;
      const date = new Date(Date.UTC(year, month - 1, day));
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      });
    }
  } catch {
    // fallback
  }
  return dateStr;
}

/**
 * Computes month column indices dynamically based on the weeks array
 */
export function calculateMonthLabels(weeks: ContributionDay[][]): MonthLabel[] {
  const labels: MonthLabel[] = [];
  let lastMonth = -1;
  let lastCol = -999;

  weeks.forEach((week, colIdx) => {
    for (const day of week) {
      if (!day.date) continue;
      const parts = day.date.split("-").map(Number);
      if (parts.length === 3) {
        const monthIdx = parts[1] - 1;
        if (monthIdx !== lastMonth) {
          if (colIdx - lastCol >= 3) {
            labels.push({
              label: MONTH_NAMES[monthIdx] || "",
              col: colIdx,
            });
            lastCol = colIdx;
          } else if (labels.length === 1 && labels[0].col === 0) {
            labels[0] = {
              label: MONTH_NAMES[monthIdx] || "",
              col: colIdx,
            };
            lastCol = colIdx;
          }
          lastMonth = monthIdx;
          break;
        }
      }
    }
  });

  return labels;
}

/**
 * Fetch live contribution data from GitHub GraphQL API.
 * Uses the `viewer` query so the token's own activity is returned,
 * which includes private contributions the token owner can see.
 */
export async function fetchGitHubGraphQLData(
  username: string,
  token?: string
): Promise<GitHubData> {
  const authToken = token || import.meta.env.VITE_GITHUB_TOKEN;
  const targetUser = username || import.meta.env.VITE_GITHUB_USERNAME || "devCarlJoseph";

  if (!authToken) {
    throw new Error("No GitHub token available");
  }

  const PINNED_REPOS = [
    "rpg-console-app",
    "portfolio-v2",
    "truenai-hackathon",
    "codego-app",
    "elluna-app",
    "tourism-hub",
  ];

  const repoFragments = PINNED_REPOS.map(
    (name, i) => `
      repo${i}: repository(name: "${name}") {
        name
        description
        url
        stargazerCount
        forkCount
        primaryLanguage {
          name
          color
        }
      }
    `
  ).join("\n");

  const graphqlQuery = {
    query: `
      query {
        viewer {
          login
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  contributionLevel
                  weekday
                }
              }
            }
          }
          ${repoFragments}
        }
      }
    `,
  };

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authToken}`,
    },
    body: JSON.stringify(graphqlQuery),
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned status ${response.status}`);
  }

  const result = await response.json();

  if (result.errors && result.errors.length > 0) {
    throw new Error(result.errors[0].message || "GitHub GraphQL error");
  }

  const userData = result.data?.viewer;
  if (!userData) {
    throw new Error("No viewer data returned from GitHub API");
  }

  const calendar = userData.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    throw new Error("No contribution calendar data received");
  }

  const levelMap: Record<string, number> = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
  };

  // Build a date→{count, level} lookup from the live API response
  const liveLookup: Record<string, { count: number; level: number }> = {};
  for (const w of calendar.weeks) {
    for (const d of w.contributionDays) {
      liveLookup[d.date] = {
        count: d.contributionCount,
        level: levelMap[d.contributionLevel] ?? 0,
      };
    }
  }

  // Use the 266-contribution fallback as the base grid.
  // For each day, pick whichever count is higher (fallback or live),
  // so new pushes always appear on top of the full activity map.
  const weeks: ContributionDay[][] = FALLBACK_GITHUB_DATA.weeks.map((week) =>
    week.map((day) => {
      const live = liveLookup[day.date];
      if (live && live.count > day.count) {
        return { ...day, count: live.count, level: live.level };
      }
      return day;
    })
  );

  const monthLabels = calculateMonthLabels(weeks);

  const rawRepos = PINNED_REPOS.map((_, i) => userData[`repo${i}`]).filter(Boolean);
  const defaultDescriptions: Record<string, string> = {
    "rpg-console-app":
      "A console-based RPG game application with interactive gameplay mechanics and character progression.",
    "portfolio-v2":
      "Modern developer portfolio and showcase built with React 19, Vite, Tailwind CSS, and Motion.",
    "truenai-hackathon":
      "Award-winning hackathon platform with Gemini AI integration, earning 3rd Place and Best in Tech.",
    "codego-app":
      "Interactive web development learning platform with structured lessons and coding exercises.",
    "elluna-app":
      "A full-stack application project showcasing modern web development practices and design.",
    "tourism-hub":
      "Full-stack web platform for tourism students to explore destinations and access travel resources.",
  };

  const repositories: RepoItem[] = rawRepos.map(
    (r: {
      name: string;
      description: string | null;
      url: string;
      stargazerCount: number;
      forkCount: number;
      primaryLanguage: { name: string; color: string } | null;
    }) => ({
      name: r.name,
      description:
        r.description ||
        defaultDescriptions[r.name] ||
        "Open source repository and developer contribution by @devCarlJoseph.",
      language: r.primaryLanguage?.name || "TypeScript",
      languageColor: r.primaryLanguage?.color || "#3178c6",
      stars: r.stargazerCount,
      forks: r.forkCount,
      url: r.url,
    })
  );

  return {
    totalContributions: FALLBACK_GITHUB_DATA.totalContributions,
    weeks,
    monthLabels,
    repositories: repositories.length > 0 ? repositories : FALLBACK_GITHUB_DATA.repositories,
    username: userData.login || targetUser,
  };
}

/**
 * Custom React hook — fetches live GitHub data on mount, falls back to snapshot.
 * Short 2-min cache so new pushes appear quickly on refresh.
 */
export function useGitHubContributions() {
  const [data, setData] = useState<GitHubData>(FALLBACK_GITHUB_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      // 1. Check short-lived cache
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TTL_MS && parsed.data) {
            if (isMounted) {
              setData(parsed.data);
              setIsLive(true);
              setIsLoading(false);
            }
            return;
          }
        }
      } catch {
        // ignore
      }

      // 2. Fetch fresh data from GitHub
      try {
        const username = import.meta.env.VITE_GITHUB_USERNAME || "devCarlJoseph";
        const token = import.meta.env.VITE_GITHUB_TOKEN;

        const liveData = await fetchGitHubGraphQLData(username, token);
        if (isMounted) {
          setData(liveData);
          setIsLive(true);
          setIsLoading(false);

          try {
            sessionStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ timestamp: Date.now(), data: liveData })
            );
          } catch {
            // ignore
          }
        }
      } catch (err: unknown) {
        if (isMounted) {
          console.warn("GitHub live fetch failed, using snapshot:", err);
          setError(err instanceof Error ? err.message : "Failed to load live data");
          setData(FALLBACK_GITHUB_DATA);
          setIsLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading, isLive, error };
}
