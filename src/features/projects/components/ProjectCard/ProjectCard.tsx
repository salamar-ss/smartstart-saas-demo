import { Link } from "react-router-dom";

import type { Project } from "@/features/projects/types/project.types";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <span className="project-card__status">{project.status ?? "draft"}</span>

      <h2 className="project-card__title">{project.businessName || project.title}</h2>

      <p className="project-card__text">Audience: {project.audience || "Not specified"}</p>

      <p className="project-card__text">Offer: {project.offer || project.body}</p>

      <Link className="project-card__link" to={`/projects/${project.id}`}>
        View Preview
      </Link>
    </article>
  );
}

export default ProjectCard;