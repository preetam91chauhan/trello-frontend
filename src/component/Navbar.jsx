import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      {/* <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink> */}
      <NavLink to="/login">login</NavLink>
    </nav>
  );
};

export default Navbar;
