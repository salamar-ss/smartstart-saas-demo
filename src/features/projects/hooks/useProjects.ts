import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { createProject, deleteProject, getProjectById, getProjects, updateProject } from "@/features/projects/services/projectService";

import type { CreateProjectInput, UpdateProjectInput } from "@/features/projects/types/project.types";

export const projectQueryKeys = {
  all: ["projects"] as const,
  detail: (id: number) => ["projects", id] as const,
};

export function useProjects() {
  return useQuery({
    queryKey: projectQueryKeys.all,
    queryFn: getProjects,
  });
}

export function useProject(id: number) {
  return useQuery({
    queryKey: projectQueryKeys.detail(id),
    queryFn: () => getProjectById(id),
    enabled: Boolean(id),
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (project: CreateProjectInput) => createProject(project),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.all,
      });
    },
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (project: UpdateProjectInput) => updateProject(project),
    onSuccess: (updatedProject) => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.all,
      });

      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.detail(updatedProject.id),
      });
    },
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.all,
      });
    },
  });
}