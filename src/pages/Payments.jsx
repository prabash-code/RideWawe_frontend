import React, { useState } from "react";
import CustomerNavbar from "../components/CustomerNavbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { 
  FaUserShield, 
  FaCar, 
  FaChartLine, 
  FaEnvelope, 
  FaCog 
} from "react-icons/fa"; 
import { useParams } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../services/axiosInstance";




function Payments() {
const{bookingId}=useParams();
const[method,setMethod]=useState("");
const[amount,setAmount]=useState("");



const handleClick= async (e)=>{
  e.preventDefault();
const payLoad={
  bookingId:bookingId,
  method:method,
  amount:parseFloat(amount)
};

  try{
    const res=await axiosInstance.post("/payments",payLoad);

    const result =res.data;
    if(result){
      alert("Payment Successful !!!")
    }else{
      alert("Payment unSuccessful,Try again !!!")
    }
  }catch(err){
        console.error("FULL ERROR:", err);
  console.error("Response:", err.response);
  console.error("Data:", err.response?.data);
  alert(err.response?.data?.message || "Error occurred");

  }
}




  return (
    <div style={{ backgroundColor: "#1c1e22", minHeight: "100vh", color: "#e0e0e0" }}>
      <CustomerNavbar />

      <div style={{ display: "flex", minHeight: "calc(100vh - 70px)" }}>
        
        {/* --- LEFT SIDEBAR (Admin Style) --- */}
        <div style={{ 
          width: "240px", 
          backgroundColor: "#15171a", 
          padding: "20px 0", 
          borderRight: "1px solid #333" 
        }}>
          <div style={sidebarItemActive}><FaUserShield style={iconStyle} /> Admin</div>
          <div style={sidebarItem}><FaCar style={iconStyle} /> Car Listings</div>
          <div style={sidebarItem}><FaChartLine style={iconStyle} /> Analytics</div>
          <div style={sidebarItem}><FaEnvelope style={iconStyle} /> Message</div>
          <div style={sidebarItem}><FaCog style={iconStyle} /> Settings</div>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div style={{ flex: 1, padding: "40px" }}>
          
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
             <h2 style={{ letterSpacing: "4px", fontWeight: "bold", textTransform: "uppercase" }}>
               Payments
             </h2>
             <div style={{ width: "60px", height: "3px", backgroundColor: "#f6c23e", margin: "10px auto" }}></div>
          </div>

          {/* Form Card */}
          <div style={{ 
            maxWidth: "700px", 
            margin: "0 auto", 
            backgroundColor: "#23262b", 
            borderRadius: "10px", 
            padding: "40px",
            border: "1px solid #333",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}>
            <h4 style={{ textAlign: "center", marginBottom: "30px", fontSize: "1.1rem", letterSpacing: "2px" }}>
              PROCESS PAYMENT
            </h4>

            <form  onSubmit={handleClick} >
              <div style={{ marginBottom: "25px" }}>
                <label style={labelStyle}>Booking ID</label>
                <input 
                  type="text" 
                  placeholder="Booking ID" 
                  style={inputStyle} 
                  value={bookingId}
                  readOnly
                />
              </div>

              <div style={{ marginBottom: "25px" }}>
                <label style={labelStyle}>Payment Method</label>
                <select style={inputStyle} onChange={(e)=>setMethod(e.target.value)} >
                  <option > Select option</option>
                  <option value="CARD"> CARD</option>
                  <option value="CASH"> CASH</option>
                  <option value="CHEQUE">CHEQUE</option>
                  <option value="ONLINE">ONLINE</option>
                </select>
              </div>

                            <div style={{ marginBottom: "25px" }}>
                <label style={labelStyle}>Amount</label>
                <input 
                  type="text" 
                  placeholder="Amount" 
                  style={inputStyle}
                   
                  onChange={(e)=>setAmount(e.target.value)}
                 
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "40px" }}>
                <button type="submit"  style={yellowBtn}>PAY NOW</button>
                
                <Link to={"/Home"}>
                <button type="button" style={{ 
                  backgroundColor: "transparent", 
                  border: "none", 
                  color: "#f6c23e", 
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  textDecoration: "underline"
                }}>
                  BACK TO HOME
                </button>
                </Link>
              </div>
            </form>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '30px', color: '#555', fontSize: '0.7rem' }}>
            © 2026 RIDEWAVE PREMIER SERVICE
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Sidebar Styles
const sidebarItem = {
  padding: "15px 25px",
  fontSize: "0.9rem",
  color: "#aaa",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "15px"
};

const sidebarItemActive = {
  ...sidebarItem,
  backgroundColor: "#2a2d33",
  color: "#f6c23e",
  borderLeft: "4px solid #f6c23e"
};

const iconStyle = { fontSize: "1rem" };

// Form Styles
const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontSize: "0.85rem",
  fontWeight: "bold",
  color: "#fff"
};

const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  backgroundColor: "#1a1c20",
  border: "1px solid #444",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "0.9rem",
  outline: "none"
};

const yellowBtn = {
  backgroundColor: "#f6c23e",
  color: "#000",
  padding: "12px",
  borderRadius: "5px",
  border: "none",
  fontWeight: "bold",
  fontSize: "0.9rem",
  cursor: "pointer",
  letterSpacing: "1px"
};

export default Payments;