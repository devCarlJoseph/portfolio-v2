import { motion } from "motion/react";
import { Search, Compass, Rocket, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Discovery & Alignment",
    desc: "A quick exchange to unpack your product vision, timeline, technical requirements, and core constraints.",
    icon: Search,
  },
  {
    step: "02",
    title: "Architecture & Roadmap",
    desc: "Defining the tech stack, database schema, milestone breakdown, and transparent scope agreement.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Iterative Build & Demos",
    desc: "Fast development sprints with live preview deployments, continuous testing, and async status updates.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Launch & Full Handover",
    desc: "Production deployment, complete IP & repository transfer, documentation, and post-launch stability support.",
    icon: ShieldCheck,
  },
];

export function CollaborationWorkflowSection() {
  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-2 border-b border-border/60 pb-5 text-center sm:text-left"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
          Collaboration Workflow
        </span>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          how the process works
        </h2>
        <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground mx-auto sm:mx-0">
          A predictable, transparent engineering workflow designed to minimize friction and deliver reliable software.
        </p>
      </motion.div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.35,
                delay: idx * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col justify-between rounded-xl border border-dashed border-border/90 bg-card p-4 sm:p-5 shadow-2xs transition-all hover:border-foreground/30"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                    {step.step}
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-muted/30 text-foreground">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
