import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "v7 Admin Panel - Professional Dashboard",
    template: "%s | v7 Admin Panel",
  },
  description:
    "Production-ready admin panel built with Next.js, TypeScript, and Tailwind CSS. Created by Vaibhaw Kumar Parashar.",
  keywords: [
    "admin panel",
    "dashboard",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "v7",
  ],
  authors: [
    {
      name: "Vaibhaw Kumar Parashar",
      url: "https://vaibhawkumarparashar.in",
    },
  ],
  creator: "Vaibhaw Kumar Parashar",
  metadataBase: new URL("https://vaibhawkumarparashar.in"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaibhawkumarparashar.in",
    title: "v7 Admin Panel - Professional Dashboard",
    description:
      "Production-ready admin panel built with Next.js, TypeScript, and Tailwind CSS.",
    siteName: "v7 Admin Panel",
  },
  twitter: {
    card: "summary_large_image",
    title: "v7 Admin Panel - Professional Dashboard",
    description:
      "Production-ready admin panel built with Next.js, TypeScript, and Tailwind CSS.",
    creator: "@vaibhawkp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
