import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";

import { cn } from "@/lib/utils";

const prettyCodeOptions: RehypePrettyCodeOptions = {
  // Emits --shiki-light / --shiki-dark CSS vars, switched in globals.css.
  theme: { light: "github-light", dark: "github-dark" },
  keepBackground: false,
};

type AnchorProps = React.ComponentProps<"a">;

const components = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1
      className="mt-8 mb-4 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="mt-8 mb-3 scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="mt-6 mb-2 scroll-m-20 text-lg font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="leading-7 text-foreground/90 [&:not(:first-child)]:mt-4" {...props} />
  ),
  a: ({ href = "", ...props }: AnchorProps) => {
    const isInternal = href.startsWith("/");
    const className = "font-medium underline underline-offset-4";
    if (isInternal) {
      return <Link href={href} className={className} {...props} />;
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        {...props}
      />
    );
  },
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="my-4 ml-6 list-disc [&>li]:mt-2" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="my-4 ml-6 list-decimal [&>li]:mt-2" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="mt-4 border-l-2 pl-4 text-muted-foreground italic"
      {...props}
    />
  ),
  hr: (props: React.ComponentProps<"hr">) => (
    <hr className="my-8 border-border" {...props} />
  ),
  // Inline code only — block code is handled by rehype-pretty-code + globals.css.
  code: ({ className, ...props }: React.ComponentProps<"code">) => (
    <code
      className={cn(
        "rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]",
        className
      )}
      {...props}
    />
  ),
};

export function Mdx({ source }: { source: string }) {
  return (
    <div className="text-[0.95rem]">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
          },
        }}
      />
    </div>
  );
}
