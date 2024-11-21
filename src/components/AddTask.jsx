/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import './AddTask.css'; // Importamos el CSS de AddTask

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const { projectId } = props;
    const requestBody = { title, description, projectId };

    axios
      .post(`${API_URL}/tasks`, requestBody)
      .then(() => {
        setTitle("");
        setDescription("");
        props.refreshProject();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="add-task-container">
      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit} className="add-task-form">
        <div className="form-group">
          <label htmlFor="task-title">Title:</label>
          <input
            id="task-title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="task-description">Description:</label>
          <textarea
            id="task-description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="add-task-btn">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
