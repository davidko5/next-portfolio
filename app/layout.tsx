import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { dm_sans } from "./ui/fonts";
import { StructuredData } from "./ui/common/structured-data";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.kondraten.dev"),
  title: {
    default: "Davyd Kondratenko — Full Stack Developer",
    template: "%s | Davyd Kondratenko",
  },
  description:
    "Full Stack Developer with 3.5 years of experience shipping production applications with Next.js, React, and Node.js. Based in Rzeszów, Poland.",
  authors: [
    { name: "Davyd Kondratenko", url: "https://portfolio.kondraten.dev" },
  ],
  creator: "Davyd Kondratenko",
  applicationName: "Davyd Kondratenko Portfolio",
  openGraph: {
    type: "profile",
    siteName: "Davyd Kondratenko Portfolio",
    firstName: "Davyd",
    lastName: "Kondratenko",
    username: "davidko5",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@davidko5",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        // className={`font-br-sonoma ${brSonoma.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${dm_sans.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
