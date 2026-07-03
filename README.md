# Portfolio

A minimal, black-and-white personal portfolio built with Next.js, shadcn/ui, and MDX.

## Features

- **Centered, single-column layout** with light/dark mode (strict monochrome theme).
- **Pages:** Home, Blogs, Projects — with a theme toggle and nav in the header.
- **MDX blog** — write posts as `.mdx` files with frontmatter and syntax-highlighted code.
- **Data-driven** — projects and site config live in plain TypeScript files.

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · next-themes · next-mdx-remote · rehype-pretty-code (Shiki)

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

Other scripts: `pnpm build`, `pnpm start`, `pnpm lint`.

## Editing content

| What            | Where                                  |
| --------------- | -------------------------------------- |
| Name, bio, socials, nav | `src/lib/site.ts`              |
| Projects        | `src/lib/projects.ts`                  |
| Blog posts      | `src/content/blog/*.mdx`               |
| Theme colors    | `src/app/globals.css`                  |

### Adding a blog post

Create `src/content/blog/my-post.mdx`:

```mdx
---
title: "My post"
date: "2026-07-01"
summary: "A one-line description."
tags: ["tag"]
---

Your markdown content here.
```

It will automatically appear on `/blogs` and at `/blogs/my-post`.
