import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2 } from "lucide-react";

export function AboutEducationSection() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border/60 pb-5"
      >
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
              04 — Education & Studies
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
            Academic Background
          </h2>
        </div>

        <p className="max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
          Formal foundations in computer science, software systems, and continuous technology specialization.
        </p>
      </motion.div>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Degree Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs"
        >
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40 text-foreground">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                    Major in Software Engineering & Database Systems
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-border bg-muted/30 px-3 py-1 font-mono text-xs text-muted-foreground font-semibold">
                <Calendar className="h-3 w-3" />
                <span>Graduated</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground mb-5">
              Comprehensive study encompassing data structures, relational database modeling, software architecture, web application development, and systems analysis. Completed with emphasis on building production-ready capstone software.
            </p>

            {/* Core Coursework */}
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2.5">
                Core Coursework & Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Advanced Data Structures & Algorithms",
                  "Relational Database Design & SQL",
                  "Object-Oriented Programming & Design Patterns",
                  "Web Application Engineering & RESTful APIs",
                  "Operating Systems & Computer Networks",
                  "Software Testing & Quality Assurance",
                ].map((course, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-lg border border-border/40 bg-muted/20 px-3 py-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-foreground" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Continuous Learning & Development Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4 shadow-xs"
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
      </div>
    </section>
  );
}
