import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f6f6f3",
          color: "#111418",
          fontFamily: "Arial, sans-serif",
          padding: 64,
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ position: "absolute", inset: 40, border: "1px solid rgba(17,20,24,.12)" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 78,
                height: 78,
                borderRadius: 14,
                border: "1px solid rgba(17,20,24,.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#111418",
                fontSize: 28,
                fontWeight: 800,
                color: "#ffffff"
              }}
            >
              SSH
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 800 }}>{profile.name}</div>
              <div style={{ fontSize: 22, color: "#5f6673" }}>Applied AI Engineer</div>
            </div>
          </div>
          <div style={{ maxWidth: 900, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontSize: 62, lineHeight: 1.02, fontWeight: 800 }}>
              LLM apps, RAG systems, AI evaluation and full-stack product work.
            </div>
            <div style={{ fontSize: 26, color: "#5f6673" }}>
              Practical AI engineering, Python workflows, evaluation, and full-stack delivery.
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, fontSize: 20 }}>
            {["FinanceIQ", "LexiQ", "SaveIQ", "Next.js SEO Portfolio"].map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid rgba(17,20,24,.14)",
                  borderRadius: 8,
                  padding: "10px 16px",
                  background: "#ffffff"
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
