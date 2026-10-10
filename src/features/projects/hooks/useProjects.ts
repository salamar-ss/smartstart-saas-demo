import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { createProject, deleteProject, getProjectById, getProjects, updateProject } from "@/features/projects/services/projectService";

import type { CreateProjectInput, UpdateProjectInput } from "@/features/projects/types/project.types";

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
}

export function useProject(id: number) {
  return useQuery({
    queryKey: ["projects", id],
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
        queryKey: ["projects"],
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
        queryKey: ["projects"],
      });

      queryClient.invalidateQueries({
        queryKey: ["projects", updatedProject.id],
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
        queryKey: ["projects"],
      });
    },
  });
}