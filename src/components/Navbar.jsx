import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
      <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li>
          <Link to="/projects" className="navbar-link">Projects</Link>
        </li>
        <li>
          <Link to="/experience" className="navbar-link">Experience</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
