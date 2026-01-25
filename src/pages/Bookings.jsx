import React from "react";
import CustomerNavbar from "../components/CustomerNavbar";
import Footer from "../components/Footer";
import hero from "../assets/bookings.png";

function Bookings() {
  const bookings = [
    { id: "RW2584", regNo: "CAR-1023", start: "2024-04-24", end: "2024-04-26", status: "Confirmed", total: "$240" },
    { id: "RW2583", regNo: "CAR-2041", start: "2024-04-28", end: "2024-04-30", status: "Pending", total: "$300" },
    { id: "RW2582", regNo: "CAR-3302", start: "2024-04-30", end: "2024-05-02", status: "Cancelled", total: "$0" },
  ];

  return (
    <div style={{ backgroundColor: "#1c1e22", minHeight: "100vh", color: "#e0e0e0", fontFamily: 'Arial, sans-serif' }}>
      <CustomerNavbar />

      {/* --- HERO BANNER --- */}
      <div style={{
        height: "250px",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), #1c1e22), url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <h1 style={{ fontWeight: "bold", color: "white", letterSpacing: "5px", fontSize: "3rem", margin: 0 }}>
          MY BOOKINGS
        </h1>
        {/* RideWave Gold Accent Line */}
        <div style={{ width: "80px", height: "4px", backgroundColor: "#f6c23e", marginTop: "15px" }}></div>
      </div>

      {/* --- SUB-HEADER SECTION --- */}
      <div style={{ backgroundColor: "#15171a", borderTop: "1px solid #333", borderBottom: "1px solid #333", padding: "12px 0", textAlign: "center" }}>
        <span style={{ textTransform: "uppercase", fontSize: "0.85rem", color: "#888", fontWeight: "bold", letterSpacing: "2px" }}>
          Booking History
        </span>
      </div>

      {/* --- MAIN TABLE CONTENT --- */}
      <div style={{ maxWidth: "1150px", margin: "40px auto", padding: "0 20px" }}>
        <div style={{ 
          backgroundColor: "#23262b", 
          borderRadius: "12px", 
          border: "1px solid #333", 
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)" 
        }}>
          
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#1a1c20", textAlign: "left", color: "#f6c23e", fontSize: "0.85rem" }}>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>REG. NO</th>
                  <th style={thStyle}>START DATE</th>
                  <th style={thStyle}>END DATE</th>
                  <th style={thStyle}>STATUS</th>
                  <th style={thStyle}>TOTAL</th>
                  <th style={thStyle} className="text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="booking-row" style={{ borderBottom: "1px solid #2d3035" }}>
                    <td style={{ ...tdStyle, color: "#f6c23e", fontWeight: "bold" }}>{b.id}</td>
                    <td style={tdStyle}>{b.regNo}</td>
                    <td style={tdStyle}>{b.start}</td>
                    <td style={tdStyle}>{b.end}</td>
                    <td style={tdStyle}>
                      <span style={{
                        ...statusBadge,
                        backgroundColor: b.status === "Confirmed" ? "#28a745" : b.status === "Pending" ? "#f6c23e" : "#dc3545",
                        color: b.status === "Pending" ? "#000" : "#fff"
                      }}>
                        {b.status}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, fontWeight: "bold", color: "#fff" }}>{b.total}</td>
                    <td style={tdStyle}>
                      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                        <button style={actionBtn} className="view-btn">View</button>
                        {b.status === "Pending" && (
                          <button style={{...actionBtn, backgroundColor: "#f6c23e", color: "#000"}}>Pay Now</button>
                        )}
                        {b.status !== "Cancelled" && (
                          <button style={{...actionBtn, border: "1px solid #dc3545", backgroundColor: "transparent", color: "#dc3545"}}>Cancel</button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Branding */}
        <div style={{ textAlign: 'center', marginTop: '40px', color: '#666', fontSize: '0.8rem', letterSpacing: '1px' }}>
          © 2026 RIDEWAVE - PREMIER CAR RENTAL SERVICE
        </div>
      </div>

      <Footer />

      {/* Hover Effects via Style Tag */}
      <style>{`
        .booking-row:hover { background-color: rgba(255, 255, 255, 0.02); transition: 0.3s; }
        .view-btn:hover { background-color: #4a4f55 !important; }
      `}</style>
    </div>
  );
}

// Internal CSS Styles
const thStyle = { padding: "20px", fontWeight: "bold", borderBottom: "2px solid #333", textTransform: "uppercase" };
const tdStyle = { padding: "20px", color: "#ccc", fontSize: "0.9rem" };

const statusBadge = {
  padding: "6px 12px",
  borderRadius: "4px",
  fontSize: "0.7rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  display: "inline-block",
  minWidth: "95px",
  textAlign: "center"
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
  transition: "0.3s"
};

export default Bookings;