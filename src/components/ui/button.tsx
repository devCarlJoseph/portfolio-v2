import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
    tertiary:
      "bg-transparent text-blue-600 hover:underline px-0 py-0 rounded-none",
  };
  return (
    <button
      className={cn(
        "cursor-pointer inline-flex- items-center justify-center font-medium transitions-colors focus:outline-none px-4 py-1.5 rounded-lg text-sm",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
