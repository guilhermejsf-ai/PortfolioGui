import { ImageResponse } from "next/og";
export const alt = "Guilherme Fernandes — Growth, Operations & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f8f7f3",
        color: "#183c32",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: 24 }}>GUILHERME FERNANDES</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -4,
        }}
      >
        Ideas into action.
        <br />
        Action into growth.
      </div>
      <div style={{ fontSize: 26 }}>
        Startup management · Growth · Operations · AI automation
      </div>
    </div>,
    size,
  );
}
