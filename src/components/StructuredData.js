export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kastriot Aliu",
          jobTitle: "Full Stack Developer",
          url: "https://kastriotaliu.com",
          email: "kastriootaliiu@gmail.com",
          address: {
            "@type": "10000",
            addressLocality: "Prishtina",
            addressCountry: "Kosovo",
          },
          knowsAbout: [
            "Next.js",
            "React",
            "JavaScript",
            "Node.js",
            "SEO Optimization",
            "Web Performance"
          ],
        }),
      }}
    />
  );
}