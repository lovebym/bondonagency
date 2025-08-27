import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "BONDON — AI‑driven kreativ & digital marknadsföring",
    template: "%s — BONDON",
  },
  description:
    "AI-baserad byrå som maximerar kreativitet, produktion och analys. Snabbare leveranser, bättre resultat.",
  metadataBase: new URL("https://bondon.agency"),
  openGraph: {
    title: "BONDON — AI‑driven kreativ & digital marknadsföring",
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
        {children}
      </body>
    </html>
  );
}
