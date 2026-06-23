import { BriefcaseBusiness, Code2, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { LinkButton } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="section-shell py-16">
      <div className="surface rounded-md p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Discuss AI engineering, LLM applications, or full-stack product work.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Best for roles or projects involving LLM workflows, RAG systems, AI evaluation, Python applications, and product-facing web interfaces.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <LinkButton href={profile.whatsappUrl} external variant="primary">
              <MessageCircle className="size-5" />
              WhatsApp
            </LinkButton>
            <LinkButton href={`mailto:${profile.email}`} external variant="secondary">
              <Mail className="size-5" />
              Email
            </LinkButton>
            <LinkButton href={profile.links.linkedin} external variant="secondary">
              <BriefcaseBusiness className="size-5" />
              LinkedIn
            </LinkButton>
            <LinkButton href={profile.links.github} external variant="secondary">
              <Code2 className="size-5" />
              GitHub
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
