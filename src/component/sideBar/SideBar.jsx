import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full fixed top-0 left-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2">
            <NavLink
              to="/home"
              className="block py-2 px-4 rounded transition-colors hover:bg-gray-700"
            >
              Home
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="board"
              className="block py-2 px-4 rounded transition-colors hover:bg-gray-700"
            >
              Boards
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="card"
              className="block py-2 px-4 rounded transition-colors hover:bg-gray-700"
            >
              Cards
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="label"
              className="block py-2 px-4 rounded transition-colors hover:bg-gray-700"
            >
              Labels
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="member"
              className="block py-2 px-4 rounded transition-colors hover:bg-gray-700"
            >
              Members
            </NavLink>
          </li>
          {/* Add more menu items as needed 
           <NavLink to="/create">create</NavLink>
          
          */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
