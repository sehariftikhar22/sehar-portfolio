import type { Metadata } from "next";
import "./globals.css";

import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050c1a",
};

export const metadata: Metadata = {
  title: "Sehar Iftikhar Official - Software Engineer & Full Stack Web Developer",
  description:
    "Official Portfolio Website of Sehar Iftikhar - Software Engineer, Full Stack Web Developer & AI Automation Specialist. Contact for Premium Website Development, WordPress, and Custom Web Solutions.",
  keywords: [
    "Sehar Iftikhar",
    "Software Engineer in Pakistan",
    "Full Stack Website Developer",
    "WordPress Specialist",
    "AI Automation Developer",
    "Web Development Services",
    "Next.js Developer",
  ],
  authors: [{ name: "Sehar Iftikhar" }],
  openGraph: {
    title: "Sehar Iftikhar Official - Software Engineer & Full Stack Web Developer",
    description:
      "Official Portfolio Website of Sehar Iftikhar - Software Engineer, Full Stack Web Developer & AI Automation Specialist.",
    type: "website",
    locale: "en_US",
  },
};

import { ScrollAnimationProvider } from "@/components/ScrollAnimationProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen bg-[#050c1a] text-[#EDF2F7] antialiased selection:bg-[#D4AF37] selection:text-[#050c1a] relative overflow-x-hidden w-full max-w-full"
        suppressHydrationWarning
      >
        <ScrollAnimationProvider />
        {children}
      </body>
    </html>
  );
}
