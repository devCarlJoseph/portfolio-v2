import { motion } from "motion/react";
import {
  Trophy,
  Code2,
  Layers,
  Layout,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import type { Certification } from "@/data/certifications";

interface CertificationMacbookCardProps {
  cert: Certification;
  index: number;
  onSelect: (cert: Certification) => void;
}

export function CertificationMacbookCard({
  cert,
  index,
  onSelect,
}: CertificationMacbookCardProps) {
  // Staggered rotation: alternate slightly for physical badge shelf feel
  const rotations = [-1.5, 1.2, -1.0, 1.5, -1.2];
  const defaultRotation = rotations[index % rotations.length];

  // Helper icon selector
  const renderEmblem = () => {
    switch (cert.iconType) {
      case "trophy":
        return <Trophy className="h-7 w-7 text-foreground" />;
      case "code":
        return <Code2 className="h-7 w-7 text-foreground" />;
      case "layers":
        return <Layers className="h-7 w-7 text-foreground" />;
      case "frontend":
        return <Layout className="h-7 w-7 text-foreground" />;
      case "cloud":
        return <Cloud className="h-7 w-7 text-foreground" />;
      default:
        return <Code2 className="h-7 w-7 text-foreground" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotate: defaultRotation }}
      whileInView={{ opacity: 1, y: 0, rotate: defaultRotation }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{
        rotate: 0,
        y: -6,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onSelect(cert)}
      className="group relative flex w-full max-w-[280px] flex-col justify-between rounded-2xl border border-dashed border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:border-foreground/40 hover:shadow-xl cursor-pointer select-none"
    >
      {/* Mini macOS Window Header Dots */}
      <div className="flex items-center justify-between pb-3 border-b border-border/40">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground font-semibold">
          {cert.date}
        </span>
      </div>

      {/* Center Content: Logo + Title + Issuer */}
      <div className="my-6 flex flex-col items-center text-center space-y-3.5">
        {/* Certificate Logo Emblem Container */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-foreground shadow-2xs transition-transform duration-300 group-hover:scale-110">
          {renderEmblem()}

          {/* Ambient Glow */}
          <div className="absolute -inset-1 rounded-xl bg-foreground/5 opacity-0 blur group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground leading-snug">
            {cert.title}
          </h3>
          <p className="font-mono text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
            {cert.issuerShort}
          </p>
        </div>
      </div>

      {/* Bottom Action: ⟨ VERIFY ⟩ */}
      <div className="pt-3 border-t border-border/40 flex items-center justify-center">
        <div className="inline-flex items-center gap-1 font-mono text-[11.5px] font-medium text-muted-foreground transition-colors group-hover:text-foreground">
          <span className="text-muted-foreground/60">⟨</span>
          <span className="tracking-widest uppercase text-[11px]">VERIFY</span>
          <span className="text-muted-foreground/60">⟩</span>
          <ArrowUpRight className="h-3 w-3 opacity-0 -ml-1 transition-all group-hover:opacity-100 group-hover:ml-0.5" />
        </div>
      </div>
    </motion.div>
  );
}
