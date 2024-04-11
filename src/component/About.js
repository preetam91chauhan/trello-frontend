import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>this is the about page</div>
      <nav>
        <Link to="user-details"> user Details</Link>
        <Link to="user-task"> user task</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default About;
