import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X, Code2, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "@/components/common/theme-toggle";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Certifications", to: "/certifications" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => { 
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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
                className="h-9 w-auto object-contain transition-all group-hover:scale-105 dark:brightness-0 dark:invert"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation Links (hidden on tablet/mobile) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NAV_LINKS.slice(1).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions: Theme Toggle, Contact CTA, Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* 3-Way Theme Toggle (Desktop & Tablet) */}
            <ThemeToggle variant="compact" />

            {/* Desktop Contact CTA */}
            <NavLink
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background transition-all hover:opacity-90 active:scale-95 shadow-sm"
            >
              <span>Contact</span>
              <ArrowUpRight className="h-3 w-3" />
            </NavLink>

            {/* Mobile/Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all hover:bg-muted active:scale-95 cursor-pointer shadow-xs"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-border/80 shadow-2xl transition-colors">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-7xl mx-auto px-5 py-6 space-y-6 max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for projects</span>
                <span className="text-muted-foreground">•</span>
                <span className="font-mono text-muted-foreground flex items-center gap-0.5">
                  <MapPin className="h-3 w-3" />
                  PH
                </span>
              </div>

              {/* Navigation Links List */}
              <nav className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-muted text-foreground font-bold"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                  </NavLink>
                ))}
              </nav>

              {/* Theme Switcher 3-Way Expanded Pill */}
              <div className="space-y-2 border-t border-border/60 pt-4">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold px-1">
                  Theme Appearance
                </span>
                <ThemeToggle variant="expanded" />
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="flex flex-col gap-2.5 pt-2 border-t border-border/60">
                <NavLink
                  to="/contact"
                  className="flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition-all hover:opacity-90 active:scale-95 shadow-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>Get in Touch / Contact</span>
                </NavLink>

                <a
                  href="https://github.com/devCarlJoseph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-foreground transition-all hover:bg-muted active:scale-95"
                >
                  <Code2 className="h-4 w-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
