import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3", className)} aria-label="Syed Sajjad Hussain home">
      <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-white shadow-sm">
        <Image
          src="/logo.svg"
          width={44}
          height={44}
          alt=""
          aria-hidden="true"
          className="size-11"
          priority
        />
      </span>
      {!compact ? (
        <span className="leading-tight">
          <span className="block text-sm font-bold">Syed Sajjad Hussain</span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            Applied AI Engineer
          </span>
        </span>
      ) : null}
    </Link>
  );
}
