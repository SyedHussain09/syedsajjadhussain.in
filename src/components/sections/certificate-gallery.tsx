"use client";

import Image from "next/image";
import { ExternalLink, FileText, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { Certificate } from "@/data/certificates";
import { certificateFilters } from "@/data/certificates";
import { Button, LinkButton } from "@/components/ui/button";

type Filter = (typeof certificateFilters)[number];

export function CertificateGallery({ certificates }: { certificates: Certificate[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Certificate | null>(null);

  const filtered = useMemo(
    () => certificates.filter((certificate) => filter === "All" || certificate.category === filter),
    [certificates, filter]
  );

  return (
    <>
      <div className="mb-7 flex flex-wrap gap-2">
        {certificateFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`min-h-10 rounded-md border px-3 text-xs font-bold uppercase tracking-[0.12em] ${
              filter === item
                ? "border-accent bg-[#e7f7f3] text-foreground"
                : "border-border bg-white text-muted hover:text-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((certificate) => {
          const previewSrc = certificate.previewPath || certificate.assetPath;
          const isCourseRecord = certificate.status === "course-record";

          return (
            <article key={certificate.slug} className="surface flex flex-col overflow-hidden rounded-md">
              <div className="relative grid aspect-[1.35] place-items-center overflow-hidden border-b border-border bg-[#fffdf8]">
                {previewSrc && (certificate.assetType === "image" || certificate.previewPath) ? (
                  <Image
                    src={previewSrc}
                    alt={`${certificate.title} certificate preview`}
                    fill
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                ) : (
                  <div className="grid place-items-center gap-3 text-center text-muted">
                    <FileText className="size-12 text-accent" />
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                      Certificate pending upload
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-2">
                    {certificate.issuer}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-tight">{certificate.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-muted">{certificate.date}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{certificate.relevance}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {certificate.assetPath ? (
                    <>
                      <Button type="button" variant="secondary" size="sm" onClick={() => setActive(certificate)}>
                        {isCourseRecord ? "View course record" : "View certificate"}
                      </Button>
                      <LinkButton href={certificate.assetPath} external variant="secondary" size="sm">
                        {isCourseRecord ? "Open record" : "Open original"}
                      </LinkButton>
                    </>
                  ) : null}
                  {certificate.verificationUrl ? (
                    <LinkButton href={certificate.verificationUrl} external variant="ghost" size="sm">
                      Verify
                      <ExternalLink className="size-4" />
                    </LinkButton>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {active ? (
        <div
          className="fixed inset-0 z-[90] bg-[#061015]/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} preview`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="mx-auto flex h-full max-w-5xl flex-col overflow-hidden rounded-md bg-card shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-border p-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-2">{active.issuer}</p>
                <h2 className="text-xl font-semibold">{active.title}</h2>
              </div>
              <Button type="button" variant="ghost" size="icon" onClick={() => setActive(null)} aria-label="Close certificate preview">
                <X className="size-5" />
              </Button>
            </div>
            <div className="flex-1 bg-[#f4f1e9] p-3">
              {active.assetPath && active.assetType === "image" ? (
                <div className="relative h-full min-h-[60vh]">
                  <Image
                    src={active.assetPath}
                    alt={`${active.title} certificate`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              ) : active.assetPath ? (
                <iframe
                  title={`${active.title} PDF certificate`}
                  src={active.assetPath}
                  className="h-full min-h-[70vh] w-full rounded-md bg-white"
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
