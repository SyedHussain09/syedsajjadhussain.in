import { MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";

export function MobileWhatsApp() {
  return (
    <a
      href={profile.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="mobile-contact-cta no-print fixed right-3 z-40 grid size-12 place-items-center rounded-full border border-border bg-white text-accent shadow-[0_12px_28px_rgba(17,19,26,0.13)] transition active:scale-95 sm:hidden"
      aria-label="Contact Syed on WhatsApp"
      title="Contact Syed"
    >
      <MessageCircle className="size-5" />
    </a>
  );
}
