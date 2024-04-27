import React from "react";
import "./App.css";
import About from "./component/About";
import Home from "./component/Home";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./component/SignUp";
import Wrong from "./component/Wrong";
import ForgetPassword from "./component/ForgetPassword";
import ResetPassword from "./component/ResetPassword";
import UserDetail from "./component/UserDetail";
import UserTask from "./component/UserTask";
import UserTaskDetails from "./component/UserTaskDetails";
import { AuthProvider } from "./component/Auth";
import Lginbytw from "./component/Lginbytw";
import Userhome from "./component/Userhome";
import RegisterNew from "./component/RegisterNew";
import LoginPage from "./component/Login/Login";
import ForgetPasswordNew from "./component/ForgetPasswordNew";
import Workspace from "./component/userNavbar/Workspace";
import Recent from "./component/userNavbar/Recent";
import Create from "./component/userNavbar/Create";

function App() {
  return (
    <AuthProvider>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Lginbytw /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="about" element={<About />}>
          <Route path="user-details" element={<UserDetail />} />
          <Route index element={<UserDetail />} />

          <Route path="user-task" element={<UserTask />}>
            <Route path=":details" element={<UserTaskDetails />} />
          </Route>
        </Route> */}

        <Route path="login" element={<Lginbytw />} />
        {/* <Route path="register" element={<SignUp />} /> */}
        <Route path="register" element={<RegisterNew />} />

        <Route path="forgot-password" element={<ForgetPasswordNew />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="user-home" element={<Userhome />}>
          <Route path="workspace" element={<Workspace />} />
          <Route path="home" element={<Home />} />

          {/* <Route index element={<Workspace />} /> */}

          <Route path="recent" element={<Recent />} />

          {/* <Route path="create" element={<Create />} /> */}
        </Route>
        {/* <Route path="workspace" element={<Workspace />} /> */}

        <Route path="create" element={<Create />} />

        <Route path="*" element={<Wrong />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
