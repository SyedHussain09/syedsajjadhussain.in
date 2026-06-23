"use client";

import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/projects";
import { projectFilters } from "@/data/projects";
import { ProjectCard } from "@/components/project/project-card";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams();
  const urlFilter = searchParams.get("filter");
  const urlQuery = searchParams.get("query");
  const [filter, setFilter] = useState<ProjectCategory | "All">(() =>
    urlFilter && projectFilters.includes(urlFilter as (typeof projectFilters)[number])
      ? (urlFilter as ProjectCategory | "All")
      : "All"
  );
  const [query, setQuery] = useState(urlQuery || "");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter = filter === "All" || project.tags.includes(filter);
      const haystack = [
        project.title,
        project.subtitle,
        project.summary,
        project.category,
        project.techStack.join(" "),
        project.highlights.join(" "),
        project.tags.join(" ")
      ]
        .join(" ")
        .toLowerCase();
      return matchesFilter && (!normalized || haystack.includes(normalized));
    });
  }, [filter, projects, query]);

  return (
    <>
      <div className="mb-7 grid gap-4 rounded-md border border-border bg-card p-3 md:grid-cols-[1fr_auto]">
        <label className="flex min-h-12 items-center gap-3 rounded-md border border-border bg-white px-3">
          <Search className="size-5 text-muted" />
          <span className="sr-only">Search projects</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search RAG, SEO, client work, Python..."
            className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-muted"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`min-h-10 rounded-md border px-3 text-xs font-bold uppercase tracking-[0.12em] transition ${
                filter === item
                  ? "border-accent bg-[#e7f7f3] text-foreground"
                  : "border-border bg-white text-muted hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="surface rounded-md p-10 text-center text-muted">
          No matching project found. Try a broader filter like AI, SEO, Client, or Full-Stack.
        </div>
      ) : null}
    </>
  );
}
