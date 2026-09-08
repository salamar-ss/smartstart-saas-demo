import { useQuery } from "@tanstack/react-query";

import { getProjects } from "@/features/projects/services/projectService";

export function useProjects() {
  const query = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return {
    projects: query.data ?? [],
    isLoadingProjects: query.isLoading,
    isFetchingProjects: query.isFetching,
    projectsError: query.error,
    refetchProjects: query.refetch,
  };
}