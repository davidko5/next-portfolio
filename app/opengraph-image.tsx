import { ImageResponse } from "next/og";

export const alt = "Davyd Kondratenko — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background:
          "radial-gradient(circle at 20% 20%, #1f2937 0%, #0b1220 60%, #050811 100%)",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: "#ec003f",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        Davyd Kondratenko
      </div>
      <div
        style={{
          fontSize: 92,
          fontWeight: 700,
          lineHeight: 1.05,
          marginBottom: 28,
        }}
      >
        Full Stack Developer
      </div>
      <div
        style={{
          fontSize: 36,
          color: "#cbd5e1",
          lineHeight: 1.3,
          maxWidth: 980,
        }}
      >
        Next.js · React · NestJS · Node.js — Rzeszów, Poland
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 80,
          fontSize: 24,
          color: "#94a3b8",
        }}
      >
        portfolio.kondraten.dev
      </div>
    </div>,
    { ...size },
  );
}
