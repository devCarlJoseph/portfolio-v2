import { cn } from "@/lib/cn";

export function Input({
  type,
  className,
  ...props
}: React.ComponentProps<"input">) {
  return <input type={type} data-slot="input" className={cn("h-8 w-full min-w-0 rounded-lg border border-gray-300 bg-transparent px-2.5 py-1 text-base ")} {...props} />;
}
