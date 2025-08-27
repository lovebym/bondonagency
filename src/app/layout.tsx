import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BONDON Agency — AI‑driven kreativ & digital marknadsföring",
    template: "%s — BONDON Agency",
  },
  description:
    "AI-baserad byrå som maximerar kreativitet, produktion och analys. Snabbare leveranser, bättre resultat.",
  metadataBase: new URL("https://bondon.agency"),
  openGraph: {
    title: "BONDON Agency — AI‑driven kreativ & digital marknadsföring",
    description:
      "AI-baserad byrå som maximerar kreativitet, produktion och analys.",
    type: "website",
    url: "https://bondon.agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeScript />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
