import { Link } from "react-router-dom";
import './Navbar.css'; // Asegúrate de tener el archivo CSS para el navbar

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        <button className="navbar-btn">Home</button>
      </Link>

      <Link to="/projects" className="navbar-link">
        <button className="navbar-btn">Bike Routes</button>
      </Link>
      
      {/* Enlace actualizado para About */}
      <Link to="/about" className="navbar-link">
        <button className="navbar-btn">About</button>
      </Link>

      {/* Enlace actualizado para Contact */}
      <Link to="/contact" className="navbar-link">
        <button className="navbar-btn">Contact</button>
      </Link>
    </nav>
  );
}

export default Navbar;
