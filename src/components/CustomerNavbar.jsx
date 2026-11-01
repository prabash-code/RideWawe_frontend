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

            <div className="d-flex align-items-center" style={{ gap: "15px" }}>


              {/* Buttons - RIGHT */}
              <div className="ms-3 d-flex" style={{ gap: "10px" }}>
                              <Link to="/Feedback" >
                  <button className="btn btn-warning fw-bold">Add Feedback</button>
                </Link>

                <Link to="/Home" >
                  <button className="btn btn-warning fw-bold">Logout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}

export default AdminNavbar;
