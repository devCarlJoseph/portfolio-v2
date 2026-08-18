import { useState, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Send,
  CheckCircle2,
  Code2,
  ArrowUpRight,
  Shield,
  Clock,
} from "lucide-react";
import { ContactMapCard } from "@/components/features/contact/contact-map-card";

interface ContactFormSectionProps {
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

export function ContactFormSection({
  selectedEngagement = "web-development",
  onEngagementChange,
}: ContactFormSectionProps) {
  const formId = useId();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    engagement: selectedEngagement,
    budget: "₱50k — ₱150k ($1k–$3k)",
    message: "",
  });

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
    <section id="contact-form" className="space-y-6 sm:space-y-8 pt-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border/60 pb-5 text-center sm:text-left"
      >
        <div className="space-y-1">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            Direct Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            get in touch
          </h2>
        </div>

        {/* Live Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-medium text-foreground self-center sm:self-auto shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>Available for new client projects</span>
        </div>
      </motion.div>

      {/* Main Grid: Left Column (Direct Contacts & Location Map) + Right Column (Contact Form) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column (5 cols): Direct Contacts & Mapcn Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 space-y-5"
        >
          {/* Direct Contact Card */}
          <div className="rounded-2xl border border-dashed border-border/90 bg-card p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Direct Contact
              </h3>
              <span className="font-mono text-[10.5px] text-muted-foreground">
                SLA &lt; 24 hrs
              </span>
            </div>

            <div className="space-y-3">
              {/* Direct Mailto Button */}
              <a
                href="mailto:dev.carljoseph@gmail.com?subject=Project%20Inquiry%20from%20Portfolio"
                className="w-full flex items-center justify-between gap-2 rounded-xl bg-foreground p-3 text-background transition-all hover:opacity-90 active:scale-[0.99] group shadow-xs"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background/20 text-background">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 text-left">
                    <span className="block font-mono text-[10px] uppercase tracking-wider opacity-80">
                      Send Email Directly
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold truncate">
                      dev.carljoseph@gmail.com
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/devCarlJoseph"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 rounded-xl border border-border/80 bg-muted/20 p-2.5 text-left transition-colors hover:bg-muted/50 group"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-foreground" />
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground">
                    github.com/devCarlJoseph
                  </span>
                </div>
                <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-60 group-hover:opacity-100" />
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-3 border-t border-border/50 flex flex-wrap gap-2 text-[11px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-foreground" />
                NDA & IP Transfer
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-foreground" />
                Async-friendly
              </span>
            </div>
          </div>

          {/* Interactive Location Map Card (Poblacion, Cordova, Cebu) */}
          <ContactMapCard />
        </motion.div>

        {/* Right Column (7 cols): Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 rounded-2xl border border-dashed border-border/90 bg-card p-6 sm:p-8 shadow-sm"
        >
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
                    Thank you for reaching out, {formData.name || "there"}. I will review your project requirements and respond within 24 hours.
                  </p>
                </div>
                <button
                  type="button"
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
                  className="mt-2 rounded-xl border border-border bg-muted/40 px-4 py-2 font-mono text-xs font-semibold text-foreground hover:bg-muted cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit} className="space-y-5">
                {/* Service / Engagement Selector */}
                <div className="space-y-2">
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Project Type / Service Needed
                  </label>
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
                    <label
                      htmlFor={`${formId}-name`}
                      className="block font-mono text-xs font-semibold text-foreground"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={`${formId}-name`}
                      type="text"
                      required
                      placeholder="e.g. Alex Reyes"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full rounded-xl border border-border bg-muted/20 px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor={`${formId}-email`}
                      className="block font-mono text-xs font-semibold text-foreground"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
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
                      className="w-full rounded-xl border border-border bg-muted/20 px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                    />
                  </div>
                </div>

                {/* Budget Range Selector */}
                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formId}-budget`}
                    className="block font-mono text-xs font-semibold text-foreground"
                  >
                    Target Budget / Scope
                  </label>
                  <select
                    id={`${formId}-budget`}
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        budget: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border bg-muted/20 px-3.5 py-2.5 text-xs sm:text-sm text-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                  >
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range} className="bg-card text-foreground">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label
                    htmlFor={`${formId}-message`}
                    className="block font-mono text-xs font-semibold text-foreground"
                  >
                    Project Details & Goals <span className="text-red-500">*</span>
                  </label>
                  <textarea
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
                    className="w-full rounded-xl border border-border bg-muted/20 px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-y min-h-[100px]"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-xs sm:text-sm font-semibold text-background transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-50 cursor-pointer shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Sending your inquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
