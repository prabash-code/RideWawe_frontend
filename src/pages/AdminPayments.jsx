import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
// Make sure to install: npm install react-icons
import { FaUserShield, FaCar, FaChartLine, FaEnvelope, FaCog, FaSearch } from "react-icons/fa";

function AdminPayments() {
  const transactions = [
    { id: "TXN1024", customer: "John Doe", amount: "$240", method: "Card", status: "Completed", date: "2024-04-24" },
    { id: "TXN1025", customer: "Jane Smith", amount: "$300", method: "Bank Transfer", status: "Pending", date: "2024-04-25" },
    { id: "TXN1026", customer: "Mike Ross", amount: "$150", method: "Cash", status: "Cancelled", date: "2024-04-26" },
  ];

  return (
    <div style={{ backgroundColor: "#1c1e22", minHeight: "100vh", color: "#e0e0e0" }}>
      <AdminNavbar />

      <div style={{ display: "flex", minHeight: "calc(100vh - 70px)" }}>
        
        {/* --- SIDEBAR --- */}
        <div style={{ 
          width: "250px", 
          backgroundColor: "#15171a", 
          padding: "20px 0", 
          borderRight: "1px solid #333" 
        }}>
          <div style={sidebarItemActive}><FaUserShield /> Admin</div>
          <div style={sidebarItem}><FaCar /> Car Listings</div>
          <div style={sidebarItem}><FaChartLine /> Analytics</div>
          <div style={sidebarItem}><FaEnvelope /> Message</div>
          <div style={sidebarItem}><FaCog /> Settings</div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div style={{ flex: 1, padding: "0" }}>
          
          {/* Hero Section */}
          <div style={heroSection}>
             <h1 style={{ letterSpacing: "5px", fontWeight: "bold" }}>PAYMENTS</h1>
          </div>

          {/* Sub-Header Bar */}
          <div style={subHeaderBar}>
            MANAGE VEHICLES
          </div>

          <div style={{ padding: "30px" }}>
            {/* Search Bar */}
            <div className="d-flex justify-content-end align-items-center mb-4" style={{ gap: "10px" }}>
              <div style={{ position: "relative" }}>
                <FaSearch style={{ position: "absolute", left: "12px", top: "12px", color: "#555" }} />
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Payments.."
                  style={searchInputStyle}
                />
              </div>
              <button type="button" className="btn btn-warning fw-bold px-4">
                Search
              </button>
            </div>

            {/* Table Card */}
            <div style={tableCardStyle}>
              <table className="table table-dark table-hover mb-0">
                <thead>
                  <tr style={{ borderBottom: "2px solid #f6c23e" }}>
                    <th style={thStyle}>TRANSACTIONS</th>
                    <th style={thStyle}>CUSTOMER</th>
                    <th style={thStyle}>AMOUNT</th>
                    <th style={thStyle}>METHOD</th>
                    <th style={thStyle}>STATUS</th>
                    <th style={thStyle}>DATE</th>
                    <th style={thStyle} className="text-center">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((txn) => (
                    <tr key={txn.id} style={{ borderBottom: "1px solid #2d3035" }}>
                      <td style={tdStyle} className="fw-bold text-warning">{txn.id}</td>
                      <td style={tdStyle}>{txn.customer}</td>
                      <td style={tdStyle}>{txn.amount}</td>
                      <td style={tdStyle}>{txn.method}</td>
                      <td style={tdStyle}>
                        <span style={{
                          ...statusBadge,
                          backgroundColor: txn.status === "Completed" ? "#28a745" : txn.status === "Pending" ? "#f6c23e" : "#dc3545",
                          color: txn.status === "Pending" ? "#000" : "#fff"
                        }}>
                          {txn.status}
                        </span>
                      </td>
                      <td style={tdStyle}>{txn.date}</td>
                      <td style={tdStyle} className="text-center">
                        <div className="d-flex justify-content-center gap-2">
                          <button className="btn btn-sm btn-outline-light">View</button>
                          <button className="btn btn-sm btn-outline-warning">Edit</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Copyright Footer */}
            <div style={{ textAlign: 'center', marginTop: '40px', color: '#555', fontSize: '0.75rem', letterSpacing: '1px' }}>
              © 2026 RIDEWAVE PREMIER SERVICE
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- CSS STYLES ---

const heroSection = {
  height: "180px",
  background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1350&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px solid #333"
};

const subHeaderBar = {
  backgroundColor: "#15171a",
  color: "#888",
  textAlign: "center",
  padding: "10px 0",
  fontSize: "0.8rem",
  fontWeight: "bold",
  letterSpacing: "3px",
  borderBottom: "1px solid #333"
};

const sidebarItem = {
  padding: "15px 25px",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  color: "#888",
  fontSize: "0.95rem",
  cursor: "pointer"
};

const sidebarItemActive = {
  ...sidebarItem,
  backgroundColor: "#23262b",
  color: "#f6c23e",
  borderLeft: "4px solid #f6c23e"
};

const searchInputStyle = {
  width: "300px",
  paddingLeft: "40px",
  backgroundColor: "#15171a",
  border: "1px solid #333",
  color: "#fff"
};

const tableCardStyle = {
  backgroundColor: "#23262b",
  borderRadius: "8px",
  border: "1px solid #333",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
};

const thStyle = { padding: "18px 20px", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" };
const tdStyle = { padding: "18px 20px", verticalAlign: "middle", fontSize: "0.9rem", color: "#ccc" };

const statusBadge = {
  padding: "4px 10px",
  borderRadius: "4px",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  display: "inline-block",
  minWidth: "90px",
  textAlign: "center"
};

export default AdminPayments;