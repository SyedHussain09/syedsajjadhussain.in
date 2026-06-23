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
      <div className="hidden justify-end gap-2 md:flex">
        <Button type="button" variant="secondary" size="icon" onClick={() => scroll("left")} aria-label="Previous project">
          <ChevronLeft className="size-5" />
        </Button>
        <Button type="button" variant="secondary" size="icon" onClick={() => scroll("right")} aria-label="Next project">
          <ChevronRight className="size-5" />
        </Button>
      </div>
      <div
        ref={ref}
        className="grid gap-5 md:flex md:snap-x md:overflow-x-auto md:pb-4 md:thin-scrollbar"
        tabIndex={0}
        aria-label="Featured AI projects slider"
      >
        {projects.map((project) => (
          <div key={project.slug} className="w-full min-w-0 md:w-[min(86vw,420px)] md:max-w-full md:shrink-0 md:snap-start">
            <ProjectCard project={project} compact />
          </div>
        ))}
      </div>
    </div>
  );
}
