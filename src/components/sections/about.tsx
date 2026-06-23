import { Brain, Code, MessagesSquare, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const cards = [
  {
    title: "LLM product thinking",
    icon: Brain,
    copy: "I connect models, prompts, retrieval, UI, and evaluation into usable workflows."
  },
  {
    title: "Python-first AI engineering",
    icon: Workflow,
    copy: "Comfortable with Streamlit, FastAPI, data pipelines, ML libraries, and LLM APIs."
  },
  {
    title: "Full-stack delivery",
    icon: Code,
    copy: "Can build hiring-team demos, client websites, admin flows, dashboards, SEO pages, and deployment pipelines."
  },
  {
    title: "Clear communication",
    icon: MessagesSquare,
    copy: "Experienced with remote collaboration, documentation, prompt review, client needs, and technical explanations."
  }
];

export function About() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        eyebrow="Profile"
        title="AI engineering with product and delivery context."
        description="My work is centered on practical LLM applications, document workflows, analytics interfaces, evaluation tasks, and full-stack websites. The goal is simple: build systems that can be reviewed, used, and improved."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className="surface rounded-md p-5">
              <span className="grid size-11 place-items-center rounded-md bg-accent/12 text-accent-2">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{card.copy}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
