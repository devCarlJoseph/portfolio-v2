import { ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

export function ProjectCtaCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-10 text-card-foreground shadow-sm"
    >
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              Ready to collaborate
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Have a project or product idea in mind?
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Whether you need a bespoke SaaS platform, modern e-commerce storefront, or a high-converting marketing site, I bring ideas to production on time and on spec.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href="https://github.com/devCarlJoseph"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-muted active:scale-95"
          >
            <Code2 className="h-4 w-4" />
            <span>GitHub Profile</span>
          </a>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-5 py-2.5 text-xs font-semibold text-background transition-all hover:opacity-90 active:scale-95 shadow-md"
          >
            <Sparkles className="h-4 w-4" />
            <span>Start a Project</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
}
