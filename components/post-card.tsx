import Link from "next/link";
import type { Post } from "@/lib/content";

const categoryColors: Record<string, string> = {
  Neighborhoods: "bg-navy/10 text-navy",
  Market: "bg-gold/20 text-navy",
  FAQ: "bg-green-100 text-green-800",
  Guides: "bg-blue-100 text-blue-800",
};

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="border border-gray-200 p-6 hover:border-gold transition-colors">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`text-xs font-medium px-2 py-1 ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}
          >
            {post.category}
          </span>
          <time className="text-xs text-warm-gray">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h3 className="font-serif text-xl text-navy group-hover:text-gold transition-colors mb-2">
          {post.title}
        </h3>
        <p className="text-sm text-warm-gray leading-relaxed">
          {post.description}
        </p>
      </article>
    </Link>
  );
}
