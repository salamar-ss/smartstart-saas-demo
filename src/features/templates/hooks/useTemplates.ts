import { useQuery } from "@tanstack/react-query";

import { getTemplateById, getTemplates } from "@/features/templates/services/templateService";

export const templateQueryKeys = {
  all: ["templates"] as const,
  detail: (id: string) => ["templates", id] as const,
};

export function useTemplates() {
  return useQuery({
    queryKey: templateQueryKeys.all,
    queryFn: getTemplates,
  });
}

export function useTemplate(id: string) {
  return useQuery({
    queryKey: templateQueryKeys.detail(id),
    queryFn: () => getTemplateById(id),
    enabled: Boolean(id),
  });
}