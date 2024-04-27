import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ForgetPasswordApi } from "../common/ApiContainer";

const ForgetPassword = () => {
  const navigate = useNavigate();
  // const initialValue = {
  //   email: "",
  // };
  // const [state, setState] = useState(initialValue);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // setState((prev) => ({
    //   ...prev,
    //   [name]: value,

    // }));
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ForgetPasswordApi(value)
      .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err));
    console.log(value);
    // setState(initialValue);
    setValue("");
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "blueviolet" }}> Forgot your password?</h2>
        <p style={{ color: "red" }}>
          Enter your email below to recieve link to reset password
        </p>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <label htmlFor="email">email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email"
            value={value}
          />
          <br />
          <button
            type="submit"
            style={{ marginLeft: "50px", marginTop: "20px" }}
          >
            {" "}
            Forget password
          </button>
        </form>
        <p style={{ font: "bold" }}>
          Don't have an account?
          <NavLink to="/register">SIGNUP</NavLink>
        </p>
        {/* <button onClick={() => navigate(-1)} > back </button> */}
      </div>
    </>
  );
};

export default ForgetPassword;
