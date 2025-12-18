import React from "react";
import logo from "../assets/logo.png";

function CustomerNavbar() {
  return (
    <header className="p-1 text-bg-dark">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">

          {/* Logo */}
          <a href="#" className="me-auto">
            <img
              src={logo}
              alt="RideWave Logo"
              style={{ width: "100px", height: "70px" }}
            />
          </a>

          {/* Menu */}
          <ul className="nav mb-2 mb-md-0">
            <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
            <li><a href="#" className="nav-link px-2 text-white">My Booking</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Payments</a></li>
          </ul>

          {/* Button */}
          <div className="ms-3">
            <button className="btn btn-warning fw-bold">Logout</button>
          </div>

        </div>
      </div>
    </header>
  );
}

export default CustomerNavbar;
