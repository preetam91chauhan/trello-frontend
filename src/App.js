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
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />}>
          <Route path="user-details" element={<UserDetail />} />
          <Route index element={<UserDetail />} />

          <Route path="user-task" element={<UserTask />}>
            <Route path=":details" element={<UserTaskDetails />} />
          </Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgetPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />

        <Route path="*" element={<Wrong />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
