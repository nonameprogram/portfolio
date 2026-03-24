import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const overusedGrotesk = localFont({
  src: "../../public/OverusedGrotesk-VF.woff2",
  variable: "--font-overused-grotesk",
  display: "swap",
});

import { CustomCursor } from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: "Bartłomiej Kosiński | Software Developer",
  description:
    "Hi, I'm Bartłomiej Kosiński — a Software Developer passionate about building secure, high-performance solutions.",
  keywords: [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "React",
    "NestJS",
    "Node.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Bartłomiej Kosiński" }],
  openGraph: {
    title: "Bartłomiej Kosiński | Fullstack Developer",
    description:
      "Fullstack Developer",
    url: "https://bkosinski.dev",
    siteName: "Bartłomiej Kosiński | Fullstack Developer",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />

      <body
        className={`${overusedGrotesk.variable} ${overusedGrotesk.className} antialiased`}
      >
        <Navigation />
        {children}
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-VZXG93D33R" />
        )}
      </body>
    </html>
  );
}
