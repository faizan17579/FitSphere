import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FitSphere - Wardrobe Management App",
  description: "Organize your wardrobe, connect with friends, and discover your personal style with FitSphere",
  keywords: ["wardrobe", "fashion", "clothing", "style", "organization", "management"],
  authors: [{ name: "FitSphere Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
