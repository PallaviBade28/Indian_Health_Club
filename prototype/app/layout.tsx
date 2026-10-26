import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-display-face",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indian Health Club — Beed | Premium Gym",
  description:
    "Indian Health Club in Beed — strength training, personal coaching, and membership plans. Call or WhatsApp 9504414141.",
  openGraph: {
    title: "Indian Health Club — Beed",
    description:
      "Premium gym experience in Beed. Membership pricing, trainers, and WhatsApp enquiry.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${anton.variable} scroll-smooth`}>
      <head>
        <link rel="preload" as="image" href="/hero-poster.jpg" fetchPriority="high" />
      </head>
      <body className="font-sans antialiased text-white">{children}</body>
    </html>
  );
}
