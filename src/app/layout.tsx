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
  title: "Qdine | Custom QR Code Digital Menus for Restaurants",
  description: "Transform your guest experience with Qdine. We build beautiful, contactless QR digital menus tailored to your restaurant's brand.",
  keywords: ["digital menu", "QR code menu", "restaurant menu software", "contactless menu", "restaurant tech", "Qdine", "digital menu india"],
  openGraph: {
    title: "Qdine | Custom QR Code Digital Menus for Restaurants",
    description: "Transform your guest experience with Qdine. We build beautiful, contactless QR digital menus tailored to your restaurant's brand.",
    type: "website",
    url: "https://qdine.in",
    siteName: "Qdine",
    images: [
      {
        url: "/icon.jpg",
        alt: "Qdine Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qdine | Custom QR Code Digital Menus for Restaurants",
    description: "Transform your guest experience with Qdine. We build beautiful, contactless QR digital menus tailored to your restaurant's brand.",
  }
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
