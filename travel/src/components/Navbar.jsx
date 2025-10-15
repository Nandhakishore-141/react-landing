import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Travel Finder</h2>
      <div>
        <Link to="/" className="navlink">
          Home
        </Link>
        <Link to="/destinations" className="navlink">
          Destinations
        </Link>
        <Link to="/about" className="navlink">
        About 
        </Link>
        <Link to="/login" className="navlink">
        Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
