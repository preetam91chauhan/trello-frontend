import React from "react";
import { useParams } from "react-router-dom";

const UserTaskDetails = () => {
  const params = useParams();
  const details = params.details;
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
      <div>{details}</div>
    </>
  );
};

export default UserTaskDetails;
