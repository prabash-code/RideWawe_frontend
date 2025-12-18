import React from "react";
import AdminNavbar from "../components/AdminNavbar";

function AdminManageVehicles() {
  return (
    <>
      <AdminNavbar />

      <div className="container my-5 d-flex justify-content-center">
        <div className="card shadow p-4" style={{ maxWidth: "700px", width: "100%", borderRadius: "15px" }}>
          <h3 className="text-center mb-4 fw-bold">MANAGE VEHICLES</h3>

          {/* Vehicle Image */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="img"
              placeholder="Image URL"
            />
            <label htmlFor="img">Add Image URL</label>
          </div>

          {/* Brand & Model */}
          <div className="row g-3 mb-3">
            <div className="col">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="brand"
                  placeholder="Brand"
                />
                <label htmlFor="brand">Brand</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="model"
                  placeholder="Model"
                />
                <label htmlFor="model">Model</label>
              </div>
            </div>
          </div>

          {/* Registration Number & Year */}
          <div className="row g-3 mb-3">
            <div className="col">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="regNo"
                  placeholder="Registration Number"
                />
                <label htmlFor="regNo">Registration Number</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="year"
                  placeholder="Year (2000-2025)"
                />
                <label htmlFor="year">Registration Year</label>
              </div>
            </div>
          </div>

          {/* Fuel Type & Seating Capacity */}
          <div className="row g-3 mb-3">
            <div className="col">
              <div className="form-floating">
                <select className="form-select" id="fuelType" defaultValue="">
                  <option value="" disabled>Select fuel type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                </select>
                <label htmlFor="fuelType">Fuel Type</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="seating"
                  placeholder="Seating Capacity"
                />
                <label htmlFor="seating">Seating Capacity</label>
              </div>
            </div>
          </div>

          {/* Daily Rental & Vehicle Type */}
          <div className="row g-3 mb-3">
            <div className="col">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="rental"
                  placeholder="Daily Rental"
                />
                <label htmlFor="rental">Daily Rental</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating">
                <select className="form-select" id="vehicleType" defaultValue="">
                  <option value="" disabled>Select vehicle type</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Van">Van</option>
                  <option value="Sport">Sport</option>
                </select>
                <label htmlFor="vehicleType">Vehicle Type</label>
              </div>
            </div>
          </div>

          {/* Vehicle Status */}
          <div className="form-floating mb-3">
            <select className="form-select" id="status" defaultValue="">
              <option value="" disabled>Select Status</option>
              <option value="Available">Available</option>
              <option value="Rented">Rented</option>
              <option value="Maintenance">Maintenance</option>
            </select>
            <label htmlFor="status">Vehicle Status</label>
          </div>

          {/* Description */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
            />
            <label htmlFor="description">Description of Vehicle</label>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-column gap-2 mt-3">
            <button className="btn btn-warning fw-bold py-2">Add</button>
            <button className="btn btn-warning fw-bold py-2">Delete</button>
            <button className="btn btn-warning fw-bold py-2">Update</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminManageVehicles;
