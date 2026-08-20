import { Code2, Star, GitBranch } from "lucide-react";
import type { RepoItem } from "@/lib/github";

export interface GithubRepoCardProps {
  repo: RepoItem;
}

export function GithubRepoCard({ repo }: GithubRepoCardProps) {
  return (
    <a
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
  );
}
