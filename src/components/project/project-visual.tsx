import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const thumbnailOverrides: Partial<Record<string, string>> = {
  "falak-iftikhar-portfolio": "falak-iftikhar-portfolio-sharp.png"
};

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  const imagePath = `/projects/screenshots-real/${thumbnailOverrides[project.slug] ?? `${project.slug}.png`}`;

  return (
    <div
      className={cn(
        "relative overflow-hidden border-b border-border bg-white",
        compact ? "aspect-[3/2]" : "aspect-[3/2]"
      )}
    >
      <Image
        src={imagePath}
        alt={`${project.title} visual preview`}
        fill
        sizes={compact ? "(min-width: 768px) 420px, 86vw" : "(min-width: 1024px) 45vw, 100vw"}
        className="object-cover object-top transition duration-500 ease-out group-hover:scale-[1.035] group-focus-within:scale-[1.035] motion-reduce:transition-none"
      />
    </div>
  );
}
