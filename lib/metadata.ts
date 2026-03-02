import type { Metadata } from "next";
import { siteConfig } from "./json-ld-data";

export function createMetadata({
  title,
  description,
  path = "",
  type = "website",
}: {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = title
    ? `${title} | Martha Z Jeffrey`
    : siteConfig.name;
  const desc = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      type,
      locale: "en_US",
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Martha Z Jeffrey — Greenwich CT Real Estate",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
    alternates: {
      canonical: url,
    },
  };
}
