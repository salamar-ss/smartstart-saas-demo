export type Project = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type CreateProjectInput = {
  title: string;
  body: string;
  userId: number;
};

export type UpdateProjectInput = {
  id: number;
  title: string;
  body: string;
  userId: number;
};