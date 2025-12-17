// src/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // base URL for your API
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default axiosInstance;
