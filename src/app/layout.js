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
    "Full Stack Developer specializing in Next.js, React Native, and PostgreSQL. Crafting high-performance, minimalist web and mobile applications with a focus on SEO and scalability.",

  keywords: [
    "Kastriot Aliu",
    "Next.js Developer",
    "React Native Developer", // Added
    "Full Stack Engineer",
    "PostgreSQL Expert", // Added
    "Mobile App Developer", // Added
    "Web Developer Kosovo",
    "Tirana Developer", // Added for local reach
    "SEO Strategy",
    "High Performance Web Apps",
    "Scalable SaaS Architecture", // Added
    "Tailwind CSS Specialist" // Added
  ],

  authors: [{ name: "Kastriot Aliu", url: "https://kastriotaliu.com" }],
  creator: "Kastriot Aliu",
  publisher: "Kastriot Aliu", // Added

  // Important for SEO: tells Google which version is the primary one
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },

  openGraph: {
    title: "Kastriot Aliu | Next.js Full Stack Developer",
    description:
      "Expert in Next.js and React Native. Building the future of high-performance digital products.",
    url: "https://kastriotaliu.com",
    siteName: "Kastriot Aliu",
    locale: "en_US",
    type: "profile", // Changed from website to profile
    firstName: "Kastriot",
    lastName: "Aliu",
    username: "kastriotaliu",
    images: [
      {
        url: "/og-image.png", // Make sure to add this file to your public folder
        width: 1200,
        height: 630,
        alt: "Kastriot Aliu Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kastriot Aliu | Next.js & React Native Developer",
    description: "Building high-performance web and mobile applications.",
    creator: "@your_twitter_handle", // Add your handle if you have one
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

  // Verification for Google Search Console
  verification: {
    google: "KSDN8IZ4r43uy8e7noJp-DTFwnfHDoWnCeVAZx8QrR0", // Add your code here
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
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}