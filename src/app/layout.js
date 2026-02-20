import "./globals.css";

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