import { motion } from "motion/react";
import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

const CORE_COURSES = [
  "Advanced Data Structures & Algorithms",
  "Relational Database Design & SQL",
  "Object-Oriented Programming & Design Patterns",
  "Web Application Engineering & RESTful APIs",
  "Operating Systems & Computer Networks",
  "Software Testing & Quality Assurance",
];

export function AboutEducationDegreeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-dashed border-border/90 bg-card p-6 sm:p-8 shadow-xs"
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
                Cordova Public College
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-border bg-muted/30 px-3 py-1 font-mono text-xs text-muted-foreground font-semibold">
            <Calendar className="h-3 w-3" />
            <span>2024 — Present</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground mb-5">
          Currently pursuing a Bachelor of Science in Information Technology at Cordova Public College, with coursework covering data structures, relational database modeling, software architecture, web application development, and systems analysis.
        </p>

        {/* Core Coursework */}
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-2.5">
            Core Coursework & Competencies
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {CORE_COURSES.map((course, i) => (
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
  );
}
