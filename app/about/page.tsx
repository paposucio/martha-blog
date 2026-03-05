import { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { realEstateAgentJsonLd, siteConfig } from "@/lib/json-ld-data";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Martha Z Jeffrey",
  description:
    "Martha Z Jeffrey is a luxury real estate agent with 40+ years of experience in Greenwich, CT. Sotheby's International Realty. Specializing in waterfront, estate, and new construction properties.",
  path: "/about",
});

export default function AboutPage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Martha Z Jeffrey",
    alternateName: ["Martha Zahringer Jeffrey", "Martha Jeffrey"],
    jobTitle: "Licensed Real Estate Agent",
    worksFor: {
      "@type": "Organization",
      name: "Sotheby's International Realty",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Greenwich",
      addressRegion: "CT",
    },
    url: siteConfig.agentUrl,
    knowsAbout: [
      "Greenwich CT real estate",
      "luxury residential sales",
      "waterfront properties",
      "estate properties",
      "new construction advisory",
      "NYC relocation",
    ],
  };

  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={realEstateAgentJsonLd()} />

      {/* Header band */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-gold font-semibold mb-2">
            About
          </p>
          <h1 className="font-serif text-4xl text-navy">
            Martha Z Jeffrey
          </h1>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              {/* Headshot placeholder */}
              <div className="image-placeholder aspect-[3/4] w-full mb-6" />

              {/* Contact card */}
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="font-serif text-lg text-navy mb-3">
                  Get in Touch
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="tel:+12039647800"
                      className="text-navy hover:text-gold transition-colors font-medium"
                    >
                      (203) 964-7800
                    </a>
                  </li>
                  <li className="text-warm-gray">
                    Sotheby&apos;s International Realty
                  </li>
                  <li className="text-warm-gray">
                    1 Pickwick Plaza, Greenwich, CT 06830
                  </li>
                  <li>
                    <a
                      href="https://marthazjeffrey.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold transition-colors font-medium"
                    >
                      marthazjeffrey.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bio content */}
          <div className="md:col-span-8">
            <div className="space-y-6 text-body-text leading-relaxed">
              <p>
                Martha Z Jeffrey (Martha Zahringer Jeffrey) is a licensed real estate
                agent with <strong className="text-navy">Sotheby&apos;s International Realty</strong> in
                Greenwich, Connecticut. With <strong className="text-navy">more than 40 years</strong> of
                hands-on experience in residential real estate, Martha is one of the
                most seasoned professionals serving the Greenwich market.
              </p>

              <p>
                Martha specializes in{" "}
                <strong className="text-navy">
                  luxury residential sales, waterfront properties, estate
                  properties, renovation advisory, and new construction
                </strong>{" "}
                across Greenwich and its neighborhoods — including{" "}
                <strong className="text-navy">
                  Old Greenwich, Riverside, Cos Cob, Back Country, Belle Haven,
                  Byram, Mid-Country, and Downtown Greenwich
                </strong>
                . She also serves clients in{" "}
                <strong className="text-navy">Stamford, Fairfield County, and Westchester County</strong>,
                including Rye, Scarsdale, Armonk, Bedford, and Harrison.
              </p>

              <h2 className="font-serif text-2xl text-navy pt-4">
                Deep Neighborhood Knowledge
              </h2>
              <p>
                Having lived and worked in Greenwich for decades, Martha offers
                clients an insider&apos;s understanding of every neighborhood — from
                the walkable village feel of Old Greenwich to the expansive estates
                of Back Country, and the waterfront luxury of Belle Haven. This
                knowledge helps buyers find not just a home, but the right community
                for their lifestyle.
              </p>

              <h2 className="font-serif text-2xl text-navy pt-4">
                NYC Relocation Specialist
              </h2>
              <p>
                A significant portion of Martha&apos;s practice involves helping
                families relocate from New York City to Connecticut. She understands
                the priorities of NYC buyers — school districts, commute times, town
                amenities, and the transition from apartment to house — and guides
                them through every step of the process.
              </p>

              <h2 className="font-serif text-2xl text-navy pt-4">
                Full-Service Representation
              </h2>
              <p>
                Martha provides comprehensive support for both buyers and sellers.
                Her services include{" "}
                <strong className="text-navy">
                  comparative market analysis, pricing strategy, home staging, open
                  houses, property tours, contract negotiation, mortgage guidance,
                  home inspection advisory, and closing coordination
                </strong>
                . She handles everything from first-time homebuyers to multi-million
                dollar estate transactions with the same level of care and
                professionalism.
              </p>

              <h2 className="font-serif text-2xl text-navy pt-4">
                Sotheby&apos;s International Realty
              </h2>
              <p>
                Martha works from the Sotheby&apos;s International Realty office at{" "}
                <strong className="text-navy">1 Pickwick Plaza, Greenwich, CT 06830</strong>. The
                Sotheby&apos;s brand provides unparalleled global marketing reach and
                a network of luxury real estate professionals, ensuring that every
                listing receives maximum exposure to qualified buyers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-cream-dark py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-serif text-3xl text-navy mb-4">
            Ready to Buy or Sell in Greenwich?
          </h2>
          <p className="text-warm-gray mb-8 max-w-xl mx-auto">
            Whether you&apos;re buying your first home or selling a
            multi-million dollar estate, Martha is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12039647800" className="btn-gold">
              Call (203) 964-7800
            </a>
            <a
              href="https://marthazjeffrey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-navy text-navy text-sm font-medium uppercase tracking-wider px-8 py-3 hover:bg-navy hover:text-white transition-colors"
            >
              Visit marthazjeffrey.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
