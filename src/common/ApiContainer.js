import axios from "axios";
const API_BASE_PATH =
  process.env.REACT_API_BASE_PATH || "http://localhost:3000";

export const RegisterUserApi = (data) =>
  axios({
    method: "post",
    url: `${API_BASE_PATH}/v1/auth/register`,
    data,
  });

export const LoginUserApi = (data) =>
  axios({
    method: "post",
    url: `${API_BASE_PATH}/v1/auth/login`,
    data,
  });

export const ForgetPasswordApi = (data) =>
  axios({
    method: "post",
    url: `${API_BASE_PATH}/v1/auth/forgot-password`,
    data,
  });
export const ResetPasswordApi = (data) =>
  axios({
    method: "post",
    url: `${API_BASE_PATH}/v1/auth/reset-password`,
    data,
  });
