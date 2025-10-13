import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

/**
 * Navigation component that provides routing links for the application
 * Features responsive design and accessible navigation
 * @component
 * @returns {JSX.Element} Navigation bar with links to Home, Todos, and Contact pages
 */
const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <ul className="nav-links">
        <li>
          <Link to="/" aria-label="Navigate to home page">Home</Link>
        </li>
        <li>
          <Link to="/todos" aria-label="Navigate to todo list">Todos</Link>
        </li>
        <li>
          <Link to="/contact" aria-label="Navigate to contact form">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;