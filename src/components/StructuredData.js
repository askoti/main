export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://kastriotaliu.com/#person",
        "name": "Kastriot Aliu",
        "url": "https://kastriotaliu.com",
        "image": "https://kastriotaliu.com/profile.jpg",
        "jobTitle": "Full-Stack Next.js Developer",
        "knowsAbout": [
          "Next.js", "React Native", "TypeScript", "Three.js", 
          "PostgreSQL", "Web Performance", "SEO Architecture"
        ],
        "sameAs": [
          "https://github.com/askoti",
          "https://linkedin.com/in/kastriootaliiu"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://kastriotaliu.com/#website",
        "url": "https://kastriotaliu.com",
        "name": "Kastriot Aliu | Next.js Developer Portfolio",
        "publisher": { "@id": "https://kastriotaliu.com/#person" }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}