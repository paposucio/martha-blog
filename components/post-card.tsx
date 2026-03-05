import Link from "next/link";
import type { Post } from "@/lib/content";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white border border-gray-200 hover:border-gold transition-colors overflow-hidden">
        {/* Image placeholder */}
        <div className="image-placeholder aspect-[16/10]" />

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-warm-gray">&middot;</span>
            <time className="text-xs text-warm-gray">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h3 className="font-serif text-xl text-navy group-hover:text-gold transition-colors mb-2 leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-warm-gray leading-relaxed line-clamp-2">
            {post.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
