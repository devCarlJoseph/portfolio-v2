import { motion } from "motion/react";
import { ShieldCheck, Code2, Award, Clock } from "lucide-react";

export function ServicesGuaranteesStrip() {
  const guarantees = [
    {
      title: "100% IP & Code Ownership",
      desc: "Full source code, repositories, and assets are transferred completely to you with zero vendor lock-in.",
      icon: ShieldCheck,
    },
    {
      title: "30-Day Post-Launch SLA",
      desc: "Complimentary post-launch maintenance, bug fixes, and operational stability checks included in every package.",
      icon: Award,
    },
    {
      title: "Milestone-Based Billing",
      desc: "Transparent payment schedules tied strictly to completed demo deliverables and agreed project milestones.",
      icon: Clock,
    },
    {
      title: "Clean TypeScript Codebase",
      desc: "Engineered with strict typing, modular architectures, and 98+ Google Lighthouse performance benchmarks.",
      icon: Code2,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 border-b border-border/60 pb-3">
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
          02 — Engineering Commitments
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {guarantees.map((item, idx) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.35,
                delay: idx * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-between rounded-xl border border-dashed border-border/90 bg-card p-5 shadow-2xs transition-all hover:border-foreground/40"
            >
              <div className="space-y-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted/40 text-foreground">
                  <Icon className="h-4 w-4" />
                </div>

                <h3 className="text-sm sm:text-base font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
