import { ArrowUp, Code, Mail, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/70 bg-card text-foreground mt-auto select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-border/60">
          {/* Brand & Identity (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <NavLink to="/" className="inline-flex items-center gap-3 group">
              <img
                src="/1.png"
                alt="Carl Joseph Logo"
                className="h-10 w-auto object-contain transition-all group-hover:scale-105 dark:brightness-0 dark:invert"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-tight text-foreground font-sans">
                  Carl Joseph
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  Full-Stack & Mobile Engineer
                </span>
              </div>
            </NavLink>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              Engineering high-performance web applications, cross-platform
              mobile systems, and pixel-crafted user interfaces with modern
              architectures.
            </p>

            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Navigation Links (Col 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Navigation
            </span>
            <nav className="flex flex-col space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Me", to: "/about" },
                { label: "Featured Projects", to: "/projects" },
                { label: "Services", to: "/services" },
                { label: "Certifications", to: "/certifications" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Socials & Connect (Col 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Connect & Social
            </span>
            <div className="flex flex-col space-y-2">
              <a
                href="https://github.com/devCarlJoseph"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between rounded-lg border border-border bg-muted/30 px-3 py-2 text-xs font-medium text-foreground transition-all hover:bg-muted"
              >
                <div className="flex items-center gap-2">
                  <Code className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground" />
                  <span>GitHub (@devCarlJoseph)</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <NavLink
                to="/contact"
                className="group inline-flex items-center justify-between rounded-lg border border-border bg-muted/30 px-3 py-2 text-xs font-medium text-foreground transition-all hover:bg-muted"
              >
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground" />
                  <span>Send a Message</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} Carl Joseph. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>GMT+8 • Manila, PH</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
