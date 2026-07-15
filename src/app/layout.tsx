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
  title: "Barakah Qalam - Beautiful Coloring Books",
  description: "Handcrafted coloring books with free samples. Download mandalas, flowers, and intricate patterns for relaxation and creativity.",
  keywords: "coloring book, adult coloring, mandala, coloring pages, free samples",
  openGraph: {
    title: "Barakah Qalam - Beautiful Coloring Books",
    description: "Handcrafted coloring books with free samples",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
