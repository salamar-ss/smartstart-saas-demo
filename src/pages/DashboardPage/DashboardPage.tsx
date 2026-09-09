import { useAuth } from "@/features/auth/hooks/useAuth";
import { useProjects } from "@/features/projects/hooks/useProjects";

import Container from "@/shared/components/Container/Container";
import ErrorState from "@/shared/components/ErrorState/ErrorState";
import Loader from "@/shared/components/Loader/Loader";

function DashboardPage() {
  const { user } = useAuth();
  const { data: projects, isLoading, isError, refetch } = useProjects();

  return (
    <Container>
      <section className="dashboard-page">
        <div className="dashboard-page__header">
          <h1>Dashboard</h1>
          <p>Welcome, {user?.name}. Your SmartStart projects will be listed here.</p>
        </div>

        {isLoading && <Loader text="Loading projects..." />}      

        {isError && <ErrorState message="Failed to load projects." actionLabel="Try again" onAction={() => refetch()} />}
        
        {projects && (
          <div className="dashboard-page__grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <h2 className="project-card__title">{project.title}</h2>
                <p className="project-card__text">{project.body}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </Container>
  );
}

export default DashboardPage;