import { Link } from "react-router-dom";

import type { Template } from "@/features/templates/types/template.types";

type TemplateCardProps = {
  template: Template;
};

function TemplateCard({ template }: TemplateCardProps) {
  return (
    <article className="template-card">
      <span className="template-card__category">{template.category}</span>

      <h2 className="template-card__title">{template.title}</h2>

      <p className="template-card__description">{template.description}</p>

      <Link className="template-card__link" to={`/templates/${template.id}`}>
        View template
      </Link>
    </article>
  );
}

export default TemplateCard;