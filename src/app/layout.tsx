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
  title: "Ragadeepan R — Frontend Engineer",
  description:
    "Final-year developer building production-level full stack applications with clean architecture and advanced UI. Strong in frontend engineering with real-world project experience.",
  keywords: ["Frontend Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Chennai"],
  authors: [{ name: "Ragadeepan R" }],
  openGraph: {
    title: "Ragadeepan R — Frontend Engineer",
    description: "Building high-performance web applications with modern UI and real-world impact.",
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
