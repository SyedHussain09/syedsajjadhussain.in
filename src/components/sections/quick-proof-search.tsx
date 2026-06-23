"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { blogPosts } from "@/data/blog";
import { certificates } from "@/data/certificates";
import { experiences } from "@/data/experience";
import { allProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type QuickProofSearchProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const baseItems = [
  {
    title: "AI Engineer resume",
    description: "HTML resume and downloadable PDF for technical review.",
    href: "/resume",
    type: "Resume"
  },
  {
    title: "WhatsApp contact message",
    description: "Fast contact route with prefilled opportunity message.",
    href: profile.whatsappUrl,
    type: "Contact",
    external: true
  },
  {
    title: "Certificates gallery",
    description: "AI, ML, web, Python, startup, and hackathon records.",
    href: "/certificates",
    type: "Certificates"
  }
];

export function QuickProofSearch({ open, onOpenChange }: QuickProofSearchProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(true);
      }
      if (event.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenChange]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const items = useMemo(() => {
    const projectItems = allProjects.map((project) => ({
      title: project.title,
      description: `${project.subtitle}. ${project.summary}`,
      href: `/projects/${project.slug}`,
      type: project.tags.includes("AI") ? "AI Project" : "Project"
    }));
    const blogItems = blogPosts.map((post) => ({
      title: post.title,
      description: post.description,
      href: `/blog/${post.slug}`,
      type: "Blog"
    }));
    const certificateItems = certificates.map((certificate) => ({
      title: certificate.title,
      description: `${certificate.issuer}. ${certificate.relevance}`,
      href: "/certificates",
      type: "Certificate"
    }));
    const experienceItems = experiences.map((experience) => ({
      title: `${experience.title} - ${experience.company}`,
      description: experience.summary,
      href: "/experience",
      type: "Experience"
    }));

    return [...baseItems, ...projectItems, ...experienceItems, ...certificateItems, ...blogItems];
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items.slice(0, 8);
    return items
      .filter((item) =>
        [item.title, item.description, item.type].join(" ").toLowerCase().includes(normalized)
      )
      .slice(0, 10);
  }, [items, query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-[#061015]/58 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onOpenChange(false);
      }}
    >
      <div className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-md border border-white/12 bg-card shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="size-5 text-accent-2" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, skills, resume, certificates..."
            className="h-11 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted"
          />
          <Button type="button" variant="ghost" size="icon" onClick={() => onOpenChange(false)} aria-label="Close search">
            <X className="size-5" />
          </Button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2 thin-scrollbar">
          {filtered.map((item) => {
            const content = (
              <span className="grid gap-1 rounded-md p-3 text-left transition hover:bg-foreground/5">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-semibold">{item.title}</span>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                    {item.type}
                  </span>
                </span>
                <span className="line-clamp-2 text-sm leading-6 text-muted">{item.description}</span>
              </span>
            );

            if ("external" in item && item.external) {
              return (
                <a key={`${item.type}-${item.title}`} href={item.href} target="_blank" rel="noreferrer" onClick={() => onOpenChange(false)}>
                  {content}
                </a>
              );
            }

            return (
              <Link key={`${item.type}-${item.title}`} href={item.href} onClick={() => onOpenChange(false)}>
                {content}
              </Link>
            );
          })}
          {filtered.length === 0 ? (
            <div className={cn("p-8 text-center text-sm text-muted")}>
              No matching result found. Try &quot;RAG&quot;, &quot;SEO&quot;, &quot;resume&quot;, or &quot;certificates&quot;.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
