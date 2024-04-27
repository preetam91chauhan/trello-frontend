import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./userNavbar/UserNav";
import { NavLink } from "react-router-dom";
import Sidebar from "./sideBar/SideBar2";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";

const Userhome = () => {
  const auth = useSelector((state) => state.auth);
  console.log("auth", auth);
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <Header />
        {/* Profile */}
        <Profile />
        {/* Main content */}
        <div className="p-4">{/* Add your main content here */}</div>
      </div>
    </div>
  );
};

export default Userhome;
