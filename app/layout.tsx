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
  title: "MM Digital Garage ? Human-first digital marketing",
  description:
    "A boutique studio crafting thoughtful, animated marketing experiences that convert attention into trust.",
  metadataBase: new URL("https://agentic-23f29cc4.vercel.app"),
  openGraph: {
    title: "MM Digital Garage",
    description:
      "Human-first digital marketing: strategy, design, and motion that feel crafted.",
    url: "https://agentic-23f29cc4.vercel.app",
    siteName: "MM Digital Garage",
  },
  twitter: { card: "summary_large_image", title: "MM Digital Garage" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
