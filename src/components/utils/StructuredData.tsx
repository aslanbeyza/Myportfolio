import { getPortfolioContent } from "@/lib/content/portfolio";
import { getCanonicalUrl } from "@/lib/seo/portfolio-metadata";
import { siteConfig } from "@/lib/site";
import type { PortfolioLocale } from "@/types/portfolio";

interface StructuredDataProps {
  locale: PortfolioLocale;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const content = getPortfolioContent(locale);
  const canonical = getCanonicalUrl(locale);

  const graph = [
    {
      "@type": "Person",
      "@id": `${siteConfig.baseUrl}/#person`,
      name: siteConfig.fullName,
      jobTitle: "Full Stack Developer",
      description: content.metadata.description,
      url: canonical,
      sameAs: [siteConfig.githubUrl, siteConfig.linkedInUrl, siteConfig.baseUrl],
      address: {
        "@type": "PostalAddress",
        addressCountry: "TR",
        addressRegion: siteConfig.location,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "professional",
        email: siteConfig.email,
        availableLanguage: ["English", "Turkish"],
      },
      knowsAbout: [
        "TypeScript",
        "JavaScript",
        "React",
        "HTML",
        "CSS",
        "Node.js",
        "Express",
        "REST APIs",
        "Web Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.baseUrl}/#website`,
      name: siteConfig.fullName,
      url: canonical,
      description: content.metadata.description,
      inLanguage: locale,
      publisher: {
        "@id": `${siteConfig.baseUrl}/#person`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.baseUrl}/#service`,
      name: "Full Stack Web Development",
      url: canonical,
      description: content.contact.body,
      provider: {
        "@id": `${siteConfig.baseUrl}/#person`,
      },
      areaServed: "Worldwide",
      serviceType: [
        "Full Stack Development",
        "Frontend Development",
        "Backend & API Development",
        "End-to-End Delivery",
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
