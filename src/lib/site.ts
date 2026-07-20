export type NavItem = {
  title: string;
  href: string;
};

export type SocialLink = {
  title: string;
  href: string;
  // key maps to an icon in components that render socials
  icon: "github" | "linkedin" | "mail" | "twitter";
};

export const siteConfig = {
  name: "Ashwani Singh",
  role: "Software Engineer",
  tagline: "I build clean, reliable software for the web.",
  bio: "Software engineer focused on TypeScript, distributed systems, and thoughtful developer tooling. I like small, sharp abstractions and shipping things that last.",
  url: "https://ashwanisingh.com",
  nav: [
    { title: "Home", href: "/" },
    { title: "Blogs", href: "/blogs" },
    { title: "Projects", href: "/projects" },
  ] satisfies NavItem[],
  socials: [
    { title: "GitHub", href: "https://github.com/Ashwani1621", icon: "github" },
    { title: "LinkedIn", href: "https://linkedin.com/in/ashwani69", icon: "linkedin" },
    { title: "X", href: "https://x.com/ashwanistwt", icon: "twitter" },
    { title: "Email", href: "mailto:itsashksingh10@gmail.com", icon: "mail" },
  ] satisfies SocialLink[],
} as const;

export type SiteConfig = typeof siteConfig;
