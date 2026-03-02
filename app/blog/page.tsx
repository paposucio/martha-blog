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

  // Note: filtering handled client-side for static generation simplicity
  // All posts rendered, categories shown as labels

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-4xl text-navy mb-4">Blog</h1>
      <p className="text-warm-gray mb-8 max-w-2xl">
        Neighborhood guides, market insights, FAQs, and expert advice on buying
        and selling real estate in Greenwich, Connecticut and surrounding areas.
      </p>

      {categories.length > 0 && (
        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <span
              key={cat}
              className="text-xs font-medium px-3 py-1 bg-navy/10 text-navy"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <p className="text-warm-gray">No posts yet. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
