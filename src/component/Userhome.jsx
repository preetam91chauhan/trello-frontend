import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./userNavbar/UserNav";
import { NavLink } from "react-router-dom";
import Sidebar from "./sideBar/SideBar";

const Userhome = () => {
  const auth = useSelector((state) => state.auth);
  console.log("auth", auth);
  return (
    <>
      {/* <Navbar /> */}
      <p>this is userpage</p>
      {/* <NavLink to="workspace">workspace</NavLink>
      <NavLink to="/create">create</NavLink> */}
      <Sidebar />
    </>
  );
};

export default Userhome;
