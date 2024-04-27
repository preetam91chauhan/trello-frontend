import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <NavLink to="logout">
      <button className="btn">lOG OUT</button>
    </NavLink>
  );
}

export default Button;
