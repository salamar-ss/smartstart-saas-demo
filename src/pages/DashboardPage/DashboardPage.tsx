import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { useProjects } from "@/features/projects/hooks/useProjects";
import ProjectCard from "@/features/projects/components/ProjectCard/ProjectCard";
import { filterProjects, type ProjectStatusFilter } from "@/features/projects/utils/projectFilters";

import Container from "@/shared/components/Container/Container";
import ErrorState from "@/shared/components/ErrorState/ErrorState";
import Loader from "@/shared/components/Loader/Loader";


import Input from "@/shared/components/Input/Input";
import Select from "@/shared/components/Select/Select";

function DashboardPage() {
  const { user } = useAuth();
  const { data: projects, isLoading, isError, refetch } = useProjects();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<ProjectStatusFilter>("all");

  const filteredProjects = useMemo(() => {
    return filterProjects({
      projects: projects ?? [],
      search,
      status,
    });
  }, [projects, search, status]);

  return (
    <Container>
      <section className="dashboard-page">
        <div className="dashboard-page__header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user?.name}. Manage your SmartStart projects.</p>
          </div>

          <Link className="dashboard-page__action" to="/generator">
            Create Project
          </Link>
        </div>

        <div className="dashboard-page__filters">
          <Input label="Search projects" name="search" placeholder="Search by name, audience or offer..." registerProps={{ value: search, onChange: (event) => setSearch(event.target.value) }} />

          <Select
            label="Status"
            name="status"
            options={[
              { label: "All", value: "all" },
              { label: "Draft", value: "draft" },
              { label: "Published", value: "published" },
            ]}
            registerProps={{ value: status, onChange: (event) => setStatus(event.target.value as ProjectStatusFilter) }}
          />
        </div>

        {isLoading && <Loader text="Loading projects..." />}

        {isError && <ErrorState message="Failed to load projects." actionLabel="Try again" onAction={() => refetch()} />}

        {!isLoading && !isError && filteredProjects.length === 0 && (
          <div className="dashboard-page__empty">
            <h2>No projects found</h2>
            <p>Try another search or create a new SmartStart project.</p>
          </div>
        )}

        {!isLoading && !isError && filteredProjects.length > 0 && (
          <div className="dashboard-page__grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </Container>
  );
}

export default DashboardPage;