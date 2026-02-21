import React, { useState, useEffect } from "react";
import CustomerNavbar from "../components/CustomerNavbar";
import Footer from "../components/Footer";
import hero from "../assets/bookings.png";
import axiosInstance from "../services/axiosInstance";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const email = localStorage.getItem("email");

  useEffect(() => {
    

    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/bookings`);
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [email]);

  return (
    <div
      style={{
        backgroundColor: "#1c1e22",
        minHeight: "100vh",
        color: "#e0e0e0",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <CustomerNavbar />

      {/* HERO BANNER */}
      <div
        style={{
          height: "250px",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), #1c1e22), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </div>

      {/* SUB-HEADER */}
      <div
        style={{
          backgroundColor: "#15171a",
          borderTop: "1px solid #333",
          borderBottom: "1px solid #333",
          padding: "12px 0",
          textAlign: "center",
        }}
      >
        <span
          style={{
            textTransform: "uppercase",
            fontSize: "0.85rem",
            color: "#888",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          Booking History
        </span>
      </div>

      {/* MAIN TABLE */}
      <div style={{ maxWidth: "1150px", margin: "40px auto", padding: "0 20px" }}>
        <div
          style={{
            backgroundColor: "#23262b",
            borderRadius: "12px",
            border: "1px solid #333",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table
              style={{ width: "100%", borderCollapse: "collapse" }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#1a1c20",
                    textAlign: "left",
                    color: "#f6c23e",
                    fontSize: "0.85rem",
                  }}
                >
                  <th style={thStyle}>REG. NO</th>
                  <th style={thStyle}>CUSTOMER MAIL</th>
                  <th style={thStyle}>START DATE</th>
                  <th style={thStyle}>END DATE</th>
                  <th style={thStyle}>STATUS</th>
                  <th style={thStyle}>TOTAL</th>
                  <th style={thStyle} className="text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center text-secondary">
                      Loading...
                    </td>
                  </tr>
                ) : bookings.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center text-secondary">
                      No bookings found
                    </td>
                  </tr>
                ) : (
                  bookings.map((b) => (
                    <tr
                      key={b.id}
                      className="booking-row"
                      style={{ borderBottom: "1px solid #2d3035" }}
                    >
                      <td style={tdStyle}>{b.registrationNumber}</td>
                      <td style={tdStyle}>{b.customerEmail}</td>
                      <td style={tdStyle}>{b.startDate}</td>
                      <td style={tdStyle}>{b.endDate}</td>
                      <td style={tdStyle}>
                        <span
                          style={{
                            ...statusBadge,
                            backgroundColor:
                              b.paymentStatus === "PAID"
                                ? "#28a745"
                                : b.paymentStatus === "PENDING"
                                ? "#f6c23e"
                                : "#dc3545",
                            color: b.paymentStatus === "PENDING" ? "#000" : "#fff",
                          }}
                        >
                          {b.paymentStatus}
                        </span>
                      </td>
                      <td style={{ ...tdStyle, fontWeight: "bold", color: "#fff" }}>
                        {b.totalAmount}
                      </td>
                      <td style={tdStyle}>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            justifyContent: "center",
                          }}
                        >
                          <button style={actionBtn} className="view-btn">
                            View
                          </button>
                          {b.paymentStatus === "PENDING" && (
                            <button
                              style={{ ...actionBtn, backgroundColor: "#f6c23e", color: "#000" }}
                            >
                              Pay Now
                            </button>
                          )}
                          {b.paymentStatus !== "FAIL" && (
                            <button
                              style={{
                                ...actionBtn,
                                border: "1px solid #dc3545",
                                backgroundColor: "transparent",
                                color: "#dc3545",
                              }}
                            >
                              Cancel
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            color: "#666",
            fontSize: "0.8rem",
            letterSpacing: "1px",
          }}
        >
          © 2026 RIDEWAVE - PREMIER CAR RENTAL SERVICE
        </div>
      </div>

      <Footer />

      <style>{`
        .booking-row:hover { background-color: rgba(255, 255, 255, 0.02); transition: 0.3s; }
        .view-btn:hover { background-color: #4a4f55 !important; }
      `}</style>
    </div>
  );
}

// --- STYLES ---
const thStyle = {
  padding: "20px",
  fontWeight: "bold",
  borderBottom: "2px solid #333",
  textTransform: "uppercase",
};
const tdStyle = { padding: "20px", color: "#ccc", fontSize: "0.9rem" };
const statusBadge = {
  padding: "6px 12px",
  borderRadius: "4px",
  fontSize: "0.7rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  display: "inline-block",
  minWidth: "95px",
  textAlign: "center",
};
const actionBtn = {
  padding: "8px 16px",
  fontSize: "0.75rem",
  borderRadius: "4px",
  border: "none",
  backgroundColor: "#3a3f44",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
};

export default AdminBookings;
