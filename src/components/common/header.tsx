import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="bg-background/85 backdrop-blur-md border-b border-border/70 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex shrink-0 items-center">
            <NavLink to="/" className="flex items-center gap-2.5 group">
              <img
                src="/1.png"
                alt="Carl Joseph Logo"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-5 sm:space-x-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xs sm:text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-xs sm:text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-xs sm:text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                `text-xs sm:text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              Certifications
            </NavLink>
          </nav>

          {/* CTA Action */}
          <div className="flex items-center">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background transition-all hover:opacity-90 active:scale-95 shadow-sm"
            >
              <span>Contact</span>
              <ArrowUpRight className="h-3 w-3" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
