import { useState, useEffect } from "react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export function Preloader({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<
    "loading" | "logo-out" | "redirecting" | "exited"
  >("loading");

  useEffect(() => {
    let rafId: number;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(next);

      if (next < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("logo-out"), 180);
        setTimeout(() => setPhase("redirecting"), 550);
        setTimeout(() => setPhase("exited"), 1550);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const showPreloader = phase !== "exited";
  const showLogo = phase === "loading";
  const showRedirect = phase === "redirecting";

  return (
    <>
      <div
        data-phase={phase}
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-700 ease-in-out ${
          showPreloader ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={phase !== "loading"}
      >
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.10}
          duration={0.5}
          repeatDelay={0.5}
          className="absolute inset-1 h-full w-full mask-[radial-gradient(500px_circle_at_center,white,transparent)]"
        />

        <div
          className={`relative z-10 flex flex-col items-center gap-2 transition-opacity duration-500 ${
            showLogo ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src="/1.png"
            alt="CJS"
            className="preloader-logo h-24 w-auto"
          />
          <div className="w-64 md:w-80">
            <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <span>Loading</span>
              <span>{progress}%</span>
            </div>
            <div className="h-0.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="preloader-progress-bar h-full rounded-full bg-foreground"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 transition-opacity duration-500 ${
            showRedirect ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Redirecting to portfolio
          </p>
          <div className="flex gap-1.5">
            <span className="preloader-dot h-1 w-1 rounded-full bg-muted-foreground" />
            <span className="preloader-dot h-1 w-1 rounded-full bg-muted-foreground [animation-delay:0.15s]" />
            <span className="preloader-dot h-1 w-1 rounded-full bg-muted-foreground [animation-delay:0.3s]" />
          </div>
        </div>
      </div>

      <div
        className={`transition-opacity duration-700 ease-in-out ${
          phase === "exited" ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
