export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://kastriotaliu.com/#person",
        "name": "Kastriot Aliu",
        "url": "https://kastriotaliu.com",
        "image": {
          "@type": "ImageObject",
          "url": "https://kastriotaliu.com/profile.jpg",
          "width": 400,
          "height": 400
        },
        "jobTitle": "Full-Stack Next.js Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance",
          "url": "https://kastriotaliu.com"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Prishtina",
          "addressCountry": "XK"
        },
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
        "publisher": { "@id": "https://kastriotaliu.com/#person" },
        // Enables Google Sitelinks Search Box
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://kastriotaliu.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      // NEW: Helps Google understand this is a service business
      {
        "@type": "ProfessionalService",
        "@id": "https://kastriotaliu.com/#service",
        "name": "Kastriot Aliu — Web Development",
        "url": "https://kastriotaliu.com",
        "description": "Custom Next.js development, SEO optimization, and 3D web experiences for businesses worldwide.",
        "provider": { "@id": "https://kastriotaliu.com/#person" },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Development Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Next.js Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "React Native Mobile Apps" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D WebGL Experiences" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Architecture & Optimization" } }
          ]
        }
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