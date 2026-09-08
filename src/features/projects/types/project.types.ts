export type ProjectStatus = "draft" | "published";

export type Project = {
  id: string;
  name: string;
  audience: string;
  offer: string;
  status: ProjectStatus;
  createdAt: string;
};

export type CreateProjectInput = {
  name: string;
  audience: string;
  offer: string;
};

export type CreateProjectResponse = Project;