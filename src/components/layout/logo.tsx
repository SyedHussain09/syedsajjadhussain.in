import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex min-w-0 items-center gap-2 sm:gap-3", className)} aria-label="Syed Sajjad Hussain home">
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
        <span className="min-w-0 leading-tight">
          <span className="block truncate text-sm font-bold">Syed Sajjad Hussain</span>
          <span className="block truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-muted sm:tracking-[0.18em]">
            Applied AI Engineer
          </span>
        </span>
      ) : null}
    </Link>
  );
}
