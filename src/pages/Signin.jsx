import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import axiosInstance from "../services/axiosInstance";
import { decodeJwt } from "../utils/JWTutil";


function Signin() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [vaild, setIsFormValid] = useState(false)

  useEffect(() => {
    const validateForm = () => {
      return (
        email.trim() !== "" &&
        password.trim() !== ""
      );
    };

    setIsFormValid(validateForm());
  }, [email, password]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email: email,
        password: password
      }

      const response = await axiosInstance.post("user-control/login", payload)
      console.log(payload.email, payload.password)

      const userData = response.data;

      localStorage.setItem("token", userData);
      const jwtPayload = decodeJwt(userData);

      localStorage.setItem("email", jwtPayload.email);
      localStorage.setItem("role", jwtPayload.role);

      if (jwtPayload.role === "ADMIN") {
        navigate("/Admin");
      } else if (jwtPayload.role === "USER") {
        navigate("/CustomerHome");
      }

    } catch (err) {
      console.error("Error:", err);
      alert("Login failed. Check your email and password.");
    }

  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "400px", borderRadius: "15px" }}
      >
        {/* Title */}
        <div className="d-flex align-items-center bg-warning rounded p-2 mb-3">
          <img
            src={logo}
            alt="RideWave Logo"
            style={{ width: "45px", height: "45px", objectFit: "contain" }}
            className="me-2"
          />
          <div>
            <h5 className="mb-0 fw-bold text-dark">Welcome Back</h5>
            <small className="text-dark fw-bold">
              Premier Car Rental Service In Sri Lanka
            </small>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email address</label>
          </div>

          {/* Password */}
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>

          {/* Remember me */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
            <Link to="/ForgotPw" part="" style={{ padding: "70px" }}>forgetEmail</Link>

          </div>

          {/* Buttons */}

          <button className="btn btn-warning w-100 mb-2 fw-bold" disabled={!vaild} >
            Sign In
          </button>
        </form>


        <Link to="/Home">
          <button
            className="btn btn-outline-secondary w-100 fw-bold"
          >
            Back to Home
          </button>
        </Link>

        {/* Footer */}
        <p className="text-center text-muted mt-4 mb-0">
          © 2025 RideWave
        </p>
      </div>
    </div>
  );
}

export default Signin;
