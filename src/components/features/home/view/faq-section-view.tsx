import { useState, useMemo } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS, type FaqCategory } from "@/components/features/home/types/faq";
import { FaqHeader } from "@/components/features/home/content/faq-header";
import { CategoryFilterCard } from "@/components/features/home/ui/category-filters-card";
import { QuickContactCard } from "@/components/features/home/ui/quick-contact-card";

export function FaqSectionView() {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>("all");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filteredFaqs = useMemo(() => {
    if (selectedCategory === "all") return FAQS;
    return FAQS.filter((faq) => faq.category === selectedCategory);
  }, [selectedCategory]);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 md:py-16 border-t border-border/50">
      <FaqHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="lg:col-span-4 space-y-5">
          <CategoryFilterCard
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
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
