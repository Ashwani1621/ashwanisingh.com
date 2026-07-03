import type { Metadata } from "next";

import { projects } from "@/lib/projects";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've designed, built, and shipped.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="Projects"
        description="A selection of things I've designed, built, and shipped."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
