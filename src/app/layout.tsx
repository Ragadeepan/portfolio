import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ragadeepan R — AI-Powered Full Stack Developer",
  description:
    "AI-powered full stack developer building intelligent web applications, chatbot systems, and production-ready platforms with React, Next.js, Firebase, Python, and OpenAI integrations.",
  keywords: [
    "AI-Powered Full Stack Developer",
    "Full Stack Developer",
    "AI Developer",
    "React",
    "Next.js",
    "TypeScript",
    "OpenAI",
    "Firebase",
    "Chennai",
  ],
  authors: [{ name: "Ragadeepan R" }],
  openGraph: {
    title: "Ragadeepan R — AI-Powered Full Stack Developer",
    description:
      "Portfolio of Ragadeepan R, an AI-powered full stack developer building intelligent web apps, chatbot systems, and production-ready platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
