export type ProjectStatus = "draft" | "published";

export type ProjectInput = {
  title: string;
  body: string;
  userId: number;
  businessName: string;
  audience: string;
  offer: string;
  transformation: string;
  templateType: string;
  bonuses: string;
  guarantee: string;
};

export type Project = ProjectInput & {
  id: number;
  status: ProjectStatus;
};

export type CreateProjectInput = ProjectInput;

export type UpdateProjectInput = ProjectInput & {
  id: number;
};