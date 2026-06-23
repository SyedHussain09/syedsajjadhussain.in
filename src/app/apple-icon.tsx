import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 180,
  height: 180
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 36,
          background: "#fffdf8",
          color: "#fffaf0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "Georgia, serif"
        }}
      >
        <div
          style={{
            width: 142,
            height: 142,
            borderRadius: 999,
            background: "#06172b",
            border: "7px solid #d8ad4f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            boxShadow: "0 10px 28px rgba(2, 11, 24, .24)"
          }}
        >
          <div style={{ fontSize: 49, fontWeight: 900 }}>SSH</div>
          <div style={{ marginTop: 4, fontFamily: "Arial, sans-serif", fontSize: 14, fontWeight: 800, color: "#f2d886" }}>
            AI
          </div>
        </div>
      </div>
    ),
    size
  );
}
