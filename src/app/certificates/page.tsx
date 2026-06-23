import { CertificateGallery } from "@/components/sections/certificate-gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { certificates } from "@/data/certificates";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Certificates",
  description:
    "Selected certificate gallery for Syed Sajjad Hussain including micro1 Applied AI Engineer, Google Startup School, Coursera machine learning, Python, GenAI hackathon participation, and applied AI training records.",
  path: "/certificates"
});

export default function CertificatesPage() {
  return (
    <section className="section-shell py-12 md:py-16">
      <SectionHeading
        eyebrow="Certificates"
        title="Certificates and training records."
        description="AI, ML, startup, Python, web development, hackathon records, and completed GenAI training records."
      />
      <CertificateGallery certificates={certificates} />
    </section>
  );
}
