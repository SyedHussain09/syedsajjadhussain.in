"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project/project-card";

export function FeaturedProjectsSlider({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth"
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2">
        <Button type="button" variant="secondary" size="icon" onClick={() => scroll("left")} aria-label="Previous project">
          <ChevronLeft className="size-5" />
        </Button>
        <Button type="button" variant="secondary" size="icon" onClick={() => scroll("right")} aria-label="Next project">
          <ChevronRight className="size-5" />
        </Button>
      </div>
      <div
        ref={ref}
        className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-4 thin-scrollbar"
        tabIndex={0}
        aria-label="Featured AI projects slider"
      >
        {projects.map((project) => (
          <div key={project.slug} className="w-[86vw] max-w-[420px] shrink-0 snap-start">
            <ProjectCard project={project} compact />
          </div>
        ))}
      </div>
    </div>
  );
}
