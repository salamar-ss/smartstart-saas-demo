import type { Project } from "@/features/projects/types/project.types";

export type ProjectStatusFilter = "all" | "draft" | "published";

type FilterProjectsParams = {
  projects: Project[];
  search: string;
  status: ProjectStatusFilter;
};

export function filterProjects({ projects, search, status }: FilterProjectsParams) {
  const normalizedSearch = search.toLowerCase().trim();

  return projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(normalizedSearch) ||
      project.body.toLowerCase().includes(normalizedSearch) ||
      project.businessName?.toLowerCase().includes(normalizedSearch) ||
      project.audience?.toLowerCase().includes(normalizedSearch) ||
      project.offer?.toLowerCase().includes(normalizedSearch);

    const matchesStatus = status === "all" || project.status === status;

    return matchesSearch && matchesStatus;
  });
}