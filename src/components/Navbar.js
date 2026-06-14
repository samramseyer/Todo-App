import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

/**
 * Navigation component that provides routing links for the application
 * @component
 * @returns {JSX.Element} Navigation bar with links to Home, Todos, and Contact pages
 */
const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" aria-label="Todo List home">
          <span className="brand-icon" aria-hidden="true">✓</span>
          Todo List
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink exact to="/" activeClassName="active" aria-label="Navigate to home page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/todos" activeClassName="active" aria-label="Navigate to todo list">
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" aria-label="Navigate to contact form">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
