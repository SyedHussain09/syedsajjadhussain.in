import Link from "next/link";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { navItems, profile } from "@/data/profile";
import { Logo } from "@/components/layout/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#fffdf8] py-12 text-foreground">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-md text-sm leading-6 text-muted">
            Applied AI Engineer focused on LLM apps, RAG systems, AI evaluation, Python products,
            full-stack delivery, and clear technical communication.
          </p>
          <p className="text-sm font-semibold text-foreground">
            Python, Streamlit, FastAPI, LangGraph, ChromaDB, React, Next.js, TypeScript.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-muted">Explore</h2>
          <div className="grid gap-2 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-muted hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-muted">Contact</h2>
          <div className="grid gap-3 text-sm">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-muted hover:text-foreground">
              <Mail className="size-4" />
              Email
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-foreground">
              <BriefcaseBusiness className="size-4" />
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted hover:text-foreground">
              <Code2 className="size-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-border pt-6 text-xs text-muted">
        <p>Copyright {new Date().getFullYear()} Syed Sajjad Hussain.</p>
      </div>
    </footer>
  );
}
