import { motion } from "motion/react";
import { BookOpen, Award } from "lucide-react";

export function AboutEducationLearningCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="lg:col-span-4 flex flex-col rounded-2xl border border-dashed border-border/90 bg-card p-6 sm:p-8 space-y-4 shadow-xs"
    >
      <div className="flex items-center gap-3 pb-3 border-b border-border/60">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted/40 text-foreground">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-foreground">
            Lifelong Learning
          </h3>
          <p className="font-mono text-[11px] text-muted-foreground">
            Self-Directed Growth
          </p>
        </div>
      </div>

      <div className="space-y-3 flex-1 text-xs text-muted-foreground leading-relaxed">
        <div className="rounded-xl border border-border/50 bg-muted/20 p-3">
          <div className="flex items-center gap-1.5 font-bold text-foreground mb-1">
            <Award className="h-3.5 w-3.5 text-foreground" />
            <span>Modern React & Next.js Architecture</span>
          </div>
          <p className="text-[11px]">
            Deep exploration into React Server Components, streaming SSR, and edge compute models.
          </p>
        </div>

        <div className="rounded-xl border border-border/50 bg-muted/20 p-3">
          <div className="flex items-center gap-1.5 font-bold text-foreground mb-1">
            <Award className="h-3.5 w-3.5 text-foreground" />
            <span>Full-Stack Cloud & Supabase</span>
          </div>
          <p className="text-[11px]">
            Specialized in PostgreSQL Row-Level Security, vector embeddings, and real-time event sync.
          </p>
        </div>

        <div className="rounded-xl border border-border/50 bg-muted/20 p-3">
          <div className="flex items-center gap-1.5 font-bold text-foreground mb-1">
            <Award className="h-3.5 w-3.5 text-foreground" />
            <span>Mobile UX with React Native</span>
          </div>
          <p className="text-[11px]">
            Mastery of offline SQLite caching, Expo EAS continuous delivery, and native gesture handlers.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
