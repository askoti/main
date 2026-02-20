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

// Professional 2026 Metadata for SEO Sovereignty
export const metadata = {
  title: "Kastriot Aliu - Strategic Digital Deployment",
  description: "Next-gen 3D experiences, high-performance architectures, and autonomous AI ecosystems. Engineered in Prishtina.",
  keywords: ["Next.js 16", "Three.js", "AI Automation", "Full-Stack Development", "SEO Optimization"],
  themeColor: "#111111",
  openGraph: {
    title: "Kastriot Aliu - Strategic Digital Deployment",
    description: "3D Spatial Design & Enterprise Automation.",
    type: "website",
    backgroundColor: "#111111",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111111] text-white`}
        suppressHydrationWarning={true} 
      >
        {children}
      </body>
    </html>
  );
}