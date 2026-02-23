import "./globals.css";

export const metadata = {
  title: "Kastriot Aliu - Strategic Digital Deployment",
  description: "Next-gen 3D experiences, high-performance architectures, and autonomous AI ecosystems. Engineered in Prishtina.",
  keywords: ["Next.js 15", "Three.js", "AI Automation", "Full-Stack Development", "SEO Optimization"],
  openGraph: {
    title: "Kastriot Aliu - Strategic Digital Deployment",
    description: "3D Spatial Design & Enterprise Automation.",
    type: "website",
    url: "https://kastriotaliu.com",
    images: [
      {
        url: "/nammer.png", 
        width: 1200,
        height: 630,
        alt: "Kastriot Aliu Portfolio Front Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kastriot Aliu - Strategic Digital Deployment",
    description: "3D Spatial Design & Enterprise Automation.",
    images: ["/nammer.png"],
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
        {children}
      </body>
    </html>
  );
}