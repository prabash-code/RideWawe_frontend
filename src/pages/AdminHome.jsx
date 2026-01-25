import React from "react";
import AdminNavbar from "../components/AdminNavbar";

import "bootstrap-icons/font/bootstrap-icons.css";

function AdminHome() {
  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: "#15171a", color: "#e0e0e0" }}>
      
      {/* --- SIDEBAR --- */}
      <div className="bg-black d-flex flex-column" style={{ width: "260px", borderRight: "1px solid #333" }}>
        <div className="p-4">
          <h4 className="text-warning fw-bold mb-5" style={{ letterSpacing: "2px" }}>
            🚗 RideWave
          </h4>
          
          <nav className="nav flex-column gap-1">
            <div style={sidebarItem}><i className="bi bi-grid-fill"></i> Dashboard</div>
            <div style={sidebarItem}><i className="bi bi-car-front-fill"></i> Car Listings</div>
            <div style={sidebarItem}><i className="bi bi-bar-chart-fill"></i> Analytics</div>
            <div style={activeSidebarItem}><i className="bi bi-shield-lock-fill"></i> Dashboard</div>
            <div style={sidebarItem}><i className="bi bi-calendar-check"></i> Bookings</div>
            <div style={sidebarItem}><i className="bi bi-people"></i> Customers</div>
            <div style={sidebarItem}><i className="bi bi-envelope"></i> Messages</div>
            <div style={sidebarItem}><i className="bi bi-gear"></i> Settings</div>
          </nav>
        </div>
        
        <div className="mt-auto p-4 text-secondary" style={{ fontSize: "0.7rem" }}>
          © 2026 RideWave - Premier Service
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-grow-1 d-flex flex-column">
        <AdminNavbar />

        {/* Hero Banner Section */}
        <div style={heroBannerStyle}>
          <div className="text-center">
            <h1 style={{ letterSpacing: "6px", fontWeight: "bold", textShadow: "2px 2px 10px rgba(0,0,0,0.8)" }}>
              DASHBOARD OVERVIEW
            </h1>
            <div style={{ width: "150px", height: "3px", backgroundColor: "#f6c23e", margin: "10px auto" }}></div>
          </div>
        </div>

        {/* Dashboard Content Container */}
        <div className="p-4 px-5">
          
          <div className="row g-4 mb-5">
            {/* Table Section */}
            <div className="col-lg-8">
              <div style={cardStyle}>
                <div className="d-flex align-items-center mb-4 gap-2">
                   <i className="bi bi-car-front text-warning fs-4"></i>
                   <h5 className="mb-0 fw-bold">Recent Bookings</h5>
                </div>
                
                <table className="table table-dark table-hover border-secondary align-middle mb-0" style={{ fontSize: "0.85rem" }}>
                  <thead className="text-warning text-uppercase">
                    <tr style={{ borderBottom: "2px solid #f6c23e" }}>
                      <th className="py-3 border-0">ID</th>
                      <th className="py-3 border-0">Start Date</th>
                      <th className="py-3 border-0">End Date</th>
                      <th className="py-3 border-0">Status</th>
                      <th className="py-3 border-0">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 border-0 text-secondary">RW2584</td>
                      <td className="py-3 border-0 text-secondary">CAR-1023</td>
                      <td className="py-3 border-0 text-secondary">2024-04-24</td>
                      <td className="py-3 border-0 text-secondary">Pending</td>
                      <td className="py-3 border-0">
                        <button className="btn btn-sm btn-outline-light me-1 px-3">Pay</button>
                        <button className="btn btn-sm btn-outline-warning px-3">Cancel</button>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#f6c23e", color: "#000" }}>
                      <td className="py-3 border-0 fw-bold">Confirmed</td>
                      <td className="py-3 border-0">2024-04-24</td>
                      <td className="py-3 border-0">2024-04-21</td>
                      <td className="py-3 border-0 fw-bold">Pending</td>
                      <td className="py-3 border-0">
                        <button className="btn btn-sm btn-dark px-3">Pay</button>
                        <button className="btn btn-sm btn-outline-dark px-3">Cancel</button>
                      </td>
                    </tr>
                    <tr style={{ backgroundColor: "#c0392b" }}>
                      <td className="py-3 border-0 fw-bold">Cancelled</td>
                      <td className="py-3 border-0">2024-04-26</td>
                      <td className="py-3 border-0">2024-04-21</td>
                      <td className="py-3 border-0 fw-bold text-warning">Cancelled</td>
                      <td className="py-3 border-0">
                        <button className="btn btn-sm btn-dark px-3">View</button>
                        <button className="btn btn-sm btn-dark px-3">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Metrics Side Panels */}
            <div className="col-lg-4">
              {/* Analytics Card */}
              <div style={{ ...cardStyle, marginBottom: "20px" }}>
                <h6 className="text-secondary mb-3 fw-bold">Live Analytics</h6>
                <div style={statLine}>
                  <span className="text-warning">●</span> Revenue 
                  <span className="ms-auto fw-bold text-white">$1,450</span>
                </div>
                <div style={statLine}>
                  <span className="text-info">●</span> New Users 
                  <span className="ms-auto fw-bold text-white">3240</span>
                </div>
                <div style={statLine}>
                  <span className="text-success">●</span> Active Vehicles 
                  <span className="ms-auto fw-bold text-white">85%</span>
                </div>
              </div>

              {/* Key Metrics Card */}
              <div style={cardStyle}>
                <h6 className="text-secondary mb-2 fw-bold">Key Metrics</h6>
                <div className="d-flex align-items-end justify-content-between mb-3">
                  <div>
                    <h2 className="text-warning fw-bold mb-0">$1.2M</h2>
                    <small className="text-secondary">Total Revenue</small>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold fs-4">85%</div>
                    <button className="btn btn-sm btn-danger px-3 py-1 mt-1">View</button>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid #333", paddingTop: "10px", fontSize: "0.8rem", color: "#666" }}>
                  Fleet Utilization: <span className="text-white">New Bookings</span>
                </div>
              </div>
            </div>

          </div>

          <footer className="text-center text-secondary py-4" style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>
             © 2026 RIDEWAVE - PREMIER CAR RENTAL SERVICE
          </footer>
        </div>
      </div>
    </div>
  );
}

// --- CSS Objects for Inline Styling ---

const sidebarItem = {
  padding: "12px 15px",
  color: "#777",
  fontSize: "0.9rem",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  cursor: "pointer",
  transition: "0.3s"
};

const activeSidebarItem = {
  ...sidebarItem,
  backgroundColor: "#f6c23e",
  color: "#000",
  fontWeight: "bold",
  borderRadius: "4px"
};

const heroBannerStyle = {
  height: "220px",
  background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1350&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px solid #333"
};

const cardStyle = {
  backgroundColor: "#1c1e22",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
  border: "1px solid #2d3035"
};

const statLine = {
  display: "flex",
  padding: "10px 0",
  borderBottom: "1px solid #222",
  fontSize: "0.9rem",
  color: "#888"
};

export default AdminHome;