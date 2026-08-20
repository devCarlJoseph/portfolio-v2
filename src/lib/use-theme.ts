import { useState, useEffect, useCallback, useRef } from "react";

export type ThemeMode = "light" | "dark" | "system";

function resolveIsDark(mode: ThemeMode): boolean {
  return (
    mode === "dark" ||
    (mode === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as ThemeMode) || "system";
  });

  // Track whether this is the initial mount (skip animation)
  const isInitialMount = useRef(true);

  const applyTheme = useCallback((mode: ThemeMode) => {
    const root = document.documentElement;
    if (resolveIsDark(mode)) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const setTheme = useCallback(
    (mode: ThemeMode, event?: React.MouseEvent) => {
      // Check if the resolved appearance actually changes
      const currentIsDark = resolveIsDark(theme);
      const nextIsDark = resolveIsDark(mode);
      const appearanceChanges = currentIsDark !== nextIsDark;

      // If View Transitions API is supported and appearance actually changes, do circle reveal
      if (
        appearanceChanges &&
        !isInitialMount.current &&
        event &&
        "startViewTransition" in document
      ) {
        const x = event.clientX;
        const y = event.clientY;

        // Calculate the max radius needed to cover the entire viewport from click point
        const maxRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );

        const transition = (
          document as unknown as {
            startViewTransition: (cb: () => void) => { ready: Promise<void> };
          }
        ).startViewTransition(() => {
          setThemeState(mode);
          localStorage.setItem("theme", mode);
          applyTheme(mode);
        });

        transition.ready.then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 380,
              easing: "cubic-bezier(0.4, 0, 0.2, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        });
      } else {
        // No animation: just apply immediately
        setThemeState(mode);
        localStorage.setItem("theme", mode);
        applyTheme(mode);
      }
    },
    [theme, applyTheme]
  );

  // Initial mount and system preference listener
  useEffect(() => {
    applyTheme(theme);

    // After first render, allow animations
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, applyTheme]);

  return { theme, setTheme };
}

export function useIsDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const update = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    update();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          update();
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}
