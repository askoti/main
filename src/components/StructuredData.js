import Script from "next/script";

export default function StructuredData() {
  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kastriot Aliu",
          url: "https://kastriotaliu.com",
          jobTitle: "Full Stack Developer",
          email: "mailto:kastriootaliiu@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Prishtina",
            addressCountry: "XK"
          },
          sameAs: [
            "https://github.com/askoti",
            "https://linkedin.com/in/kastriootaliiu"
          ],
          knowsAbout: [
            "Next.js",
            "React",
            "JavaScript",
            "Node.js",
            "SEO Optimization",
            "Web Performance"
          ]
        })
      }}
    />
  );
}