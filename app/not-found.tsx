import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1220",
          color: "#fff",
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
          margin: 0,
          padding: "0 1rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: 0, color: "#ec003f" }}>404</h1>
        <p style={{ fontSize: "1.125rem", marginTop: "1rem" }}>
          This page does not exist.
        </p>
        <Link
          href="/en"
          style={{
            marginTop: "2rem",
            color: "#ec003f",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          Back to portfolio
        </Link>
      </body>
    </html>
  );
}
