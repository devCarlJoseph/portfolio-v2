import { ArrowUp } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/70 bg-card text-foreground mt-auto select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 pb-12 border-b border-border/60">
          {/* Brand & Identity (Left) */}
          <div className="max-w-sm space-y-4">
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

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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

          {/* Links Grid (Right) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {/* Navigation */}
            <div className="space-y-3">
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

            {/* Contact */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Contact
              </span>
              <div className="flex flex-col space-y-2 text-xs sm:text-sm text-muted-foreground">
                <a
                  href="mailto:carljosephsumagang09@gmail.com"
                  className="hover:text-foreground transition-colors break-all sm:break-normal w-fit"
                >
                  carljosephsumagang09@gmail.com
                </a>
                <span>Cordova, Cebu, Philippines</span>
                <span>GMT+8 • Manila, PH</span>
              </div>
            </div>

            {/* Connect & Social */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Connect & Social
              </span>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://github.com/devCarlJoseph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  GitHub
                </a>
                <NavLink
                  to="/contact"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  Send a Message
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} Carl Joseph. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
