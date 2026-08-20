import { useGitHubContributions } from "@/lib/github";
import { GithubHeader } from "@/components/features/home/content/github-header";
import { GithubGraphCard } from "@/components/features/home/ui/github-graph-card";
import { GithubRepoCard } from "@/components/features/home/ui/github-repo-card";

export function GithubSectionView() {
  const { data } = useGitHubContributions();
  const { repositories, username } = data;

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 md:py-16 border-t border-border/50">
      <GithubHeader username={username} />

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
            <GithubRepoCard key={repo.name} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
}
