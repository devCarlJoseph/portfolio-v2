import type { StudioProps } from "@/components/features/home/types/studio";
import { Activity } from "lucide-react";

export function SaasPreview({ selectedProjectType, config }: StudioProps) {
  return (
    <>
      {selectedProjectType === "saas" && (
        <div className="space-y-3.5">
          {/* Platform Status Header */}
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2 dark:border-neutral-800/60">
            <div>
              <h3 className="font-bold text-xs text-neutral-900 dark:text-white">
                {config.saasApp.platformName}
              </h3>
              <p className="text-[9px] text-neutral-500">
                Live Production Cloud Dashboard
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-400">
              <Activity className="h-2.5 w-2.5 animate-pulse" />
              {config.saasApp.status}
            </span>
          </div>

          {/* 4 Core Metrics Grid */}
          <div className="grid grid-cols-4 gap-1.5">
            <div className="rounded-md border border-neutral-200/70 bg-neutral-50/60 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900/50">
              <p className="text-[8px] text-neutral-500 uppercase">
                Monthly MRR
              </p>
              <p className="font-mono text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                {config.saasApp.mrr}
              </p>
              <span className="text-[8px] font-mono text-emerald-600 font-bold">
                {config.saasApp.mrrGrowth}
              </span>
            </div>

            <div className="rounded-md border border-neutral-200/70 bg-neutral-50/60 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900/50">
              <p className="text-[8px] text-neutral-500 uppercase">
                Active Users
              </p>
              <p className="font-mono text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                {config.saasApp.activeUsers}
              </p>
              <span className="text-[8px] font-mono text-neutral-400">
                Realtime
              </span>
            </div>

            <div className="rounded-md border border-neutral-200/70 bg-neutral-50/60 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900/50">
              <p className="text-[8px] text-neutral-500 uppercase">
                Avg Latency
              </p>
              <p className="font-mono text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {config.saasApp.apiLatency}
              </p>
              <span className="text-[8px] font-mono text-emerald-600">
                Sub-30ms
              </span>
            </div>

            <div className="rounded-md border border-neutral-200/70 bg-neutral-50/60 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900/50">
              <p className="text-[8px] text-neutral-500 uppercase">
                Uptime SLA
              </p>
              <p className="font-mono text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                {config.saasApp.uptime}
              </p>
              <span className="text-[8px] font-mono text-emerald-600">
                High Availability
              </span>
            </div>
          </div>

          {/* Active API Microservices List */}
          <div className="rounded-lg border border-neutral-200/80 bg-neutral-50/40 p-2.5 dark:border-neutral-800 dark:bg-neutral-900/40">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                API Endpoints & Websockets
              </span>
              <span className="font-mono text-[9px] text-neutral-400">
                Edge Routed
              </span>
            </div>

            <div className="space-y-1.5">
              {config.saasApp.endpoints?.map((ep, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded border border-neutral-200/60 bg-white px-2 py-1.5 text-[10px] dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="flex items-center gap-1.5 font-mono">
                    <span
                      className={`rounded px-1 py-0.2 text-[8px] font-bold ${
                        ep.method === "WS"
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                          : ep.method === "POST"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                            : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {ep.path}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[9px]">
                    <span className="text-neutral-400">{ep.latency}</span>
                    <span className="text-emerald-600 font-semibold">
                      {ep.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RBAC Team Permissions */}
          <div className="rounded-lg border border-neutral-200/80 bg-neutral-50/40 p-2.5 dark:border-neutral-800 dark:bg-neutral-900/40">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                Role-Based Access Control (RBAC)
              </span>
              <span className="font-mono text-[9px] text-emerald-600">
                Enterprise Ready
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {config.saasApp.teamMembers?.map((member, i) => (
                <div
                  key={i}
                  className="rounded border border-neutral-200/60 bg-white p-2 text-left dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <p className="text-[10px] font-bold text-neutral-900 dark:text-white truncate">
                    {member.name}
                  </p>
                  <p className="text-[8px] text-neutral-500">{member.role}</p>
                  <span className="inline-block mt-1 rounded bg-neutral-100 px-1 py-0.2 font-mono text-[7px] font-bold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {member.access}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
