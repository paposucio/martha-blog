import { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/content";
import { PostCard } from "@/components/post-card";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Greenwich CT real estate insights, neighborhood guides, market updates, and FAQs from Martha Z Jeffrey at Sotheby's International Realty.",
  path: "/blog",
});

export default function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      {/* Header band */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-gold font-semibold mb-2">
            The Blog
          </p>
          <h1 className="font-serif text-4xl text-navy mb-4">
            Insights &amp; Guides
          </h1>
          <p className="text-warm-gray max-w-2xl mx-auto">
            Neighborhood guides, market insights, FAQs, and expert advice on buying
            and selling real estate in Greenwich, Connecticut and surrounding areas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Category filters */}
        {categories.length > 0 && (
          <div className="flex gap-3 mb-10 flex-wrap">
            <span className="text-xs font-semibold px-4 py-2 bg-navy text-white uppercase tracking-wider">
              All
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-semibold px-4 py-2 border border-navy/20 text-navy uppercase tracking-wider hover:border-gold hover:text-gold transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {posts.length === 0 ? (
          <p className="text-warm-gray">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
