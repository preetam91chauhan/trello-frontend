import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginUserApi } from "../common/ApiContainer";

const Login = () => {
  const intialvalue = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const [state, setState] = useState(intialvalue);
  const [userData, setUserData] = useState(null);

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
    LoginUserApi({ ...state })
      .then((res) => {
        console.log("acc res", res);
        // res.data.user.name
        // console.log("res", res.data.user.email);
        // setUserData(res.data);
        // console.log("data", userData);
        // console.log("access", res.data.tokens.access);
        // console.log("access", res.data.tokens.access.token);
        if (res.status == 200) {
          const token = res.data.tokens.access.token;
          console.log(token);
          localStorage.setItem("acToken", token);
          setUserData(res.data.user.name);
        }
      })

      .catch((err) => console.log("err", err));

    setState(intialvalue);
    // navigate("/about/user-details");
  };
  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <h2 style={{ color: "blueviolet", marginLeft: "100px" }}>
          THIS IS THE LOGIN PAGE
          {/* {userData} */}
        </h2>
        <form
          style={{ display: "grid" }}
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
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
          <button style={{ margin: "10px", width: "auto" }}>SUBMIT</button>
        </form>
        {/* <div>IF YOU DON'T HAVE AN ACCOUNT PLEASE SIGNUP </div>
        <button onClick={() => navigate("/register")}> signup</button> */}
        <div style={{ color: "#bc986a" }}>
          If you don't have an account please Register
          <NavLink to="/register"> REGISTER</NavLink>
          {/* <button onClick={() => navigate(-1)}>login </button> */}
        </div>

        <div style={{ display: "block" }}>
          <h5>
            Incase you have forgotten password please click
            <NavLink style={{ textDecoration: "none" }} to="/forgot-password">
              {" "}
              FORGOT PASSWORD
            </NavLink>
          </h5>

          <br />
          <h5>
            Incase you have forgotten password please click
            <NavLink style={{ textDecoration: "none" }} to="/reset-password">
              {" "}
              RESET PASSWORD
            </NavLink>
          </h5>
        </div>
        <p>{userData}</p>
      </div>
    </>
  );
};
export default Login;
