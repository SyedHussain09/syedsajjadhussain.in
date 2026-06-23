import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg" | "icon";
};

const variants = {
  primary:
    "border border-border bg-white text-foreground hover:border-[rgba(17,19,26,0.18)] hover:bg-[#fffdf8]",
  secondary:
    "border border-border bg-white text-foreground hover:border-[rgba(17,19,26,0.18)] hover:bg-[#f6fbf9]",
  ghost:
    "border border-transparent text-foreground hover:border-border hover:bg-white/75",
  dark:
    "border border-border bg-white text-foreground hover:border-[rgba(17,19,26,0.18)] hover:bg-[#f6fbf9]"
};

const sizes = {
  sm: "min-h-10 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
  icon: "size-11 p-0"
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

type LinkButtonProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  external?: boolean;
};

export function LinkButton({
  children,
  className,
  variant = "primary",
  size = "md",
  external,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      target={external ? "_blank" : props.target}
      rel={external ? "noreferrer" : props.rel}
      {...props}
    >
      {children}
    </Link>
  );
}
