// src/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // base URL for your API
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});



axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // get token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;