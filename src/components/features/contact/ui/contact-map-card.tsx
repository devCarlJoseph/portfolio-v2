import { useState, useEffect } from "react";
import { MapPin, Globe, ExternalLink, Compass } from "lucide-react";

export function ContactMapCard() {
  const [cebuTime, setCebuTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Manila",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
      setCebuTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-dashed border-border/90 bg-card shadow-sm transition-all hover:border-foreground/30">
      {/* Map Header */}
      <div className="flex items-center justify-between border-b border-border/70 bg-muted/30 px-4 py-3">
        <div className="flex items-center gap-2 font-mono text-xs text-foreground font-semibold">
          <MapPin className="h-3.5 w-3.5 text-foreground" />
          <span>Base Location</span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{cebuTime || "UTC+8"}</span>
        </div>
      </div>

      {/* Stylized Interactive Map Frame */}
      <div className="relative h-44 w-full bg-muted/40 overflow-hidden">
        {/* OpenStreetMap Embed centered on Poblacion, Cordova, Cebu */}
        <iframe
          title="Location Map - Poblacion, Cordova, Cebu"
          src="https://www.openstreetmap.org/export/embed.html?bbox=123.9300%2C10.2350%2C123.9700%2C10.2700&layer=mapnik&marker=10.2520%2C123.9515"
          className="h-full w-full border-0 opacity-80 grayscale contrast-125 dark:invert dark:hue-rotate-180 dark:contrast-100 transition-opacity hover:opacity-100"
          loading="lazy"
        />

        {/* Center Target Pin Marker Overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <span className="absolute h-8 w-8 rounded-full bg-foreground/20 animate-ping" />
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-background bg-foreground text-background shadow-lg">
              <Compass className="h-4 w-4 animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Bottom Floating Badge */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between rounded-lg border border-border/80 bg-background/90 px-3 py-1.5 backdrop-blur-md text-[11px] font-mono">
          <span className="font-semibold text-foreground truncate">
            Poblacion, Cordova, Cebu
          </span>
          <span className="text-muted-foreground shrink-0 text-[10px]">
            10.25° N, 123.95° E
          </span>
        </div>
      </div>

      {/* Location Details Footer */}
      <div className="p-4 space-y-2 border-t border-border/60">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5" />
            <span>Philippines • Central Visayas</span>
          </span>

          <a
            href="https://maps.google.com/?q=Poblacion,+Cordova,+Cebu,+Philippines"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-foreground hover:underline"
          >
            <span>Open in Maps</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
