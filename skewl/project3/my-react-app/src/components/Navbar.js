import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you will create a Navbar.css for custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;