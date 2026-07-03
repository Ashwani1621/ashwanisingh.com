import { siteConfig } from "@/lib/site";
import { Container } from "@/components/container";
import { Socials } from "@/components/socials";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t py-8">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <Socials />
      </Container>
    </footer>
  );
}
