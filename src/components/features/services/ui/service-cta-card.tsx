import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { Sparkles, FolderGit2, ArrowUpRight } from "lucide-react";

export function ServiceCtaCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-dashed border-border/90 bg-card p-8 sm:p-12 shadow-sm"
    >
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="max-w-xl space-y-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Have a Custom Requirement?
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Need a tailored scope or enterprise architecture consultation?
          </h2>

          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Reach out with your project details, and I will prepare a personalized scope estimate and technical roadmap.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-xs sm:text-sm font-semibold text-background transition-all hover:opacity-90 active:scale-95 shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>Get in Touch / Quote</span>
          </NavLink>

          <NavLink
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-xs sm:text-sm font-semibold text-foreground transition-all hover:bg-muted active:scale-95"
          >
            <FolderGit2 className="h-4 w-4" />
            <span>View Case Studies</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
}
