import { CheckCircle2, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";

export function ExperienceTimeline({ compact = false }: { compact?: boolean }) {
  const items = experiences;

  return (
    <div className="relative grid gap-5 md:pl-8">
      <span className="absolute left-2 top-3 hidden h-[calc(100%-24px)] w-px bg-border md:block" />
      {items.map((experience, index) => (
        <article
          key={`${experience.company}-${experience.dates}`}
          className="surface relative overflow-hidden rounded-md transition hover:-translate-y-1 hover:border-[rgba(17,19,26,0.18)] hover:shadow-[0_18px_36px_rgba(17,19,26,0.075)]"
        >
          <span className="absolute -left-[31px] top-7 hidden size-4 rounded-full border-4 border-[#fbfaf7] bg-accent shadow md:block" />
          <div className="grid gap-0 lg:grid-cols-[0.36fr_0.64fr]">
            <div className="bg-[linear-gradient(135deg,#eef8f5,#fff7e8)] p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-border bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-muted">
                  0{index + 1}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted">
                  <MapPin className="size-4" />
                  {experience.location}
                </span>
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-accent-2">
                {experience.dates}
              </p>
              <h3 className="mt-2 text-xl font-semibold leading-tight">{experience.title}</h3>
              <p className="mt-2 font-semibold text-muted">{experience.company}</p>
            </div>

            <div className="p-5">
              <p className="leading-7 text-muted">{experience.summary}</p>
              {!compact ? (
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted md:grid-cols-2">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-md border border-border bg-[#fffdf8] p-3">
                      <CheckCircle2 className="mb-2 size-4 text-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.skills.slice(0, compact ? 7 : experience.skills.length).map((skill) => (
                  <span key={skill} className="rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
