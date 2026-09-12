import { Link, useParams } from "react-router-dom";

import { useProject } from "@/features/projects/hooks/useProjects";

import Container from "@/shared/components/Container/Container";
import ErrorState from "@/shared/components/ErrorState/ErrorState";
import Loader from "@/shared/components/Loader/Loader";

function ProjectPreviewPage() {
  const { id } = useParams();

  const projectId = Number(id);

  const { data: project, isLoading, isError, refetch } = useProject(projectId);

  if (Number.isNaN(projectId)) {
    return (
      <Container>
        <section className="project-preview-page">
          <ErrorState title="Invalid project" message="This project URL is not valid." />
        </section>
      </Container>
    );
  }

  return (
    <Container>
      <section className="project-preview-page">
        {isLoading && <Loader text="Loading project preview..." />}

        {isError && <ErrorState title="Failed to load project" message="Please try again." actionLabel="Try again" onAction={() => refetch()} />}

        {project && (
          <article className="landing-preview">
            <div className="landing-preview__top">
              <Link to="/dashboard">← Back to dashboard</Link>
            </div>

            <header className="landing-preview__hero">
              <span className="landing-preview__eyebrow">{project.templateType || "SmartStart Template"}</span>

              <h1>{project.businessName || project.title}</h1>

              <p>
                Helping {project.audience || "your audience"} achieve{" "}
                {project.transformation || "a clear and valuable transformation"}.
              </p>

              <Link className="landing-preview__cta" to="/generator">
                Create another project
              </Link>
            </header>

            <section className="landing-preview__section">
              <h2>Your Offer</h2>
              <p>{project.offer || project.body}</p>
            </section>

            <section className="landing-preview__section">
              <h2>Why it matters</h2>
              <p>
                This page is structured around one clear audience, one core offer and one transformation. That makes the message easier to understand and easier to act on.
              </p>
            </section>

            <section className="landing-preview__section">
              <h2>Bonuses</h2>
              <p>{project.bonuses || "Add bonuses to increase perceived value and make the offer easier to accept."}</p>
            </section>

            <section className="landing-preview__section">
              <h2>Guarantee</h2>
              <p>{project.guarantee || "Add a simple guarantee or risk reversal to reduce hesitation."}</p>
            </section>
          </article>
        )}
      </section>
    </Container>
  );
}

export default ProjectPreviewPage;