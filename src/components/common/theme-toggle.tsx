import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, type ThemeMode } from "@/lib/use-theme";

interface ThemeToggleProps {
  variant?: "compact" | "expanded";
  className?: string;
}

export function ThemeToggle({
  variant = "compact",
  className = "",
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const options: { mode: ThemeMode; label: string; icon: typeof Sun }[] = [
    { mode: "light", label: "Light", icon: Sun },
    { mode: "system", label: "System", icon: Monitor },
    { mode: "dark", label: "Dark", icon: Moon },
  ];

  if (variant === "expanded") {
    return (
      <div
        className={`flex items-center rounded-xl border border-border bg-muted/40 p-1 ${className}`}
      >
        {options.map(({ mode, label, icon: Icon }) => {
          const isActive = theme === mode;
          return (
            <button
              key={mode}
              type="button"
              onClick={(e) => setTheme(mode, e)}
              aria-label={`Switch to ${label} theme`}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-1.5 px-2.5 text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Compact 3-segment pill for header
  return (
    <div
      className={`flex items-center rounded-lg border border-border/80 bg-muted/40 p-0.5 ${className}`}
      role="group"
      aria-label="Select theme"
    >
      {options.map(({ mode, label, icon: Icon }) => {
        const isActive = theme === mode;
        return (
          <button
            key={mode}
            type="button"
            onClick={(e) => setTheme(mode, e)}
            title={`Switch to ${label} theme`}
            aria-label={`${label} theme`}
            className={`flex h-7 w-7 items-center justify-center rounded-md transition-all cursor-pointer ${
              isActive
                ? "bg-card text-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        );
      })}
    </div>
  );
}
