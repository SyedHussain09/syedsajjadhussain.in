import type { Metadata, Viewport } from "next";
import { MobileWhatsApp } from "@/components/layout/mobile-whatsapp";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { organizationJsonLd, personJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  ...createMetadata(),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/logo-192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  applicationName: "Syed Sajjad Hussain Portfolio"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#fffdf8"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <SiteHeader />
        <JsonLd data={[organizationJsonLd(), personJsonLd(), websiteJsonLd()]} />
        <main>{children}</main>
        <SiteFooter />
        <MobileWhatsApp />
      </body>
    </html>
  );
}
