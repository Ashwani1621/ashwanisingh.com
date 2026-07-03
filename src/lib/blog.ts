import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export type PostFrontmatter = {
  title: string;
  date: string;
  summary: string;
  tags?: string[];
};

export type PostMeta = PostFrontmatter & {
  slug: string;
};

export type Post = PostMeta & {
  content: string;
};

function readPostFile(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;

  return {
    slug,
    title: fm.title,
    date: fm.date,
    summary: fm.summary,
    tags: fm.tags ?? [],
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => readPostFile(file.replace(/\.mdx$/, "")))
    .filter((post): post is Post => post !== null)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .map(
      (post): PostMeta => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        summary: post.summary,
        tags: post.tags,
      })
    );
}

export function getPostBySlug(slug: string): Post | null {
  return readPostFile(slug);
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
