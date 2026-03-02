import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  category: "Neighborhoods" | "Market" | "FAQ" | "Guides";
  tags: string[];
  featured?: boolean;
  faq?: { question: string; answer: string }[];
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    return getPostBySlug(slug);
  });

  return posts
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  return {
    ...frontmatter,
    slug,
    content,
  };
}

export async function renderMarkdown(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const cats = new Set(posts.map((p) => p.category));
  return Array.from(cats);
}
