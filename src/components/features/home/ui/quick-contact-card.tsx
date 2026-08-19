import { ArrowRight, MessageSquare } from "lucide-react";
import { NavLink } from "react-router-dom";

export function QuickContactCard() {
  return (
    <div className="rounded-xl border border-border/80 bg-muted/30 p-4.5 sm:p-5 space-y-3">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-foreground">
          <MessageSquare className="h-4 w-4" />
        </div>
        <h3 className="text-sm font-bold text-foreground">
          Have a specific question?
        </h3>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Can't find what you're looking for? Reach out directly to discuss your
        project timeline and custom requirements.
      </p>
      <NavLink
        to="/contact"
        className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:bg-muted active:scale-95 shadow-sm"
      >
        <span>Get in Touch</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </NavLink>
    </div>
  );
}
