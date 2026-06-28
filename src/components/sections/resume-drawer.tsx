"use client";

import { Download, ExternalLink, FileText, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Button, LinkButton } from "@/components/ui/button";

export function ResumeDrawer({ variant = "primary" }: { variant?: "primary" | "secondary" | "dark" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="button" variant={variant} size="lg" onClick={() => setOpen(true)} className="w-full min-[420px]:w-auto">
        <Download className="size-5" />
        Download Resume
      </Button>
      {open ? (
        <div
          className="fixed inset-0 z-[90] bg-[#061015]/62 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="ml-auto flex h-full max-w-lg flex-col overflow-hidden rounded-md bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-2">Resume</p>
                <h2 className="mt-2 text-2xl font-semibold">AI systems, products, and delivery</h2>
              </div>
              <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close resume drawer">
                <X className="size-5" />
              </Button>
            </div>
            <div className="grid gap-4 p-5 text-sm leading-6 text-muted">
              <p>
                A focused overview of my work building practical LLM applications, RAG workflows, Python tools, and production-ready web products for real users.
              </p>
              <div className="rounded-md border border-border bg-white p-4">
                <p className="font-semibold text-foreground">Inside the resume</p>
                <ul className="mt-2 grid gap-2">
                  <li>Live AI projects across legal documents, finance, and media workflows</li>
                  <li>Experience in LLM evaluation, prompt refinement, RAG, and client delivery</li>
                  <li>Python, vector databases, full-stack development, and product execution</li>
                  <li>Portfolio, contact details, education, achievements, and selected links</li>
                </ul>
              </div>
            </div>
            <div className="mt-auto flex flex-wrap gap-2 border-t border-border p-5">
              <LinkButton href={profile.resumePath} variant="primary" external>
                <Download className="size-4" />
                Download PDF
              </LinkButton>
              <LinkButton href="/resume" variant="secondary">
                <FileText className="size-4" />
                View HTML
              </LinkButton>
              <LinkButton href={profile.whatsappUrl} external variant="dark">
                Contact Syed
                <ExternalLink className="size-4" />
              </LinkButton>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
