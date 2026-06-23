import { CertificateGallery } from "@/components/sections/certificate-gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { certificates } from "@/data/certificates";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Certificates & Applied AI Training",
  description:
    "Selected certificates and training records for Syed Sajjad Hussain across Applied AI, GenAI engineering, machine learning, Python, and startup programs.",
  path: "/certificates",
  keywords: ["Applied AI certificate", "Generative AI training", "machine learning certificate", "Python certificate"]
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
