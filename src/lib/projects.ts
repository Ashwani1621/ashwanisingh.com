export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Live/demo URL (optional) */
  href?: string;
  /** Source repository URL (optional) */
  repo?: string;
  /** Highlight on the home page */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Ledgerline",
    description:
      "A double-entry accounting engine with an immutable transaction log and a typed query API.",
    tags: ["TypeScript", "PostgreSQL", "Node.js"],
    href: "https://example.com/ledgerline",
    repo: "https://github.com/",
    featured: true,
  },
  {
    title: "Draftbench",
    description:
      "A local-first markdown workspace with git-backed versioning and instant full-text search.",
    tags: ["React", "Rust", "SQLite"],
    href: "https://example.com/draftbench",
    repo: "https://github.com/",
    featured: true,
  },
  {
    title: "Pulse",
    description:
      "A tiny uptime monitor that pings your services and posts incidents to your chat.",
    tags: ["Go", "Cron", "Webhooks"],
    repo: "https://github.com/",
    featured: true,
  },
  {
    title: "dotfiles",
    description:
      "My reproducible development environment — Neovim, zsh, and tmux, managed with a single script.",
    tags: ["Shell", "Lua", "Nix"],
    repo: "https://github.com/",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
