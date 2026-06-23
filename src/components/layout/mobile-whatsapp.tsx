import { MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";

export function MobileWhatsApp() {
  return (
    <a
      href={profile.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="no-print fixed bottom-4 left-4 right-4 z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-white px-4 font-semibold text-foreground shadow-[0_12px_28px_rgba(17,19,26,0.12)] sm:hidden"
      aria-label="Discuss AI Engineer role on WhatsApp"
    >
      <MessageCircle className="size-5 text-accent" />
      Contact Syed
    </a>
  );
}
