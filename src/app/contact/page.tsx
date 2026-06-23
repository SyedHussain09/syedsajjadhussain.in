import { BriefcaseBusiness, Code2, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactCta } from "@/components/sections/contact-cta";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact for Applied AI Engineer Roles",
  description:
    "Contact Syed Sajjad Hussain for Applied AI Engineer roles, GenAI projects, RAG systems, Python AI apps, full-stack delivery, and technical review.",
  path: "/contact",
  keywords: ["contact Syed Sajjad Hussain", "hire Applied AI Engineer", "GenAI engineer contact", "RAG engineer"]
});

const contactCards = [
  {
    title: "WhatsApp",
    label: "Fastest response",
    href: profile.whatsappUrl,
    icon: MessageCircle,
    external: true
  },
  {
    title: "Email",
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: true
  },
  {
    title: "LinkedIn",
    label: "Professional profile",
    href: profile.links.linkedin,
    icon: BriefcaseBusiness,
    external: true
  },
  {
    title: "GitHub",
    label: "Code and project repositories",
    href: profile.links.github,
    icon: Code2,
    external: true
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="section-shell py-12 md:py-16">
        <SectionHeading
          eyebrow="Contact"
          title="Let's discuss AI Engineer roles or practical AI product work."
          description="Hiring teams can use WhatsApp for fastest response. Email, LinkedIn, and GitHub are available for formal screening and technical review."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noreferrer" : undefined}
                className="surface rounded-md p-5 transition hover:-translate-y-1 hover:border-accent/60"
              >
                <Icon className="size-8 text-accent-2" />
                <h2 className="mt-5 text-xl font-semibold">{card.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{card.label}</p>
              </a>
            );
          })}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="surface rounded-md p-6">
            <MapPin className="size-8 text-accent-2" />
            <h2 className="mt-4 text-2xl font-semibold">Availability note</h2>
            <p className="mt-3 leading-7 text-muted">
              Available for applied AI engineering roles, remote collaboration, contract work, and practical product-focused AI projects.
            </p>
          </article>
          <article className="surface rounded-md p-6">
            <h2 className="text-2xl font-semibold">Hiring note</h2>
            <p className="mt-3 leading-7 text-muted">
              Strong-fit roles: AI Engineer, Generative AI Engineer, Applied AI Engineer, Python AI Engineer, RAG Engineer, LLM Evaluation, or AI full-stack roles where practical delivery matters.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <LinkButton href="/projects?filter=AI">View AI projects</LinkButton>
              <LinkButton href="/resume" variant="secondary">View resume</LinkButton>
            </div>
          </article>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
