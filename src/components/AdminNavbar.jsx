import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";



function AdminNavbar() {
  return (
    <header className="p-1 text-bg-dark">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between ">

          {/* Logo */}
          <Link to="/Home" className="me-auto" />
          <img
            src={logo}
            alt="RideWawe Logo"
            className="d-inline-block align-top"
            style={{ width: "100px", height: "70px" }}
          />

          {/* </Link> */}

          {/* Menu - RIGHT */}
          <div className="d-flex align-items-center" style={{ gap: "15px" }}>
            <ul className="nav mb-0">
              <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Booking</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Manage Vehicle</a></li>
              <li><a href="#" className="nav-link px-2 text-white">Payments</a></li>
            </ul>

            {/* Buttons - RIGHT */}
            <div className="ms-3 d-flex" style={{ gap: "10px" }}>
              <Link to="/LogoutAdmin" />
              <button className="btn btn-warning fw-bold">Logout</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;
