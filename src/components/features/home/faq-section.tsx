import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CategoryFilterCard } from "./ui/category-filters-card";
import { QuickContactCard } from "./ui/quick-contact-card";

interface FaqItem {
  id: string;
  category: "all" | "tech" | "process" | "pricing";
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "tech",
    question: "What tech stack do you primarily use for client projects?",
    answer:
      "I build full-stack web applications with Next.js, React, TypeScript, Node.js, and PostgreSQL or Supabase. For mobile apps (iOS & Android), I use React Native / Expo and SwiftUI. Styling and animations are crafted with Tailwind CSS and Motion for maximum performance and fluid 60fps interactions.",
  },
  {
    id: "faq-2",
    category: "process",
    question: "How does the project process work from start to finish?",
    answer:
      "Every engagement follows a proven 4-stage sprint: 1) Discovery & technical scoping to define core requirements; 2) UI/UX wireframing & prototyping in Figma; 3) Iterative development with live staging previews so you can test weekly builds; 4) Final QA testing, SEO audit, and production deployment.",
  },
  {
    id: "faq-3",
    category: "process",
    question: "How long does a typical project take to build and deploy?",
    answer:
      "A high-converting landing page or campaign website is typically delivered within 1 to 2 weeks. Full-featured SaaS web applications or cross-platform mobile apps generally take 3 to 6 weeks, depending on API integrations, auth requirements, and scope complexity.",
  },
  {
    id: "faq-4",
    category: "pricing",
    question: "How do payments and project milestones work?",
    answer:
      "Projects are structured around transparent milestones — typically 50% upfront to initiate work and 50% upon final delivery and deployment sign-off. For larger multi-phase applications, we can arrange 33/33/34 milestones. Invoices and contracts are provided upfront with zero hidden fees.",
  },
  {
    id: "faq-5",
    category: "process",
    question: "Do you provide post-launch support and warranty?",
    answer:
      "Yes. Every completed project includes a 30-day post-launch warranty covering any bug fixes, technical adjustments, and minor copy updates. For long-term continuous feature development and maintenance, I also offer monthly retainer packages.",
  },
  {
    id: "faq-6",
    category: "tech",
    question: "Do I get full ownership of the source code and assets?",
    answer:
      "100% yes. Upon project completion and final payment, complete ownership of all source code repositories, design files, deployment environments, and documentation is transferred directly to your organization.",
  },
  {
    id: "faq-7",
    category: "tech",
    question: "Can you work with existing Figma designs or legacy codebases?",
    answer:
      "Yes. If you already have design mockups in Figma, I will translate them into pixel-perfect, accessible code. If you have an existing codebase that needs refactoring, Next.js migration, or performance optimization, I can jump in seamlessly.",
  },
];

export function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filteredFaqs =
    selectedCategory === "all"
      ? FAQS
      : FAQS.filter((faq) => faq.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 md:py-16 border-t border-border/50">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border/60 pb-5"
      >
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
              03 — FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <p className="max-w-md text-xs sm:text-sm leading-relaxed text-muted-foreground">
          Clear answers about my development process, tech stack, timelines, and
          deliverables.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-4 space-y-5">
          <CategoryFilterCard />
          <QuickContactCard />
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-8 space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {filteredFaqs.map((faq, i) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-xl border border-border/80 bg-card overflow-hidden transition-colors hover:border-foreground/25"
                  >
                    {/* Accordion Trigger */}
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-semibold tracking-tight text-foreground">
                        {faq.question}
                      </span>
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-foreground text-background border-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" />
                        ) : (
                          <Plus className="h-3.5 w-3.5" />
                        )}
                      </div>
                    </button>

                    {/* Accordion Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 border-t border-border/50">
                            <p className="pt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
