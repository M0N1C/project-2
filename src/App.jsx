import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect hooks

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import AboutPage from "./pages/AboutPage";  
import ContactPage from "./pages/ContactPage";  
import Footer from "./components/Footer"; 

function App() {
  // Initialize state with the data from localStorage (if available)
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });

  // Function to add a new project
  const addProject = (title, description) => {
    const newProject = {
      id: projects.length + 1, // Generate a simple unique ID
      title,
      description,
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);

    // Save updated projects to localStorage
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects"
          element={<ProjectListPage projects={projects} />}
        />
        <Route
          exact
          path="/projects/create"
          element={<CreateProjectPage onAddProject={addProject} />}
        />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage />} />
        {/* Nuevas rutas para About y Contact */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;






