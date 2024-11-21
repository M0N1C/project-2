/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import './ProjectCard.css'; 

function ProjectCard({ title, description, id }) {
  return (
    <div className="project-card card">
      <Link to={`/projects/${id}`} className="project-link">
        <h3 className="project-title">{title}</h3>
      </Link>
      <p className="project-description">{description}</p>
    </div>
  );
}

export default ProjectCard;
