import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import heroImage from '../assets/benz.jpg';
import {Link} from "react-router-dom"

function AdminBookings() {
  const bookings = [
    { id: "RW2584", regNo: "CAR-1023", start: "2024-04-24", end: "2024-04-24", status: "Pending", total: "$240", type: "default" },
    { id: "Confirmed", regNo: "2024-04-24", start: "2024-04-21", end: "Pending", status: "Pending", total: "$240", type: "confirmed" },
    { id: "Cancelled", regNo: "2024-04-26", start: "2024-04-21", end: "Cancelled", status: "Cancelled", total: "$240", type: "cancelled" },
  ];

  return (
    <div className="d-flex" style={{ backgroundColor: "#1c1e22", minHeight: "100vh", color: "#e0e0e0" }}>
      
      {/* --- SIDEBAR --- */}
            <div className="bg-black d-flex flex-column" style={{ width: "260px", borderRight: "1px solid #333" }}>
        <div className="p-4">
          <h4 className="text-warning fw-bold mb-5" style={{ letterSpacing: "2px" }}>
            🚗 RideWave
          </h4>

          <nav className="nav flex-column gap-1">
            <Link to="/CarListning" style={{ textDecoration: "none" }}>
              <div style={sidebarItem}>
                <i className="bi bi-car-front-fill"></i> Car Listings
              </div>
            </Link>

           <Link to="/CarListning" style={{ textDecoration: "none" }}>
              <div style={sidebarItem}>
                <i className="bi bi-bar-chart-fill"></i> Analytics
              </div>
            </Link>

                       <Link to="/CarListning" style={{ textDecoration: "none" }}>
              <div style={sidebarItem}>
                <i className="bi bi-envelope"></i> Messages
              </div>
            </Link>

                       <Link to="/CarListning" style={{ textDecoration: "none" }}>
              <div style={sidebarItem}>
                <i className="bi bi-gear"></i>Settings
              </div>
            </Link>
          </nav>
        </div>

        <div className="mt-auto p-4 text-secondary" style={{ fontSize: "0.7rem" }}>
          © 2026 RideWave - Premier Service
        </div>
      </div>



      {/* --- MAIN CONTENT --- */}
      <div style={{ flexGrow: 1 }}>
        <AdminNavbar />

        {/* Hero Banner with Title */}
        <div style={{
          height: "240px",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), #1c1e22), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <h1 style={{ fontWeight: "bold", color: "white", letterSpacing: "10px", fontSize: "3.5rem" }}>BOOKINGS</h1>
        </div>

        {/* Visual Separator Bar */}
        <div style={{ backgroundColor: "#15171a", borderTop: "1px solid #333", borderBottom: "1px solid #333", padding: "12px 0", textAlign: "center" }}>
          <span style={{ textTransform: "uppercase", fontSize: "0.8rem", color: "#888", fontWeight: "bold", letterSpacing: "3px" }}>
            Manage Vehicles
          </span>
        </div>

        {/* Table and Search Section */}
        <div style={{ padding: "50px" }}>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "25px" }}>
             <input type="text" placeholder="Search Bookings.." style={searchInput} />
             <button style={searchBtn}>Search</button>
          </div>

          <div style={{ 
            backgroundColor: "#23262b", 
            borderRadius: "10px", 
            border: "1px solid #333", 
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)" 
          }}>
            <h4 style={{ padding: "25px", margin: 0, fontWeight: "bold", letterSpacing: "1px" }}>Booking History</h4>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#1a1c20", textAlign: "left", color: "#888", fontSize: "0.75rem", textTransform: "uppercase" }}>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Start Date</th>
                  <th style={thStyle}>End Date</th>
                  <th style={thStyle}>Status</th>
                  <th style={thStyle}>Created</th>
                  <th style={thStyle} className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => {
                  let rowBg = "transparent";
                  let textColor = "#ccc";
                  let totalColor = "#fff";

                  if (b.type === "confirmed") { rowBg = "#f6c23e"; textColor = "#000"; totalColor = "#000"; }
                  if (b.type === "cancelled") { rowBg = "#c0392b"; textColor = "#fff"; totalColor = "#f6c23e"; }

                  return (
                    <tr key={i} style={{ backgroundColor: rowBg, color: textColor, borderBottom: "1px solid #2d3035", transition: "0.2s" }}>
                      <td style={tdStyle}>
                        {b.type !== "default" ? <span style={{ border: "1px solid", padding: "2px 6px", borderRadius: "4px", fontSize: "0.8rem" }}>{b.id}</span> : b.id}
                      </td>
                      <td style={tdStyle}>{b.regNo}</td>
                      <td style={tdStyle}>{b.start}</td>
                      <td style={tdStyle}>{b.end}</td>
                      <td style={{ ...tdStyle, fontWeight: "bold", color: totalColor }}>{b.total}</td>
                      <td style={tdStyle}>
                        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                          <button style={tableBtn}>View</button>
                          <button style={tableBtn}>{b.type === "cancelled" ? "View" : b.type === "confirmed" ? "Pay" : "Cancel"}</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={{ textAlign: 'center', marginTop: '40px', color: '#555', fontSize: '0.8rem' }}>
             © 2026 RIDEWAVE - PREMIER CAR RENTAL SERVICE
          </p>
        </div>
      </div>
    </div>
  );
}

// Styling Objects
const sidebarItem = { padding: "12px", fontSize: "0.95rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", borderRadius: "6px", color: "#777", transition: "0.3s" };
const thStyle = { padding: "18px 25px", letterSpacing: "1px" };
const tdStyle = { padding: "18px 25px" };
const searchInput = { backgroundColor: "#1a1c20", border: "1px solid #333", color: "#fff", padding: "10px 18px", borderRadius: "6px 0 0 6px", width: "280px" };
const searchBtn = { backgroundColor: "#f6c23e", border: "none", padding: "10px 25px", borderRadius: "0 6px 6px 0", fontWeight: "bold", cursor: "pointer", color: "#000" };
const tableBtn = { backgroundColor: "#31353b", color: "#fff", border: "1px solid #444", padding: "5px 12px", borderRadius: "4px", fontSize: "0.75rem", cursor: "pointer" };

export default AdminBookings;