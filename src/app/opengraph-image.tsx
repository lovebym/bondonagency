import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ededed",
          padding: 64,
          fontSize: 48,
        }}
      >
        <div style={{ fontSize: 20, opacity: 0.8 }}>BONDON Agency</div>
        <div style={{ maxWidth: 900, lineHeight: 1.1 }}>
          AI‑driven kreativ och digital marknadsföring
        </div>
        <div style={{ fontSize: 20, opacity: 0.7 }}>bondon.agency</div>
      </div>
    ),
    { ...size }
  );
}


