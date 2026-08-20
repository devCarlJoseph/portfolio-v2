import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function HeroIntroduction() {
  return (
    <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left justify-center">
      {/* Availability & Location Badge */}
      <div className="mb-4 inline-flex items-center gap-2 self-center lg:self-start rounded-full border border-neutral-200 bg-neutral-50/80 px-3.5 py-1 text-xs dark:border-neutral-800 dark:bg-neutral-900/70 shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-medium text-neutral-800 dark:text-neutral-200">
          Available for freelance projects
        </span>
        <span className="text-neutral-300 dark:text-neutral-700">•</span>
        <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
          Cebu, Philippines
        </span>
      </div>

      {/* Role Eyebrow */}
      <p className="label-mono font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold mb-1.5">
        Software Developer & Full-Stack Engineer
      </p>

      {/* Name Heading */}
      <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
        <span>Carl Joseph Sumagang</span>
      </h1>

      {/* Bio Description */}
      <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto lg:mx-0">
        I help founders, businesses, and startups build and ship custom web
        applications, high-converting storefronts, and reliable SaaS platforms
        with speed and maintainability.
      </p>

      {/* Social Links Row */}
      <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-6 font-mono text-xs sm:text-[13px]">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          <span>github</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          <span>linkedin</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
        >
          <span>instagram</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Action Buttons */}
      <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3">
        <NavLink
          to="/projects"
          className={buttonVariants({
            className:
              "group h-11 px-6 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 cursor-pointer dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-all text-xs font-semibold gap-2 shadow-sm",
          })}
        >
          <span>View Projects</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </NavLink>

        <NavLink
          to="/contact"
          className={buttonVariants({
            variant: "outline",
            className:
              "group h-11 px-6 rounded-lg border border-neutral-300 bg-transparent text-neutral-800 hover:bg-neutral-100/80 cursor-pointer dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800/60 transition-all text-xs font-semibold gap-2",
          })}
        >
          <span>Hire Me for a Project</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </NavLink>
      </div>
    </div>
  );
}
