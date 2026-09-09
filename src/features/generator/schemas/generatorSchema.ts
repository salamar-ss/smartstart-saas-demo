import { z } from "zod";

export const generatorSchema = z.object({
  businessName: z.string().min(2, "Business name must be at least 2 characters."),
  audience: z.string().min(2, "Audience is required."),
  offer: z.string().min(5, "Offer must be at least 5 characters."),
  transformation: z.string().min(5, "Transformation must be at least 5 characters."),
  templateType: z.enum(["coach", "course", "service", "creative", "product"]),
  bonuses: z.string().optional(),
  guarantee: z.string().optional(),
});

export type GeneratorFormData = z.infer<typeof generatorSchema>;