import { company, getSiteUrl } from "@/content/site";
import type { Locale } from "@/content/dictionary";

export function JsonLd({ description, locale }: { description: string; locale: Locale }) {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url,
    description,
    foundingDate: company.founded,
    logo: `${url}/brand/logo-square.png`,
    image: `${url}/og.png`,
    inLanguage: locale === "ar" ? "ar" : "en",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Salem Al-Mubarak Street, 7th Floor, Office 29",
      addressLocality: company.locality,
      addressCountry: company.countryCode,
    },
    founder: {
      "@type": "Person",
      name: company.founder.name,
      jobTitle: company.founder.role,
      sameAs: company.founder.linkedin,
    },
    sameAs: [company.linkedin],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
