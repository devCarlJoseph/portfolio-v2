import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function FeaturedProjectsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border/60 pb-5"
    >
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            02 — Projects
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
          featured work
        </h2>
      </div>

      <NavLink
        to="/projects"
        className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground transition-colors self-start sm:self-auto"
      >
        <span>All Projects</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </NavLink>
    </motion.div>
  );
}
