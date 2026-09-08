import { useAuth } from "@/features/auth/hooks/useAuth";
import { useProjects } from "@/features/projects/hooks/useProjects";

import Container from "@/shared/components/Container/Container";
import ErrorState from "@/shared/components/ErrorState/ErrorState";
import Loader from "@/shared/components/Loader/Loader";

function DashboardPage() {
  const { user } = useAuth();
  const { projects, isLoadingProjects, projectsError, refetchProjects } = useProjects();

  return (
    <Container>
      <section className="dashboard-page">
        <div className="dashboard-page__header">
          <h1>Dashboard</h1>
          <p>Welcome, {user?.name}. Your SmartStart projects will be listed here.</p>
        </div>

        {isLoadingProjects && <Loader text="Loading projects..." />}

        {projectsError && <ErrorState title="Failed to load projects" message="Please try again." onRetry={() => refetchProjects()} />}

        {!isLoadingProjects && !projectsError && (
          <div className="dashboard-page__grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <span className="project-card__status">{project.status}</span>
                <h2 className="project-card__title">{project.name}</h2>
                <p className="project-card__text">Audience: {project.audience}</p>
                <p className="project-card__text">Offer: {project.offer}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </Container>
  );
}

export default DashboardPage;