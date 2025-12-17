import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Signin() {


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
            <small className="text-dark">
              Premier Car Rental Service In Sri Lanka
            </small>
          </div>
        </div>

        {/* Email */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
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
        </div>

        {/* Buttons */}
        <button className="btn btn-warning w-100 mb-2 fw-bold" >
          Sign In
        </button>

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
