import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserTask = () => {
  return (
    <>
      <div>this is user task page</div>
      <Link to=":details"> details</Link>
      <Outlet />
    </>
  );
};

export default UserTask;
