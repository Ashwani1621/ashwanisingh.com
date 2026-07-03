import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { featuredProjects } from "@/lib/projects";
import { getAllPosts, formatDate } from "@/lib/blog";
import { Socials } from "@/components/socials";
import { ProjectCard } from "@/components/project-card";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section>
        <p className="font-mono text-sm text-muted-foreground">
          {siteConfig.role}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {siteConfig.tagline}
        </p>
        <p className="mt-4 leading-7 text-foreground/90">{siteConfig.bio}</p>
        <Socials className="mt-6 -ml-2" />
      </section>

      {/* Featured projects */}
      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold tracking-tight">
            Featured projects
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            All projects <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Recent posts */}
      <section>
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold tracking-tight">Recent posts</h2>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            All posts <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <ul className="divide-y">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blogs/${post.slug}`}
                className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span className="font-medium group-hover:underline">
                  {post.title}
                </span>
                <span className="shrink-0 text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
