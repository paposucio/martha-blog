import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import {
  realEstateAgentJsonLd,
  organizationJsonLd,
  webSiteJsonLd,
  siteConfig,
} from "@/lib/json-ld-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | Martha Z Jeffrey",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={realEstateAgentJsonLd()} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
<Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
