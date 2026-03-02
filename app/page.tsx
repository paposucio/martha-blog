import { Hero } from "@/components/hero";
import { PostCard } from "@/components/post-card";
import { getAllPosts, getFeaturedPosts } from "@/lib/content";
import Link from "next/link";

export default function HomePage() {
  const featured = getFeaturedPosts();
  const recent = getAllPosts().slice(0, 6);
  const posts = featured.length > 0 ? featured : recent;

  return (
    <>
      <Hero />

      {/* About Blurb */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl text-navy mb-4">
            Greenwich&apos;s Most Experienced Real Estate Professional
          </h2>
          <p className="text-warm-gray leading-relaxed mb-4">
            Martha Z Jeffrey (Martha Zahringer Jeffrey) is a licensed real estate
            agent with Sotheby&apos;s International Realty in Greenwich,
            Connecticut. With more than four decades of experience in residential
            real estate, Martha specializes in luxury homes, waterfront
            properties, estate sales, and new construction across Greenwich, Old
            Greenwich, Riverside, Cos Cob, Back Country, Belle Haven, and
            surrounding Fairfield County communities.
          </p>
          <p className="text-warm-gray leading-relaxed mb-6">
            Whether you&apos;re relocating from New York City, purchasing your
            first home, or selling a long-held family estate, Martha brings deep
            neighborhood knowledge and proven negotiation skills to every
            transaction.
          </p>
          <Link
            href="/about"
            className="text-navy font-medium text-sm hover:text-gold transition-colors underline underline-offset-4"
          >
            Learn more about Martha
          </Link>
        </div>
      </section>

      {/* Blog Posts */}
      {posts.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl text-navy">
              {featured.length > 0 ? "Featured Posts" : "Recent Posts"}
            </h2>
            <Link
              href="/blog"
              className="text-sm text-warm-gray hover:text-navy transition-colors"
            >
              View all posts &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
