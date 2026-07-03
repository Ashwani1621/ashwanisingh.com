import type { Metadata } from "next";
import Link from "next/link";

import { getAllPosts, formatDate } from "@/lib/blog";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Writing about software, tooling, and engineering process.",
};

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <div>
      <PageHeader
        title="Blogs"
        description="Notes on software, tooling, and the craft of building things."
      />

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="group">
                <Link href={`/blogs/${post.slug}`} className="block">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-lg font-medium tracking-tight group-hover:underline">
                      {post.title}
                    </h2>
                    <time className="shrink-0 text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <p className="mt-1 text-muted-foreground">{post.summary}</p>
                </Link>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
