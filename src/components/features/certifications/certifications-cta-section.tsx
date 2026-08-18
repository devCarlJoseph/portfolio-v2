import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Sparkles, FolderGit2 } from "lucide-react";

export function CertificationsCtaSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-dashed border-border/90 bg-card p-8 sm:p-12"
    >
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="max-w-xl space-y-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Ready for Engineering Challenges
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Looking for an award-winning engineer to build your next project?
          </h2>

          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            From high-velocity MVP hackathon sprints to production enterprise architectures, I deliver performant and reliable digital solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-xs sm:text-sm font-semibold text-background transition-all hover:opacity-90 active:scale-95 shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>Start a Project</span>
          </NavLink>

          <NavLink
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-xs sm:text-sm font-semibold text-foreground transition-all hover:bg-muted active:scale-95"
          >
            <FolderGit2 className="h-4 w-4" />
            <span>Explore Case Studies</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </NavLink>
        </div>
      </div>
    </motion.section>
  );
}
