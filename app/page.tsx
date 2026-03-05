import Link from "next/link";
import { Hero } from "@/components/hero";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/content";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Hero
        headline="Your Trusted Guide to Greenwich Real Estate"
        subheadline="Martha Z Jeffrey brings 40+ years of local expertise to every home purchase and sale. Sotheby's International Realty."
        ctas={[
          { label: "Meet Martha", href: "/about", style: "gold" },
          { label: "Read the Blog", href: "/blog", style: "outline" },
        ]}
      />

      {/* Value Props */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl text-navy mb-2">40+</p>
              <p className="text-sm uppercase tracking-wider text-gold font-semibold mb-2">
                Years of Experience
              </p>
              <p className="text-sm text-warm-gray leading-relaxed">
                Four decades of hands-on residential real estate expertise in
                the Greenwich market.
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-navy mb-2">Greenwich &amp; Beyond</p>
              <p className="text-sm uppercase tracking-wider text-gold font-semibold mb-2">
                Local Knowledge
              </p>
              <p className="text-sm text-warm-gray leading-relaxed">
                Deep expertise across Old Greenwich, Riverside, Cos Cob,
                Back Country, Belle Haven, and Fairfield County.
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-navy mb-2">Sotheby&apos;s</p>
              <p className="text-sm uppercase tracking-wider text-gold font-semibold mb-2">
                Global Reach
              </p>
              <p className="text-sm text-warm-gray leading-relaxed">
                Backed by the world&apos;s most prestigious luxury real estate
                brand and its global network of buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {posts.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-gold font-semibold mb-2">
                From the Blog
              </p>
              <h2 className="font-serif text-3xl text-navy">
                Insights &amp; Guides
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-block border border-navy text-navy text-sm font-medium uppercase tracking-wider px-8 py-3 hover:bg-navy hover:text-white transition-colors"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* About Teaser */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Headshot placeholder */}
            <div className="image-placeholder aspect-[3/4] max-w-sm mx-auto md:mx-0 w-full" />

            <div>
              <p className="text-sm uppercase tracking-wider text-gold font-semibold mb-2">
                About Martha
              </p>
              <h2 className="font-serif text-3xl text-navy mb-6">
                A Lifetime of Real Estate Excellence
              </h2>
              <p className="text-body-text leading-relaxed mb-4">
                Martha Z Jeffrey (Martha Zahringer Jeffrey) is a licensed real
                estate agent with Sotheby&apos;s International Realty in
                Greenwich, Connecticut. With more than 40 years of hands-on
                experience, she is one of the most seasoned professionals
                serving the Greenwich market.
              </p>
              <p className="text-body-text leading-relaxed mb-8">
                She specializes in luxury residential sales, waterfront
                properties, estate properties, and NYC-to-CT relocations.
              </p>
              <Link
                href="/about"
                className="inline-block border border-navy text-navy text-sm font-medium uppercase tracking-wider px-8 py-3 hover:bg-navy hover:text-white transition-colors"
              >
                Learn More
              </Link>
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
            <a
              href="tel:+12039647800"
              className="btn-gold"
            >
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
