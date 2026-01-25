import React from "react";
import AdminNavbar from "../components/AdminNavbar";

function AdminManageVehicles() {
  return (
    <div className="min-vh-100" style={{ backgroundColor: "#121212", color: "#e0e0e0" }}>
      <AdminNavbar />

      {/* Hero Banner Section */}
      <div 
        className="position-relative w-100 mb-5 d-flex align-items-center justify-content-center" 
        style={{ 
          height: "200px", 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h2 className="text-white fw-bold tracking-widest uppercase" style={{ letterSpacing: "3px" }}>
          MANAGE VEHICLES
        </h2>
      </div>

      <div className="container pb-5 d-flex justify-content-center">
        <div 
          className="p-4 shadow-lg border-0" 
          style={{ 
            maxWidth: "900px", 
            width: "100%", 
            backgroundColor: "#1e1e1e", 
            borderRadius: "10px",
            border: "1px solid #333"
          }}
        >
          <h4 className="text-center mb-4 text-light border-bottom border-secondary pb-3 mx-auto" style={{ width: "fit-content" }}>
            MANAGE VEHICLES
          </h4>

          <form className="mt-4 px-md-4">
            {/* Vehicle Image */}
            <div className="mb-4">
              <input
                type="text"
                className="form-control custom-dark-input"
                id="img"
                placeholder="Add Image URL"
              />
            </div>

            {/* Brand & Model */}
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <label className="text-light mb-2 small fw-bold">Brand</label>
                <input type="text" className="form-control custom-dark-input" id="brand" placeholder="Brand" />
              </div>
              <div className="col-md-6">
                <label className="text-light mb-2 small fw-bold">Model</label>
                <input type="text" className="form-control custom-dark-input" id="model" placeholder="Model" />
              </div>
            </div>

            {/* Registration & Year Info - Row with 3 Columns */}
            <div className="row g-4 mb-4">
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold">Registration Number</label>
                <select className="form-select custom-dark-input" id="fuelType">
                  <option selected disabled>Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold">Year (2000-2025)</label>
                <select className="form-select custom-dark-input" id="year">
                  <option selected disabled>Reg</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold">Date (2000-2025)</label>
                <select className="form-select custom-dark-input" id="seating">
                  <option selected disabled>Seating Capacity</option>
                  <option>2 Seats</option>
                  <option>4 Seats</option>
                  <option>5 Seats</option>
                </select>
              </div>
            </div>

            {/* Rental, Type, & Status */}
            <div className="row g-4 mb-4">
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold">Daily Rental</label>
                <select className="form-select custom-dark-input" id="rental">
                  <option selected disabled>Daily Rental</option>
                  <option>$50</option>
                  <option>$100</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold">Vehicle Type</label>
                <select className="form-select custom-dark-input" id="vehicleType">
                  <option selected disabled>Sedan</option>
                  <option>SUV</option>
                  <option>Luxury</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold">Vehicle Status</label>
                <select className="form-select custom-dark-input" id="status">
                  <option selected disabled>Available</option>
                  <option>Rented</option>
                  <option>Maintenance</option>
                </select>
              </div>
            </div>

            {/* Description Section */}
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <label className="text-light mb-2 small fw-bold">Description of Vehicle</label>
                <select className="form-select custom-dark-input" id="descType">
                  <option>All</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="text-light mb-2 small fw-bold">Description of Vehicle</label>
                <input type="text" className="form-control custom-dark-input" id="description" placeholder="Description of Vehicle" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-row gap-3 mt-4" style={{ width: "130px" }}>
              <button className="btn btn-warning fw-bold text-dark border-0">Add</button>
              <button className="btn btn-warning fw-bold text-dark border-0">Update</button>
            </div>
          </form>
        </div>
      </div>

      {/* Custom Scoped CSS */}
      <style>{`
        .custom-dark-input {
          background-color: #2a2a2a !important;
          border: 1px solid #444 !important;
          color: #fff !important;
          padding: 10px 15px !important;
        }
        .custom-dark-input::placeholder {
          color: #777 !important;
        }
        .custom-dark-input:focus {
          border-color: #ffc107 !important;
          box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25) !important;
        }
        .btn-warning {
          background-color: #f6c23e !important;
          transition: transform 0.2s;
        }
        .btn-warning:hover {
          background-color: #dba514 !important;
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}

export default AdminManageVehicles;