import "./globals.css";

export const metadata = {
  title: "Kastriot Aliu - Strategic Digital Deployment",
  description: "Next-gen 3D experiences, high-performance architectures, and autonomous AI ecosystems. Engineered in Prishtina.",
  keywords: ["Next.js 16", "Three.js", "AI Automation", "Full-Stack Development", "SEO Optimization"],
  themeColor: "#111111", // Updated to match your brand color
  openGraph: {
    title: "Kastriot Aliu - Strategic Digital Deployment",
    description: "3D Spatial Design & Enterprise Automation.",
    type: "website",
    url: "https://kastriotaliu.com",
    // ADD THIS:
    images: [
      {
        url: "/nammer.png", // Must be in your /public folder
        width: 1200,
        height: 630,
        alt: "Kastriot Aliu Portfolio Front Page",
      },
    ],
  },
  // ADD THIS FOR TWITTER/X:
  twitter: {
    card: "summary_large_image",
    title: "Kastriot Aliu - Strategic Digital Deployment",
    description: "3D Spatial Design & Enterprise Automation.",
    images: ["/nammer.png"],
  },
};

export const viewport = {
  themeColor: "#111111", // Sets the mobile browser UI color
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#111111" }}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          html, body { background: #111111 !important; }
        `}} />
      </head>
      <body className="antialiased bg-[#111111] text-white" style={{ backgroundColor: "#111111" }}>
        {children}
      </body>
    </html>
  );
}