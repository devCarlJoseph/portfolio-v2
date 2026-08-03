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
        "flex flex-col overflow-hidden border border-[#3b3b3b] rounded-xl text-white bg-[#1f1f1f]",
        size === "default" ? "gap-2" : "gap-3",
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
    <div className={cn("flex flex-col py-3 px-4", className)} {...props} />
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
    <div className={cn("flex flex-col pb-2 px-4", className)} {...props} />
  );
}

export function CardDescription({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div className={cn("text-sm text-white/50", className)}
    {...props}
    />
  );
}

export function CardFooter({className, ...props}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center border-[#3b3b3b] rounded-b-xl border-t py-3 bg-black/50", className)}
    {...props}
    />
  );
}
