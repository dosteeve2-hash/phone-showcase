import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AURA Pro — Beyond Imagination",
  description:
    "The most extraordinary smartphone ever crafted. AURA Pro sets a new standard for what a phone can do — 200MP camera, Quantum X5 chip, 7000mAh battery.",
  keywords: ["AURA Pro", "smartphone", "premium phone", "technology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
