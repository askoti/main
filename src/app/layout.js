import StructuredData from "@/components/StructuredData";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL("https://kastriotaliu.com"),
  title: {
    default: "Kastriot Aliu | Next.js Developer — Prishtina, Kosovo",
    template: "%s | Kastriot Aliu",
  },
  description:
    "Full-Stack Developer based in Prishtina, Kosovo. Specializing in Next.js 15, React Native, Three.js, and PostgreSQL. Building fast, SEO-optimized web and mobile applications for global clients.",
  keywords: [
    "Kastriot Aliu",
    "Next.js Developer Kosovo",
    "Next.js Developer Prishtina",   // high-intent local
    "Full Stack Developer Kosovo",
    "React Native Developer",
    "Three.js Developer",
    "Web Developer Balkans",
    "Freelance Next.js Developer Europe",
    "PostgreSQL Developer",
    "SEO Web Development",
    "High Performance Web Apps",
    "WebGL Developer"
  ],
  authors: [{ name: "Kastriot Aliu", url: "https://kastriotaliu.com" }],
  creator: "Kastriot Aliu",
  
  // FIX: Remove fake i18n alternates unless those pages actually exist
  // Having /en-US and /de-DE that return 404 actively hurts SEO
  alternates: {
    canonical: "https://kastriotaliu.com",
    // Only add languages when the pages genuinely exist
  },

  openGraph: {
    title: "Kastriot Aliu | Next.js Developer — Prishtina",
    description:
      "Full-Stack Developer specializing in Next.js, React Native & Three.js. Based in Kosovo, deploying globally.",
    url: "https://kastriotaliu.com",
    siteName: "Kastriot Aliu",
    locale: "en_US",
    type: "website", // FIX: revert to "website" — "profile" type is for social networks
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kastriot Aliu — Next.js Developer Portfolio",
        type: "image/png",  // ADD: explicit type helps crawlers
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kastriot Aliu | Next.js & React Native Developer",
    description: "Building high-performance web and mobile applications from Prishtina, Kosovo.",
    // REMOVE creator if you don't have a Twitter — a wrong handle hurts
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "KSDN8IZ4r43uy8e7noJp-DTFwnfHDoWnCeVAZx8QrR0",
  },
};

export const viewport = {
  themeColor: "#0f0f0f",
  colorScheme: "dark",
  // ADD: prevents zoom on input focus on iOS — better mobile UX
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#0f0f0f" }}>
      <head>
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

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
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}