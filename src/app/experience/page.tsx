import { Award, BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { TrainingLab } from "@/components/sections/training-lab";
import { SectionHeading } from "@/components/ui/section-heading";
import { allProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Experience in Applied AI, LLM Evaluation & Product Delivery",
  description:
    "Professional timeline for Syed Sajjad Hussain covering Applied AI R&D, micro1 LLM evaluation, client web delivery, and product platform work.",
  path: "/experience",
  keywords: ["Applied AI experience", "LLM evaluation experience", "AI product R&D", "client web delivery"]
});

export default function ExperiencePage() {
  const metrics = [
    { label: "Hands-on experience", value: "2.5+ years" },
    { label: "Work streams", value: "4" },
    { label: "Projects represented", value: `${allProjects.length}` },
    { label: "Primary focus", value: "AI + Web" }
  ];

  return (
    <>
      <section className="border-b border-border bg-[linear-gradient(135deg,#fffdf8_0%,#edf8f6_56%,#f7f0e4_100%)] py-12 md:py-16">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <SectionHeading
              eyebrow="Experience"
              title="A practical AI career story, organized for fast review."
              description="AI product R&D, LLM evaluation, client delivery, technical SEO, and full-stack product work presented as clear outcomes."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-md border border-border bg-white/82 p-4">
                  <p className="text-2xl font-semibold">{metric.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="mb-8 flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-md border border-border bg-white text-accent-2">
            <BriefcaseBusiness className="size-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-2">Timeline</p>
            <h2 className="text-2xl font-semibold">What changed, what shipped, and what skill it proves.</h2>
          </div>
        </div>
        <ExperienceTimeline />
      </section>

      <TrainingLab />

      <section className="section-shell grid gap-5 pb-16 md:grid-cols-2">
        <article className="surface overflow-hidden rounded-md">
          <div className="bg-[linear-gradient(135deg,#eef7ff,#fff7e8)] p-5">
            <GraduationCap className="size-8 text-accent-2" />
            <h2 className="mt-4 text-2xl font-semibold">Education</h2>
          </div>
          <div className="p-6">
            <p className="font-semibold">{profile.education.degree}</p>
            <p className="mt-2 leading-7 text-muted">
            {profile.education.school} / {profile.education.dates} / CGPA {profile.education.cgpa} /
            Graduated {profile.education.graduated}
            </p>
          </div>
        </article>
        <article className="surface overflow-hidden rounded-md">
          <div className="bg-[linear-gradient(135deg,#eef8f5,#f7efff)] p-5">
            <Award className="size-8 text-accent-2" />
            <h2 className="mt-4 text-2xl font-semibold">Achievements</h2>
          </div>
          <ul className="grid gap-3 p-6 text-sm leading-6 text-muted">
            {profile.achievements.map((achievement) => (
              <li key={achievement} className="rounded-md border border-border bg-[#fffdf8] p-3">
                {achievement}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-shell pb-16">
        <div className="surface rounded-md p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-2">Working style</p>
              <h2 className="mt-2 text-2xl font-semibold">Clear communication, fast iteration, practical shipping.</h2>
            </div>
            <Sparkles className="size-8 text-accent-2" />
          </div>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            The through-line is simple: understand the user problem, build a working flow, make the output easy to inspect, and keep the implementation fast enough to iterate.
          </p>
        </div>
      </section>
    </>
  );
}
