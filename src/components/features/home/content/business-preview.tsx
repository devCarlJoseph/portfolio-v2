import type { StudioProps } from "@/components/features/home/types/studio";
import { NavLink } from "react-router-dom";
import { Check, Clock, Send } from "lucide-react";

export function BusinessPreview({
  selectedProjectType,
  config,
  selectedPlan,
  setSelectedPlan,
  bookingSent,
  setBookingSent,
}: StudioProps) {
  return (
    <>
      {selectedProjectType === "business" && (
        <div className="space-y-3.5">
          {/* Business Hero */}
          <div className="text-center py-1">
            <span className="inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              {config.businessSite.badge}
            </span>
            <h3 className="mt-1.5 text-sm sm:text-base font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {config.businessSite.headline}
            </h3>
            <p className="mt-1 text-[10px] text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto">
              {config.businessSite.subheadline}
            </p>
          </div>

          {/* 3 Outcome Metrics */}
          <div className="grid grid-cols-3 gap-2">
            {config.businessSite.metrics?.map((m, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-neutral-200/70 bg-neutral-50/60 p-2 text-center dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <p className="font-mono text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                  {m.value}
                </p>
                <p className="text-[8px] text-neutral-500 uppercase">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* 3 Service Offerings */}
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
              What We Build & Deliver
            </span>
            {config.businessSite.services?.map((serv, i) => (
              <div
                key={i}
                className="rounded-lg border border-neutral-200/70 bg-neutral-50/50 p-2.5 dark:border-neutral-800 dark:bg-neutral-900/40 text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-neutral-900 dark:text-white">
                    {serv.title}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <Clock className="h-2.5 w-2.5" />
                    {serv.turnaround}
                  </span>
                </div>
                <p className="mt-0.5 text-[9px] text-neutral-500 dark:text-neutral-400">
                  {serv.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing Sprint Estimator */}
          <div className="rounded-lg border border-neutral-200/80 bg-neutral-50/50 p-3 dark:border-neutral-800 dark:bg-neutral-900/50">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              Select Your Project Sprint
            </span>

            <div className="grid grid-cols-2 gap-2">
              {config.businessSite.plans?.map((plan, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`rounded-lg border p-2 text-left transition-all cursor-pointer ${
                    selectedPlan === plan.name
                      ? "border-neutral-900 bg-white shadow-xs dark:border-white dark:bg-neutral-800"
                      : "border-neutral-200/60 bg-neutral-100/50 dark:border-neutral-800 dark:bg-neutral-900"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-neutral-900 dark:text-white">
                      {plan.name}
                    </span>
                    <span className="font-mono text-[9px] font-semibold text-emerald-600">
                      {plan.timeline}
                    </span>
                  </div>
                  <p className="mt-0.5 font-mono text-xs font-bold text-neutral-900 dark:text-white">
                    {plan.price}
                  </p>
                  <div className="mt-1 space-y-0.5">
                    {plan.features.slice(0, 2).map((feat, fidx) => (
                      <p
                        key={fidx}
                        className="text-[8px] text-neutral-500 flex items-center gap-1"
                      >
                        <Check className="h-2 w-2 text-emerald-500" />
                        <span>{feat}</span>
                      </p>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* Booking Action Button */}
            <div className="mt-2.5">
              {bookingSent ? (
                <div className="rounded bg-emerald-50 py-1.5 text-center text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300">
                  ✓ Sprint selected! Redirecting to contact...
                </div>
              ) : (
                <NavLink
                  to="/contact"
                  onClick={() => setBookingSent(true)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded bg-neutral-900 py-1.5 text-[10px] font-medium text-white shadow-xs hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 transition-colors"
                >
                  <span>Book Discovery Call ({selectedPlan})</span>
                  <Send className="h-3 w-3" />
                </NavLink>
              )}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="rounded-lg border border-neutral-200/70 bg-white p-2.5 dark:border-neutral-800 dark:bg-neutral-900 text-left">
            <p className="text-[9px] italic text-neutral-600 dark:text-neutral-300 leading-relaxed">
              "{config.businessSite.testimonial.quote}"
            </p>
            <div className="mt-1 flex items-center justify-between text-[8px] font-mono text-neutral-400">
              <span className="font-bold text-neutral-800 dark:text-neutral-200">
                {config.businessSite.testimonial.author}
              </span>
              <span>{config.businessSite.testimonial.company}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
