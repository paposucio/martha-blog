const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://marthazjeffreygreenwichct.com";

export const siteConfig = {
  url: SITE_URL,
  name: "Martha Z Jeffrey | Greenwich CT Real Estate",
  description:
    "Martha Z Jeffrey is a luxury real estate agent with 40+ years of experience serving Greenwich, Connecticut through Sotheby's International Realty.",
  phone: "(203) 964-7800",
  agentUrl: "https://marthazjeffrey.com",
};

export function realEstateAgentJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteConfig.url}/#agent`,
    name: "Martha Z Jeffrey",
    alternateName: ["Martha Zahringer Jeffrey", "Martha Jeffrey"],
    jobTitle: "Licensed Real Estate Agent",
    worksFor: {
      "@type": "RealEstateAgent",
      name: "Sotheby's International Realty",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Pickwick Plaza",
        addressLocality: "Greenwich",
        addressRegion: "CT",
        postalCode: "06830",
        addressCountry: "US",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Greenwich",
      addressRegion: "CT",
      postalCode: "06830",
      addressCountry: "US",
    },
    telephone: siteConfig.phone,
    url: siteConfig.agentUrl,
    sameAs: [siteConfig.url, siteConfig.agentUrl],
    areaServed: [
      "Greenwich",
      "Old Greenwich",
      "Riverside",
      "Cos Cob",
      "Back Country",
      "Belle Haven",
      "Byram",
      "Mid-Country",
      "Downtown Greenwich",
      "Chickahominy",
      "Pemberwick",
      "Stamford",
      "Fairfield County",
      "Westchester County",
      "Rye",
      "Port Chester",
      "Harrison",
      "Armonk",
      "Bedford",
      "Scarsdale",
    ],
    knowsAbout: [
      "luxury residential sales",
      "waterfront properties",
      "renovation advisory",
      "new construction advisory",
      "new builds",
      "NYC relocation",
      "investment properties",
      "Greenwich CT real estate",
      "Fairfield County real estate",
      "Stamford CT real estate",
      "New York to Connecticut relocation",
      "estate properties",
      "equestrian properties",
      "condo sales",
      "townhouse sales",
      "multi-family properties",
      "first-time homebuyers",
      "property valuation",
      "home staging",
      "buyer representation",
      "seller representation",
      "listing agent",
      "buyers agent",
      "market analysis",
      "comparative market analysis",
      "real estate negotiations",
      "contract negotiation",
      "multiple offer strategy",
      "pricing strategy",
      "Greenwich neighborhoods",
      "Old Greenwich real estate",
      "Riverside real estate",
      "Cos Cob real estate",
      "Back Country estates",
      "Belle Haven waterfront",
      "Byram real estate",
      "Mid-Country Greenwich",
      "Downtown Greenwich",
      "open houses",
      "property tours",
      "real estate closings",
      "mortgage guidance",
      "home inspection advisory",
      "flood zone properties",
      "historic homes",
      "land sales",
      "subdivision",
      "zoning and permits",
    ],
    description: siteConfig.description,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#org`,
    name: "Sotheby's International Realty",
    url: "https://www.sothebysrealty.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Pickwick Plaza",
      addressLocality: "Greenwich",
      addressRegion: "CT",
      postalCode: "06830",
      addressCountry: "US",
    },
    telephone: siteConfig.phone,
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#agent` },
  };
}

export function blogPostingJsonLd(post: {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Martha Z Jeffrey",
      url: siteConfig.agentUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Sotheby's International Realty",
    },
    keywords: post.tags || [],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export function faqPageJsonLd(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}
