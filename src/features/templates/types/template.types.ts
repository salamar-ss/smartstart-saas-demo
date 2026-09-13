export type TemplateCategory = "coach" | "course" | "service" | "creative" | "product";

export type Template = {
  id: string;
  title: string;
  description: string;
  category: TemplateCategory;
  sections: string[];
};