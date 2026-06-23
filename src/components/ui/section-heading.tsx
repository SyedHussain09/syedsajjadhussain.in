import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  children
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-2">{eyebrow}</p>
      ) : null}
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold leading-tight text-balance md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-muted md:text-lg">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
