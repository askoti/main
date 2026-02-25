import StructuredData from "@/components/StructuredData";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  metadataBase: new URL("https://kastriotaliu.com"),

  title: {
    default: "Kastriot Aliu | Next.js Full Stack Developer",
    template: "%s | Kastriot Aliu",
  },

  description:
    "Kastriot Aliu a Full Stack Developer specializing in Next.js, React, and high-performance SEO-optimized web applications. Building modern, scalable, and secure digital experiences.",

  keywords: [
    "Kastriot Aliu",
    "Next.js Developer",
    "Full Stack Developer",
    "React Developer",
    "Web Developer Kosovo",
    "SEO Optimized Websites",
    "High Performance Web Apps",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer"
  ],

  authors: [{ name: "Kastriot Aliu" }],
  creator: "Kastriot Aliu",

  openGraph: {
    title: "Kastriot Aliu | Next.js Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, SEO, and high-performance web applications.",
    url: "https://kastriotaliu.com",
    siteName: "Kastriot Aliu Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kastriot Aliu | Next.js Developer",
    description:
      "Full Stack Developer building high-performance and SEO-optimized web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0f0f0f", // Matches the darkest part of your new gradient
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#0f0f0f" }}>
      <head>
        {/* Critical CSS to prevent "Flash of Unstyled Content" (FOUC) */}
        <style dangerouslySetInnerHTML={{ __html: `
          html, body { 
            background-color: #0f0f0f !important; 
            margin: 0; 
            padding: 0;
            overflow-x: hidden;
          }
        `}} />
      </head>
      <body className="antialiased bg-[#0f0f0f] text-white">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}