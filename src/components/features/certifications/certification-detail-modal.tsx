import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Trophy,
  CheckCircle2,
  Calendar,
  Building,
  Award,
  Layers,
} from "lucide-react";
import type { Certification } from "@/data/certifications";

interface CertificationDetailModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export function CertificationDetailModal({
  cert,
  onClose,
}: CertificationDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (cert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-2xl rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 p-6 sm:p-8 border-b border-border/70 bg-muted/20">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-foreground px-2.5 py-0.5 font-mono text-[10.5px] font-bold text-background uppercase">
                  {cert.badge}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {cert.category}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {cert.title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <Building className="h-3.5 w-3.5" />
                <span>{cert.issuer}</span>
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-border bg-card p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-140px)] overflow-y-auto">
            {/* Summary & Citation */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Official Citation & Description
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>
            </div>

            {/* Impact Metrics */}
            {cert.impactMetrics && (
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl border border-border/80 bg-muted/30">
                {cert.impactMetrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <span className="block font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground">
                      {metric.label}
                    </span>
                    <span className="block text-sm sm:text-base font-bold text-foreground mt-0.5">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Evaluation Criteria Pillars */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                <Trophy className="h-3.5 w-3.5 text-foreground" />
                <span>Evaluation Criteria & Adjudication Pillars</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cert.evaluationPillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 rounded-lg border border-border/70 bg-card p-3 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground mt-0.5" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Technologies Applied */}
            <div className="space-y-3 border-t border-border/60 pt-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5" />
                <span>Verified Skills & Stack</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border/80 bg-muted/40 px-2.5 py-1 font-mono text-[11px] font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Metadata Info */}
            <div className="flex items-center justify-between pt-4 border-t border-border/60 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                Conferred: {cert.date}
              </span>
              <span className="flex items-center gap-1 text-foreground font-semibold">
                <Award className="h-3.5 w-3.5" />
                Status: Conferred & Verified
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
