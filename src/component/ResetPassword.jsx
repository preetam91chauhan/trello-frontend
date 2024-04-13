import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ResetPasswordApi } from "../common/ApiContainer";

const ResetPassword = () => {
  const navigate = useNavigate();
  const initialValue = {
    password: "",
    confirmPassword: "",
  };
  const [state, setState] = useState(initialValue);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      ResetPasswordApi(state.password)
        .then((res) => console.log("res", res))
        .catch((err) => console.log("err", err));
      setState(initialValue);
      console.log("api is fired");
      navigate("/login");
    } else {
      console.log("both the vlaue are not same");
      return;
    }
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "blueviolet" }}> Choose a password</h2>
        <p style={{ color: "red" }}>
          Password must be of 8 character comprising letters and digit
        </p>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter your password"
            value={state.password}
          />
          <br />
          <label htmlFor="confirmPassword">confirmPassword:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="enter your Password again"
            value={state.confirmPassword}
          />
          <br />

          <button
            type="submit"
            style={{ marginLeft: "50px", marginTop: "20px" }}
          >
            {" "}
            continue
          </button>
        </form>

        {/* <button onClick={() => navigate(-1)} > back </button> */}
      </div>
    </>
  );
};

export default ResetPassword;
