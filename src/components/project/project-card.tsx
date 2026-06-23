import { ArrowUpRight, Layers } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project/project-visual";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="surface group flex h-full flex-col overflow-hidden rounded-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(17,19,26,0.075)]">
      <div className="relative overflow-hidden">
        <ProjectVisual project={project} compact={compact} />
        <div className="pointer-events-none absolute inset-0 flex items-end bg-[linear-gradient(180deg,rgba(17,19,26,0.02)_0%,rgba(17,19,26,0.18)_42%,rgba(17,19,26,0.72)_100%)] p-4 opacity-0 transition duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100">
          <div className="w-full translate-y-3 transition duration-300 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0">
            <div className="rounded-md border border-white/55 bg-white/90 p-3 shadow-[0_14px_34px_rgba(17,19,26,0.14)] backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Project</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="pointer-events-auto inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-border bg-white px-3 text-sm font-semibold text-foreground transition hover:border-[rgba(17,19,26,0.18)] hover:bg-[#f6fbf9]"
                  aria-label={`View details for ${project.title}`}
                >
                  <Layers className="size-4" />
                  Details
                </Link>
                {project.liveUrl ? (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-border bg-white px-3 text-sm font-semibold text-foreground transition hover:border-[rgba(17,19,26,0.18)] hover:bg-[#f6fbf9]"
                    aria-label={`Visit ${project.title} live page`}
                  >
                    Visit
                    <ArrowUpRight className="size-4" />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href={`/projects/${project.slug}`} className="sr-only">
        View {project.title} details
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-[#fffdf8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-semibold leading-tight">
            <Link href={`/projects/${project.slug}`} className="hover:text-accent-2">
              {project.title}
            </Link>
          </h3>
          <p className="text-sm font-semibold text-accent-2 line-clamp-1">{project.subtitle}</p>
        </div>
      </div>
    </article>
  );
}
