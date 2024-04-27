import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { RegisterUserApi } from "../common/ApiContainer";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialState);
  // const formik = useFormik({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterUserApi({ ...state })
      .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err));

    setState(initialState);
    navigate("/login");
  };

  return (
    <>
      <div  style={{ display: "grid", justifyContent: "center" }}>
        <h2 style={{ color: "blueviolet" }}>THIS IS THE REGISTER PAGE </h2>
        <form
          style={{ display: "grid" }}
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          <label htmlFor="name"> Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            placeholder="enter the name"
          />

          <label htmlFor="email"> Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            placeholder="enter the email"
          />

          <label htmlFor="password"> Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            placeholder="enter the password"
          />
          <button style={{ margin: "10px" }}>SUBMIT</button>
        </form>

        <div style={{ color: "#bc986a" }}>
          If you have already Registered please visit <br />
          <NavLink to="/login">Login</NavLink>
          {/* <button onClick={() => navigate(-1)}>login </button> */}
        </div>
        {/* <button onClick={() => navigate("/login")}>login </button> */}
      </div>
    </>
  );
};

export default SignUp;
