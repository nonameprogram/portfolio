import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/tooltip";
import "./globals.css";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    title: "Bartłomiej Kosiński | Software Developer",
    description:
      "Software Developer focused on secure, high-performance web applications.",
    url: "https://bkosinski.dev",
    siteName: "Bartłomiej Kosiński | Software Developer",
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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>{children}</TooltipProvider>
        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId="G-VZXG93D33R" />
        )}
      </body>
    </html>
  );
}
