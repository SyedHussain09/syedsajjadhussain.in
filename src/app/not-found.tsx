import Link from "next/link";
import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-shell grid min-h-[60vh] place-items-center py-16 text-center">
      <div className="max-w-xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-2">404</p>
        <h1 className="mt-3 text-4xl font-semibold">This page is not available.</h1>
        <p className="mt-4 leading-7 text-muted">
          The project or article may have moved. The main project library is still available.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <LinkButton href="/projects">View projects</LinkButton>
          <Link href="/" className="inline-flex min-h-11 items-center rounded-md px-4 font-semibold text-muted hover:text-foreground">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
