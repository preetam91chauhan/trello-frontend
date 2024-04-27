import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import * as Icons from "react-icons/fa";
import "./UserNav.css";
// import { navItems } from "./navItems";
import { navItems } from "./navItem";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          TRELLO
          {/* <Icons.FaTree /> */}
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Recents") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <NavLink to={item.path}>{item.title}</NavLink>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
