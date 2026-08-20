import { motion } from "motion/react";
import { MapPin, ArrowUpRight, Terminal, Zap, ShieldCheck } from "lucide-react";
import carlLight from "@/assets/carl-light.png";
import carlDark from "@/assets/carl-dark.png";

export function AboutHeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="overflow-hidden rounded-2xl border border-dashed border-border/90 bg-card shadow-sm"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
        {/* Profile Image Column */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative group w-full max-w-[320px] sm:max-w-85 aspect-square rounded-2xl overflow-hidden border border-border/80 bg-muted/40 shadow-lg">
            {/* Light Mode Profile Image */}
            <img
              src={carlLight}
              alt="Carl Joseph Sumagang"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 dark:hidden"
            />
            {/* Dark Mode Profile Image */}
            <img
              src={carlDark}
              alt="Carl Joseph Sumagang"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 hidden dark:block"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60" />

            {/* Bottom Tag on image */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-border/80 bg-background/90 px-3 py-1.5 backdrop-blur-md">
              <span className="text-xs font-bold text-foreground">
                Carl Joseph
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                Full-Stack Engineer
              </span>
            </div>
          </div>

          {/* Quick Links under image */}
          <div className="mt-4 flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <a
              href="https://github.com/devCarlJoseph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Philippines</span>
            </span>
          </div>
        </div>

        {/* Narrative & Bio Column */}
        <div className="lg:col-span-7 space-y-5">
          <div className="text-center sm:text-left">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
              Software Developer & Systems Builder
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Turning complex problems into elegant, fast, and scalable
              software.
            </h2>
          </div>

          <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            <p>
              Hello! I'm{" "}
              <strong className="text-foreground font-semibold">
                Carl Joseph
              </strong>
              , a full-stack engineer and mobile application developer based in
              the Philippines. I specialize in designing and shipping
              production-ready web platforms, headless commerce solutions, SaaS
              applications, and interactive mobile apps.
            </p>
            <p>
              My engineering approach is grounded in{" "}
              <span className="text-foreground font-medium">
                performance, clean architectural design, and rigorous type
                safety
              </span>
              . I believe great software isn't just about making pixels look
              good on screen—it's about building resilient systems that load
              instantly, handle edge cases gracefully, and provide effortless
              experiences for end users.
            </p>
            <p>
              Whether collaborating with agile startup teams, helping founders
              launch MVP products, or building enterprise workflows from
              scratch, I focus on delivering tangible business value with speed
              and precision.
            </p>
          </div>

          {/* Engineering Values Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
            <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
              <Zap className="h-4 w-4 text-foreground mb-1.5" />
              <div className="font-bold text-xs text-foreground">
                High Speed
              </div>
              <div className="font-mono text-[10.5px] text-muted-foreground">
                Sub-second loads
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/20 p-3">
              <ShieldCheck className="h-4 w-4 text-foreground mb-1.5" />
              <div className="font-bold text-xs text-foreground">Type-Safe</div>
              <div className="font-mono text-[10.5px] text-muted-foreground">
                TypeScript first
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-muted/20 p-3 col-span-2 sm:col-span-1">
              <Terminal className="h-4 w-4 text-foreground mb-1.5" />
              <div className="font-bold text-xs text-foreground">
                Maintainable
              </div>
              <div className="font-mono text-[10.5px] text-muted-foreground">
                Modular clean code
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Numbers & Achievements Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-border/70 divide-x divide-border/60 bg-muted/10">
        <div className="p-4 sm:p-5 text-center">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            3+
          </div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">
            Years Experience
          </div>
        </div>
        <div className="p-4 sm:p-5 text-center">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            15+
          </div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">
            Completed Projects
          </div>
        </div>
        <div className="p-4 sm:p-5 text-center">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            100%
          </div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">
            On-Time Delivery
          </div>
        </div>
        <div className="p-4 sm:p-5 text-center">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            99%
          </div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">
            Lighthouse Scores
          </div>
        </div>
      </div>
    </motion.div>
  );
}
