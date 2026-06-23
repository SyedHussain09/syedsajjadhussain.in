import { ArrowUpRight, BriefcaseBusiness, Code2, FileText, MessageCircle } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { LinkButton } from "@/components/ui/button";
import { ResumeDrawer } from "@/components/sections/resume-drawer";

const evidence = [
  {
    label: "LLM apps",
    value: "FinanceIQ, LexiQ, SaveIQ"
  },
  {
    label: "Document AI",
    value: "Parsing, retrieval, citations"
  },
  {
    label: "Evaluation",
    value: "Prompt tests and response QA"
  },
  {
    label: "Product UI",
    value: "React, Next.js, Streamlit, FastAPI"
  }
];

export function Hero() {
  return (
    <section className="border-b border-border bg-[linear-gradient(135deg,#fffdf8_0%,#f6fbf9_52%,#f7f0e4_100%)]">
      <div className="section-shell grid gap-8 py-10 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent-2">Syed Sajjad Hussain</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.06] tracking-normal text-balance md:text-5xl">
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted md:text-lg">
            {profile.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.badges.slice(0, 5).map((badge) => (
              <span key={badge} className="rounded-md border border-border bg-white px-3 py-2 text-xs font-semibold text-muted">
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-7 grid gap-3 min-[420px]:flex min-[420px]:flex-wrap">
            <LinkButton href="/projects?filter=AI" size="lg" className="w-full min-[420px]:w-auto">
              View projects
              <ArrowUpRight className="size-5" />
            </LinkButton>
            <ResumeDrawer variant="secondary" />
            <LinkButton href="/contact" variant="secondary" size="lg" className="w-full min-[420px]:w-auto">
              <MessageCircle className="size-5" />
              Contact
            </LinkButton>
            <LinkButton href={profile.links.linkedin} external variant="ghost" size="lg" className="w-full border border-border bg-white min-[420px]:w-auto">
              <BriefcaseBusiness className="size-5" />
              LinkedIn
            </LinkButton>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {profile.proofStats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative min-h-28 overflow-hidden rounded-md border border-border bg-white/88 p-4 transition hover:-translate-y-0.5 hover:border-[rgba(17,19,26,0.18)] hover:shadow-[0_12px_28px_rgba(17,19,26,0.06)]"
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 ${
                    index === 2 ? "bg-accent" : "bg-[linear-gradient(90deg,#0f766e,#d6a934)]"
                  }`}
                />
                <p className="text-xl font-semibold leading-tight">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">{stat.label}</p>
                <p className="mt-2 text-sm leading-5 text-muted">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="surface overflow-hidden rounded-md" aria-label="Engineering summary">
          <div className="grid min-h-36 place-items-start bg-[linear-gradient(135deg,#e8f7f4,#fff7e7)] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">Engineering summary</p>
            <h2 className="mt-2 max-w-md text-3xl font-semibold leading-tight">
              Practical AI systems with visible product outcomes.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
              Live projects, readable case studies, clean code links, and certificate records in one fast portfolio.
            </p>
          </div>
          <div className="grid gap-3 p-5 sm:grid-cols-2">
            {evidence.map((item) => (
              <div key={item.label} className="rounded-md border border-border bg-[#fffdf8] p-4">
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-border p-5">
            <Link href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm font-semibold text-foreground hover:bg-[#f7f8f6]">
              <Code2 className="size-4" />
              GitHub
            </Link>
            <Link href="/resume" className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border bg-white px-3 text-sm font-semibold text-foreground hover:bg-[#f7f8f6]">
              <FileText className="size-4" />
              Resume
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
