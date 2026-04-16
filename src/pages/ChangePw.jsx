import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function ChangePw() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSavePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    navigate("/Home");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "400px", minHeight: "420px", borderRadius: "15px" }}
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
            <h5 className="mb-0 fw-bold text-dark">Change Password</h5>
            <small className="text-dark fw-bold">
              Premier Car Rental Service In Sri Lanka
            </small>
          </div>
        </div>

        {/* New Password */}
        <div className="form-floating mb-3" style={{ marginTop: "30px" }}>
          <input
            type="password"
            className="form-control"
            id="passwordT"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label htmlFor="passwordT">New Password</label>
        </div>

        {/* Confirm Password */}
        <div className="form-floating mb-4">
          <input
            type="password"
            className="form-control"
            id="passwordC"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="passwordC">Confirm Password</label>
        </div>

        {/* Buttons */}
        <button
          onClick={handleSavePassword}
          className="btn btn-warning w-100 mb-2 fw-bold"
        >
          Save New Password
        </button>

        <Link to="/Home" className="text-decoration-none">
          <button className="btn btn-outline-secondary w-100 fw-bold">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ChangePw;
