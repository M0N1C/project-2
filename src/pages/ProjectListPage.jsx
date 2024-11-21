import { Link } from "react-router-dom";
import './ProjectListPage.css'; // Import CSS

function ProjectListPage({ projects }) {

  // Eliminar un proyecto
  const handleDelete = (id) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    // Actualizar el estado de los proyectos
    window.location.reload();  // Recargar la página para reflejar los cambios
  };

  return (
    <div className="ProjectListPage">
      {/* Button to navigate to create a new project */}
      <Link to="/projects/create">
        <button>Propose Route</button>
      </Link>

      {/* Display dynamically created projects */}
      <div className="project-list">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <button onClick={() => handleDelete(project.id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="no-projects-message">No bike routes available yet. Click "Propose Route" to create one!</p>
        )}
      </div>
    </div>
  );
}

export default ProjectListPage;
