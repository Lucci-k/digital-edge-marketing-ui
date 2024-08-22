import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/src/components/navbar/NavBar";
import Footer from "@/src/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Edge",
  description: "Enhance your business's online presence with Digital Edge's expert digital marketing services. Discover innovative strategies for SEO, social media, and content marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <NavBar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
