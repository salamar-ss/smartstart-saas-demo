import { apiClient } from "@/shared/api/apiClient";

import type { CreateProjectInput, Project, UpdateProjectInput } from "@/features/projects/types/project.types";

export async function getProjects(): Promise<Project[]> {
  const response = await apiClient.get<Project[]>("/projects");

  return response.data.slice(0, 12);
}

export async function getProjectById(id: number): Promise<Project> {
  const response = await apiClient.get<Project>(`/projects/${id}`);

  return response.data;
}

export async function createProject(project: CreateProjectInput): Promise<Project> {
  const response = await apiClient.post<Project>("/projects", project);

  return response.data;
}

export async function updateProject(project: UpdateProjectInput): Promise<Project> {
  const response = await apiClient.put<Project>(`/projects/${project.id}`, project);

  return response.data;
}

export async function deleteProject(id: number): Promise<void> {
  await apiClient.delete(`/projects/${id}`);
}