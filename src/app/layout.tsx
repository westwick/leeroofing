import type { Metadata } from "next";
import { Nunito_Sans, Oswald } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lee Roofing & Renovation | Rain or Shine, We're There",
  description:
    "Lee Roofing & Renovation — roofing, exterior, interior, kitchen & bath, and flooring. Licensed, bonded & insured. Free estimates. Call 228-471-9185.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
