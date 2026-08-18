import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SERVICE_FAQS } from "@/data/services";

export function ServicesFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Section Header */}
      <div className="flex items-center gap-2 border-b border-border/60 pb-3">
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground font-semibold">
          03 — Pricing & Engagement FAQs
        </span>
      </div>

      <div className="space-y-3 max-w-4xl mx-auto">
        {SERVICE_FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="overflow-hidden rounded-xl border border-dashed border-border/90 bg-card shadow-2xs transition-colors hover:border-foreground/40"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-foreground">
                    {faq.q}
                  </span>
                </div>

                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-muted/30 text-muted-foreground transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-foreground" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-border/40">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
