import logo from "../assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";

function ForgotPw() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "400px", height: "500px", borderRadius: "15px" }}
      >
        {/* Header */}
        <div className="d-flex align-items-center bg-warning rounded p-2 mb-4">
          <img
            src={logo}
            alt="RideWave Logo"
            style={{ width: "45px", height: "45px", objectFit: "contain" }}
            className="me-2"
          />
          <div>
            <h5 className="mb-0 fw-bold text-dark">Forgot Password</h5>
            <small className="text-dark fw-bold">
              Premier Car Rental Service In Sri Lanka
            </small>
          </div>
        </div>

        {/* Email */}
        <div className="form-floating mb-4" style={{ marginTop: "40px" }}>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
        </div>

        {/* OTP */}
        <div className="form-floating mb-4">
          <input
            type="text"
            className="form-control"
            id="otp"
            placeholder="Enter OTP"
          />
          <label htmlFor="otp">Enter OTP</label>
        </div>

        {/* Buttons */}
        <Link to="/ChangePw" className="text-decoration-none">
          <button className="btn btn-warning w-100 mb-2 fw-bold">
            Verify & Continue
          </button>
        </Link>

        <Link to="/Home" className="text-decoration-none">
          <button className="btn btn-outline-secondary w-100 fw-bold">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ForgotPw;
