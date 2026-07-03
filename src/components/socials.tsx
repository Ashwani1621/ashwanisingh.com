import { Mail } from "lucide-react";

import { siteConfig, type SocialLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/brand-icons";

const icons: Record<
  SocialLink["icon"],
  React.ComponentType<React.ComponentProps<"svg">>
> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  twitter: XIcon,
};

export function Socials({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {siteConfig.socials.map((social) => {
        const Icon = icons[social.icon];
        return (
          <Button
            key={social.title}
            variant="ghost"
            size="icon"
            aria-label={social.title}
            render={
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              />
            }
          >
            <Icon className="size-4" />
          </Button>
        );
      })}
    </div>
  );
}
