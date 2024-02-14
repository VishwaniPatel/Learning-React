// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* Using absolute paths */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Using absolute paths */}
          <Link to="/about">About Us</Link>
        </li>
        <li>
          {/* Using absolute paths */}
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          {/* Using absolute paths */}
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/projectList">Project List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
