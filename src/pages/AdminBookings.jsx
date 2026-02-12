import React, { useState, useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import heroImage from "../assets/benz.jpg";
import { Link } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axiosInstance.get("/bookings");
        setBookings(res.data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="d-flex" style={{ backgroundColor: "#1c1e22", minHeight: "100vh", color: "#e0e0e0" }}>
      
      {/* Sidebar */}
      <div className="bg-black d-flex flex-column" style={{ width: "260px", borderRight: "1px solid #333" }}>
        <div className="p-4">
          <h4 className="text-warning fw-bold mb-5" style={{ letterSpacing: "2px" }}>
            🚗 RideWave
          </h4>

          <nav className="nav flex-column gap-1">
            <Link to="/CarListning" style={{ textDecoration: "none" }}>
              <div style={sidebarItem}>Car Listings</div>
            </Link>
          </nav>
        </div>

        <div className="mt-auto p-4 text-secondary" style={{ fontSize: "0.7rem" }}>
          © 2026 RideWave - Premier Service
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flexGrow: 1 }}>
        <AdminNavbar />

        {/* Hero Section */}
        <div
          style={{
            height: "240px",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), #1c1e22), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h1 style={{ fontWeight: "bold", color: "white", letterSpacing: "10px", fontSize: "3.5rem" }}>
            BOOKINGS
          </h1>
        </div>

        {/* Table Section */}
        <div style={{ padding: "50px" }}>
          <div
            style={{
              backgroundColor: "#23262b",
              borderRadius: "10px",
              border: "1px solid #333",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
            }}
          >
            <h4 style={{ padding: "25px", margin: 0, fontWeight: "bold" }}>
              Booking History
            </h4>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#1a1c20", textAlign: "left", color: "#888" }}>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Customer Name</th>
                  <th style={thStyle}>Vehicle Reg.No</th>
                  <th style={thStyle}>Start Date</th>
                  <th style={thStyle}>End Date</th>
                  <th style={thStyle}>Email</th>
                </tr>
              </thead>

              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ padding: "20px", textAlign: "center", color: "#777" }}>
                      No bookings found
                    </td>
                  </tr>
                ) : (
                  bookings.map((b) => (
                    <tr key={b.id} style={{ borderBottom: "1px solid #2d3035" }}>
                      <td style={tdStyle}>{b.id}</td>
                      <td style={tdStyle}>{b.customerName}</td>
                      <td style={tdStyle}>{b.registrationNumber}</td>
                      <td style={tdStyle}>{b.startDate}</td>
                      <td style={tdStyle}>{b.endDate}</td>
                      <td style={tdStyle}>{b.customerEmail}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const sidebarItem = {
  padding: "12px",
  cursor: "pointer",
  borderRadius: "6px",
  color: "#777"
};

const thStyle = { padding: "18px 25px" };
const tdStyle = { padding: "18px 25px" };

export default AdminBookings;
