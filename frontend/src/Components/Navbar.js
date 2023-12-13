
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#333",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
    color: "white",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    margin: "0 10px",
  };
  return (

    <nav style={navStyle}>

          <Link to="/about" style={linkStyle}>About</Link>

          <Link to="/" style={linkStyle}>Home</Link>

          <Link to="/search" style={linkStyle}>Search</Link>

          <Link to="/workout" style={linkStyle}>Workout</Link>

    </nav>
  );
};

export default Navbar;