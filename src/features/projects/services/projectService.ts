import type { CreateProjectInput, CreateProjectResponse, Project } from "@/features/projects/types/project.types";

const fakeProjects: Project[] = [
  {
    id: "1",
    name: "Coach Launch Page",
    audience: "online coaches",
    offer: "a simple landing page that explains their coaching offer",
    status: "draft",
    createdAt: "2026-06-01",
  },
  {
    id: "2",
    name: "Creative Portfolio Funnel",
    audience: "artists and designers",
    offer: "a portfolio page with a clear inquiry CTA",
    status: "published",
    createdAt: "2026-06-03",
  },
];

function wait(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export async function getProjects(): Promise<Project[]> {
  await wait(600);

  return fakeProjects;
}

export async function createProject(input: CreateProjectInput): Promise<CreateProjectResponse> {
  await wait(700);

  return {
    id: crypto.randomUUID(),
    name: input.name,
    audience: input.audience,
    offer: input.offer,
    status: "draft",
    createdAt: new Date().toISOString(),
  };
}