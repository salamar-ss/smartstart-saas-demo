import type { Template } from "@/features/templates/types/template.types";

const templates: Template[] = [
  {
    id: "coach-launch",
    title: "Coach Launch Page",
    description: "A focused landing page for coaches, mentors and consultants.",
    category: "coach",
    sections: ["Hero", "Transformation", "Offer", "Testimonials", "CTA"],
  },
  {
    id: "course-funnel",
    title: "Online Course Funnel",
    description: "A conversion page for selling online courses and trainings.",
    category: "course",
    sections: ["Hero", "Curriculum", "Benefits", "Bonuses", "Checkout CTA"],
  },
  {
    id: "service-business",
    title: "Service Business Page",
    description: "A clear offer page for freelancers and local service providers.",
    category: "service",
    sections: ["Problem", "Solution", "Process", "Pricing", "Contact CTA"],
  },
  {
    id: "creative-portfolio",
    title: "Creative Portfolio Funnel",
    description: "A portfolio-style landing page for artists and designers.",
    category: "creative",
    sections: ["Hero", "Work Samples", "About", "Inquiry CTA"],
  },
  {
    id: "product-offer",
    title: "Product Offer Page",
    description: "A direct sales page for physical or digital products.",
    category: "product",
    sections: ["Hero", "Product Benefits", "Offer Stack", "Guarantee", "Buy CTA"],
  },
];

function wait(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export async function getTemplates(): Promise<Template[]> {
  await wait(500);

  return templates;
}

export async function getTemplateById(id: string): Promise<Template> {
  await wait(400);

  const template = templates.find((item) => item.id === id);

  if (!template) {
    throw new Error("Template not found.");
  }

  return template;
}