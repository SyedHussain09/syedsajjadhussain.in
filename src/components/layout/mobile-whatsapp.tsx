import { MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";

export function MobileWhatsApp() {
  return (
    <a
      href={profile.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="mobile-contact-cta no-print fixed inset-x-3 z-40 inline-flex min-h-12 max-w-[calc(100vw-24px)] items-center justify-center gap-2 rounded-md border border-border bg-white px-4 text-center font-semibold leading-tight text-foreground shadow-[0_12px_28px_rgba(17,19,26,0.12)] sm:hidden"
      aria-label="Discuss AI Engineer role on WhatsApp"
    >
      <MessageCircle className="size-5 text-accent" />
      Contact Syed
    </a>
  );
}
