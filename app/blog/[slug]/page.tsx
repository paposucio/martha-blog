import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import {
  getAllPosts,
  getPostBySlug,
  renderMarkdown,
} from "@/lib/content";
import { blogPostingJsonLd, faqPageJsonLd } from "@/lib/json-ld-data";
import { createMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = await renderMarkdown(post.content);

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          title: post.title,
          slug: post.slug,
          date: post.date,
          description: post.description,
          tags: post.tags,
        })}
      />
      {post.faq && <JsonLd data={faqPageJsonLd(post.faq)} />}

      {/* Post header */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-[720px] px-6">
          <Link
            href="/blog"
            className="text-sm text-warm-gray hover:text-navy transition-colors mb-6 inline-block"
          >
            &larr; Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-warm-gray">&middot;</span>
            <time className="text-sm text-warm-gray">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-navy leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-warm-gray">{post.description}</p>
          <div className="divider-gold mt-8" />
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-[720px] px-6 py-12">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-warm-gray border border-gray-200 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Card */}
        <div className="mt-12 p-6 bg-white border border-gray-200 flex flex-col sm:flex-row gap-5 items-start">
          {/* Avatar placeholder */}
          <div className="w-16 h-16 rounded-full image-placeholder shrink-0" />
          <div>
            <h3 className="font-serif text-lg text-navy mb-1">
              Martha Z Jeffrey
            </h3>
            <p className="text-sm text-warm-gray leading-relaxed">
              Licensed real estate agent with Sotheby&apos;s International
              Realty in Greenwich, CT. 40+ years of experience specializing in
              luxury homes, waterfront properties, and NYC-to-CT relocations.{" "}
              <a
                href="https://marthazjeffrey.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-gold underline underline-offset-2 decoration-gold"
              >
                Visit her website
              </a>{" "}
              or call{" "}
              <a
                href="tel:+12039647800"
                className="text-navy hover:text-gold underline underline-offset-2 decoration-gold"
              >
                (203) 964-7800
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
