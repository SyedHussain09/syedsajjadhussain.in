import { BrainCircuit, Network, Sparkles } from "lucide-react";
import { genAiTraining } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";

export function TrainingLab() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        eyebrow="Generative AI Training & Project Lab"
        title={genAiTraining.title}
        description="A project-based training map covering model foundations, RAG systems, agents, local models, and multimodal AI."
      />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="surface overflow-hidden rounded-md">
          <div className="bg-[linear-gradient(135deg,#e9f7f5,#fff7e8)] p-5">
            <Sparkles className="size-8 text-accent-2" />
            <h3 className="mt-4 text-xl font-semibold">Core AI Skills Gained</h3>
            <p className="mt-3 leading-7 text-muted">{genAiTraining.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2 p-5">
            {genAiTraining.skills.map((skill) => (
              <span key={skill} className="rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-muted">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {genAiTraining.weeks.map((module, index) => (
            <article key={module.title} className="surface rounded-md p-4 transition hover:-translate-y-1 hover:border-[rgba(17,19,26,0.18)] hover:shadow-[0_18px_36px_rgba(17,19,26,0.075)]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-2">Module {index + 1}</p>
                {index % 2 === 0 ? (
                  <BrainCircuit className="size-5 text-accent-2" />
                ) : (
                  <Network className="size-5 text-accent-2" />
                )}
              </div>
              <h3 className="mt-2 text-base font-semibold">{module.title}</h3>
              <p className="mt-3 line-clamp-4 text-sm leading-6 text-muted">{module.topics}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
