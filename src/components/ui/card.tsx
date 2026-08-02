import * as React from "react";

import { cn } from "@/lib/cn";

export function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden border border-gray-200 rounded-xl",
        size === "default" ? "gap-4 p-4" : "gap-3 p-3",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col py-3 px-3", className)} {...props} />
  );
}

export function CardTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("text-md font-medium", className)} {...props} />;
}

export function CardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col px-3 py-3", className)} {...props} />
  );
}
