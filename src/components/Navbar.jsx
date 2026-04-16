import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";


function Navbar() {
  return (
    <header className="p-1 text-bg-dark">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">

          {/* Logo */}
            <Link to="/Home" className="me-auto">
            <img
              src={logo}
              alt="RideWawe Logo"
              className="d-inline-block align-top"
              style={{width :"100px" , height:"70px"}}
            />

          </Link>

          {/* Menu - RIGHT */}
          <ul className="nav mb-2 mb-md-0">
            <li><a href="/Home" className="nav-link px-2 text-secondary">Home</a></li>
            <li><a href="/Bookings" className="nav-link px-2 text-white">Booking</a></li>
            <li><a href="/Packages" className="nav-link px-2 text-white">Packages</a></li>
            <li><a href="/About" className="nav-link px-2 text-white">About</a></li>
            <li><a href="/Contact" className="nav-link px-2 text-white">Contact</a></li>
          </ul>

          {/* Buttons - RIGHT */}
          <div className="ms-3 d-flex" style={{gap:"10px"}}>
            <Link to="/Register">
              <button className="btn btn-warning">Sign-up</button>             
            </Link>

            <Link to="/Signin">
              <button className="btn btn-outline-light me-2">Login</button>
            </Link>
        
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
