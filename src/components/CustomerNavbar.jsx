import React from "react";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";

function CustomerNavbar() {
  return (
    <header className="p-1 text-bg-dark">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">

          {/* Logo */}
          <Link to="/HomeCustomer" className="me-auto" >
          <img
            src={logo}
            alt="RideWawe Logo"
            className="d-inline-block align-top"
            style={{ width: "100px", height: "70px" }}
          />
          </Link>

          {/* Menu */}
          <ul className="nav mb-2 mb-md-0">
            <li><a href="" className="nav-link px-2 text-secondary">Home</a></li>
            <li><a href="/BookingsCustomer" className="nav-link px-2 text-white">My Booking</a></li>
            <li><a href="/PaymentsCustomer" className="nav-link px-2 text-white">Payments</a></li>
          </ul>

          {/* Button */}
          <div className="ms-3">
            <Link to="/Home">
              <button className="btn btn-warning fw-bold">Logout</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
    
  );

}

export default CustomerNavbar;
