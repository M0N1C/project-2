import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateProjectPage.css'; // Import CSS

function CreateProjectPage({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Pass the new project data to the parent component
    onAddProject(title, description);

    // Reset form fields
    setTitle("");
    setDescription("");

    // Navigate back to the project list page
    navigate("/projects");
  };

  return (
    <div className="CreateProjectPage">
      <h3>Create a New Bike Route</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Add Route</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;
