import { Link, useParams } from "react-router-dom";

import { useTemplate } from "@/features/templates/hooks/useTemplates";

import Container from "@/shared/components/Container/Container";
import ErrorState from "@/shared/components/ErrorState/ErrorState";
import Loader from "@/shared/components/Loader/Loader";


function TemplateDetailsPage() {
  const { id } = useParams();

  const templateId = id ?? "";

  const { data: template, isLoading, isError, refetch } = useTemplate(templateId);

  return (
    <Container>
      <section className="template-details-page">
        {isLoading && <Loader text="Loading template..." />}

        {isError && <ErrorState title="Template not found" message="This template could not be loaded." actionLabel="Try again" onAction={() => refetch()} />}

        {template && (
          <article className="template-details">
            <Link className="template-details__back" to="/templates">
              ← Back to templates
            </Link>

            <span className="template-details__category">{template.category}</span>

            <h1>{template.title}</h1>

            <p>{template.description}</p>

            <div className="template-details__sections">
              <h2>Recommended sections</h2>

              <ul>
                {template.sections.map((section) => (
                  <li key={section}>{section}</li>
                ))}
              </ul>
            </div>

            <Link className="template-details__cta" to="/generator">
              Use this template
            </Link>
          </article>
        )}
      </section>
    </Container>
  );
}

export default TemplateDetailsPage;