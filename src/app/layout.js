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

export const metadata = {
  title: "Kastriot Aliu - Strategic Digital Deployment",
  description: "Next-gen 3D experiences, high-performance architectures, and autonomous AI ecosystems. Engineered in Prishtina.",
  keywords: ["Next.js 16", "Three.js", "AI Automation", "Full-Stack Development", "SEO Optimization"],
  // This helps browsers and mobile devices understand the theme before loading
  themeColor: "#000000", 
  openGraph: {
    title: "Kastriot Aliu - Strategic Digital Deployment",
    description: "3D Spatial Design & Enterprise Automation.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    // Added style here as a backup
    <html lang="en" className="dark" style={{ backgroundColor: '#000000' }}>
      <head>
        {/* THE FIX: This tiny script forces the browser to paint black before JS even executes */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.style.backgroundColor = '#000000';
              document.body.style.backgroundColor = '#000000';
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
        style={{ backgroundColor: '#000000' }}
        suppressHydrationWarning={true} 
      >
        {children}
      </body>
    </html>
  );
}