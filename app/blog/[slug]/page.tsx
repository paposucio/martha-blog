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

      <article className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-2 py-1 bg-navy/10 text-navy">
              {post.category}
            </span>
            <time className="text-sm text-warm-gray">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h1 className="font-serif text-4xl text-navy leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-warm-gray">{post.description}</p>
        </div>

        {/* Content */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        {/* Author Card */}
        <div className="mt-16 p-6 bg-cream border-l-4 border-gold">
          <h3 className="font-serif text-lg text-navy mb-2">
            About the Author
          </h3>
          <p className="text-sm text-warm-gray leading-relaxed">
            <strong>Martha Z Jeffrey</strong> is a licensed real estate agent
            with Sotheby&apos;s International Realty in Greenwich, CT. With 40+
            years of experience, she specializes in luxury homes, waterfront
            properties, and NYC-to-CT relocations.{" "}
            <a
              href="https://marthazjeffrey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:text-gold underline underline-offset-2"
            >
              Visit her website
            </a>{" "}
            or call{" "}
            <a
              href="tel:+12039647800"
              className="text-navy hover:text-gold underline underline-offset-2"
            >
              (203) 964-7800
            </a>
            .
          </p>
        </div>

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="text-sm text-warm-gray hover:text-navy transition-colors"
          >
            &larr; Back to all posts
          </Link>
        </div>
      </article>
    </>
  );
}
