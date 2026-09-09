export type ProjectStatus = "draft" | "published";

export type Project = {
  id: number;
  userId: number;
  title: string;
  body: string;
  businessName?: string;
  audience?: string;
  offer?: string;
  transformation?: string;
  templateType?: string;
  bonuses?: string;
  guarantee?: string;
  status?: ProjectStatus;
};

export type CreateProjectInput = {
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

export type UpdateProjectInput = {
  id: number;
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