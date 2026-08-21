import { useState, useId, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronDown, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export interface ContactInquiryFormProps {
  selectedEngagement?: string;
  onEngagementChange?: (id: string) => void;
}

const SERVICE_OPTIONS = [
  { id: "web-development", label: "Full-Stack Web & MVP" },
  { id: "mobile-development", label: "Mobile App (iOS/Android)" },
  { id: "tech-audit", label: "Architecture & Code Audit" },
  { id: "other", label: "General Inquiry" },
];

const BUDGET_RANGES = [
  "Under ₱50k ($1k)",
  "₱50k — ₱150k ($1k–$3k)",
  "₱150k — ₱300k ($3k–$6k)",
  "₱300k+ ($6k+)",
  "Hourly / Flexible",
];

export function ContactInquiryForm({
  selectedEngagement = "web-development",
  onEngagementChange,
}: ContactInquiryFormProps) {
  const formId = useId();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    engagement: selectedEngagement,
    budget: "₱50k — ₱150k ($1k–$3k)",
    message: "",
  });

  useEffect(() => {
    if (selectedEngagement) {
      setFormData((prev) => ({ ...prev, engagement: selectedEngagement }));
    }
  }, [selectedEngagement]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  return (
    <div className="rounded-2xl border border-dashed border-border/90 bg-card p-6 sm:p-8 shadow-sm">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-12 flex flex-col items-center text-center space-y-4"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-500">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground">
                Message Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
                Thank you for reaching out, {formData.name || "there"}. I will
                review your project requirements and respond within 24 hours.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  engagement: "web-development",
                  budget: "₱50k — ₱150k ($1k–$3k)",
                  message: "",
                });
              }}
              className="mt-2 h-auto rounded-xl px-4 py-2 font-mono text-xs font-semibold"
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <form key="form" onSubmit={handleSubmit} className="space-y-5">
            {/* Service / Engagement Selector */}
            <div className="space-y-2">
              <Label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Project Type / Service Needed
              </Label>
              <div className="flex flex-wrap gap-1.5">
                {SERVICE_OPTIONS.map((opt) => {
                  const isSelected = formData.engagement === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          engagement: opt.id,
                        }));
                        onEngagementChange?.(opt.id);
                      }}
                      className={`rounded-lg px-2.5 py-1.5 font-mono text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? "border border-foreground bg-foreground text-background shadow-2xs font-semibold"
                          : "border border-border/80 bg-muted/30 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label
                  htmlFor={`${formId}-name`}
                  className="block font-mono text-xs font-semibold text-foreground"
                >
                  Your Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id={`${formId}-name`}
                  type="text"
                  required
                  placeholder="e.g. Alex Reyes"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="h-10 rounded-xl border-border bg-muted/20 px-3.5 py-2.5 text-xs sm:text-sm placeholder:text-muted-foreground/60 focus-visible:border-foreground focus-visible:ring-1 focus-visible:ring-foreground"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor={`${formId}-email`}
                  className="block font-mono text-xs font-semibold text-foreground"
                >
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id={`${formId}-email`}
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="h-10 rounded-xl border-border bg-muted/20 px-3.5 py-2.5 text-xs sm:text-sm placeholder:text-muted-foreground/60 focus-visible:border-foreground focus-visible:ring-1 focus-visible:ring-foreground"
                />
              </div>
            </div>

            {/* Budget Range Selector (Custom Dropdown) */}
            <div className="space-y-1.5" ref={dropdownRef}>
              <Label
                htmlFor={`${formId}-budget`}
                className="block font-mono text-xs font-semibold text-foreground"
              >
                Target Budget / Scope
              </Label>
              <div className="relative">
                <button
                  id={`${formId}-budget`}
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                  className="flex h-10 w-full items-center justify-between gap-2 rounded-xl border border-border bg-muted/20 px-3.5 py-2 text-xs sm:text-sm text-foreground transition-all outline-none hover:border-foreground/40 focus:border-foreground focus:ring-1 focus:ring-foreground cursor-pointer"
                >
                  <span className="truncate font-medium">
                    {formData.budget}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180 text-foreground" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute z-50 mt-1.5 w-full overflow-hidden rounded-xl border border-border bg-card/95 backdrop-blur-md p-1 shadow-xl"
                      role="listbox"
                    >
                      {BUDGET_RANGES.map((range) => {
                        const isSelected = formData.budget === range;
                        return (
                          <button
                            key={range}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                budget: range,
                              }));
                              setIsDropdownOpen(false);
                            }}
                            className={`flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-xs sm:text-sm transition-colors text-left ${
                              isSelected
                                ? "bg-muted text-foreground font-semibold"
                                : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                            }`}
                          >
                            <span>{range}</span>
                            {isSelected && (
                              <Check className="h-3.5 w-3.5 text-foreground shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-1.5">
              <Label
                htmlFor={`${formId}-message`}
                className="block font-mono text-xs font-semibold text-foreground"
              >
                Project Details & Goals <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id={`${formId}-message`}
                rows={4}
                required
                placeholder="Tell me about your product, desired timeline, tech stack, or problem you want to solve..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                className="resize-y min-h-[100px]"
              />
            </div>

            {/* Submit Action */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-auto py-3.5 text-xs sm:text-sm rounded-xl font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all cursor-pointer shadow-sm"
            >
              {isSubmitting ? (
                <span>Sending your inquiry...</span>
              ) : (
                <>
                  <span>Send Project Inquiry</span>
                </>
              )}
            </Button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
