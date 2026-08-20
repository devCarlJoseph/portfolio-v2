import { Mail, Code2, ArrowUpRight, Shield, Clock } from "lucide-react";

export function ContactDirectInfoCard() {
  return (
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
  );
}
