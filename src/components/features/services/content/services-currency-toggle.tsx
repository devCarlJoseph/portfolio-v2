export interface ServicesCurrencyToggleProps {
  currency: "PHP" | "USD";
  onCurrencyChange: (currency: "PHP" | "USD") => void;
}

export function ServicesCurrencyToggle({
  currency,
  onCurrencyChange,
}: ServicesCurrencyToggleProps) {
  return (
    <div className="flex items-center justify-center sm:justify-end gap-2.5">
      <span className="font-mono text-xs text-muted-foreground font-medium">
        Display Currency:
      </span>
      <div
        className="flex items-center rounded-lg border border-border/80 bg-muted/40 p-0.5"
        role="group"
        aria-label="Select pricing currency"
      >
        <button
          type="button"
          onClick={() => onCurrencyChange("PHP")}
          className={`rounded-md px-3 py-1 font-mono text-xs font-semibold transition-all cursor-pointer ${
            currency === "PHP"
              ? "bg-foreground text-background shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          PHP (₱)
        </button>
        <button
          type="button"
          onClick={() => onCurrencyChange("USD")}
          className={`rounded-md px-3 py-1 font-mono text-xs font-semibold transition-all cursor-pointer ${
            currency === "USD"
              ? "bg-foreground text-background shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          USD ($)
        </button>
      </div>
    </div>
  );
}
