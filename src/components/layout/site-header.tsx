"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/logo";
import { Button, LinkButton } from "@/components/ui/button";
import { QuickProofSearch } from "@/components/sections/quick-proof-search";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-[#fffdf8]/92 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between gap-3">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-semibold text-muted transition hover:bg-white hover:text-foreground",
                  pathname === item.href && "bg-white text-foreground shadow-sm"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="!hidden md:!inline-flex"
              onClick={() => setSearchOpen(true)}
              aria-label="Open site search"
            >
              <Search className="size-4" />
              <span>Search</span>
              <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted">Ctrl K</kbd>
            </Button>
            <LinkButton href={profile.whatsappUrl} external variant="dark" size="sm" className="!hidden sm:!inline-flex">
              Contact
            </LinkButton>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="lg:!hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
        {open ? (
          <div className="border-t border-border bg-card lg:hidden">
            <nav className="section-shell grid gap-2 py-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-foreground/5"
                >
                  {item.label}
                </Link>
              ))}
              <Button type="button" variant="secondary" onClick={() => setSearchOpen(true)}>
                <Search className="size-4" />
                Search site
              </Button>
              <LinkButton href={profile.whatsappUrl} external variant="dark">
                Contact
              </LinkButton>
            </nav>
          </div>
        ) : null}
      </header>
      <QuickProofSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
