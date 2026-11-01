import React, { useEffect, useState } from "react";
import CustomerNavbar from "../components/CustomerNavbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

function CustomerHome() {
  const [bookings, setBookings] = useState([]);
  const [payments, setPayments] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {




    const fetchData = async () => {
      try {

        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found! Please login first.");
          return;
        }

        const bookingRes = await axiosInstance.get(`/bookings/email`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBookings(bookingRes.data);


        if (bookingRes.data.length > 0) {
          const paymentRequests = bookingRes.data.map(b =>
            axiosInstance.get(`/payments/booking/${b.id}`)
          );

          const paymentResponses = await Promise.all(paymentRequests);

          const allPayments = paymentResponses.flatMap(res => res.data);
          setPayments(allPayments);
        }

        const userRes = await axiosInstance.get(`/admin/email`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(userRes.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: "#15171a", color: "#e0e0e0" }}>
      {/* SIDEBAR */}
      <div className="bg-black d-flex flex-column" style={{ width: "260px", borderRight: "1px solid #333" }}>
        <div className="p-4">
          <h4 className="text-warning fw-bold mb-5" style={{ letterSpacing: "2px" }}>🚗 RideWave</h4>
          <nav className="nav flex-column gap-1">
            <Link to="/CarListning" style={{ textDecoration: "none" }}>
              <div style={sidebarItem}><i className="bi bi-car-front-fill"></i> Car Listings</div>
            </Link>
            <Link to="/CarListning" style={{ textDecoration: "none" }}>
              <div style={sidebarItem}><i className="bi bi-bar-chart-fill"></i> Analytics</div>
            </Link>
            <Link to="/CarListning" style={{ textDecoration: "none" }}>
              <div style={sidebarItem}><i className="bi bi-envelope"></i> Messages</div>
            </Link>
            <Link to="/CarListning" style={{ textDecoration: "none" }}>
              <div style={sidebarItem}><i className="bi bi-gear"></i> Settings</div>
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4 text-secondary" style={{ fontSize: "0.7rem" }}>
          © 2026 RideWave - Premier Service
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow-1 d-flex flex-column">
        <CustomerNavbar />
        <div style={heroBannerStyle}>
          <div className="text-center">
            <h1 style={{ letterSpacing: "6px", fontWeight: "bold", textShadow: "2px 2px 10px rgba(0,0,0,0.8)" }}>
              DASHBOARD OVERVIEW
            </h1>
            <Link to={"/CarView"}>
              <button className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg"
                style={{ backgroundColor: "#ff8c00", border: "none" }}>
                RENT NOW
              </button>
            </Link>
            <div style={{ width: "150px", height: "3px", backgroundColor: "#f6c23e", margin: "10px auto" }}></div>
          </div>
        </div>

        <div className="p-4 px-5">
          {user && <h2>Hi, {user.username}</h2>}

          <div className="row g-4 mb-5">
            <div className="col-lg-8">
              {/* BOOKINGS TABLE */}
              <div style={cardStyle}>
                <div className="d-flex align-items-center mb-4 gap-2">
                  <i className="bi bi-car-front text-warning fs-4"></i>
                  <h5 className="mb-0 fw-bold">My Bookings</h5>
                </div>

                <table className="table table-dark table-hover border-secondary align-middle mb-0" style={{ fontSize: "0.85rem" }}>
                  <thead className="text-warning text-uppercase">
                    <tr style={{ borderBottom: "2px solid #f6c23e" }}>
                      <th>Booking ID</th>
                      <th>Registration No.</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="5" className="text-center text-secondary">Loading...</td>
                      </tr>
                    ) : bookings.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center text-secondary">No bookings found</td>
                      </tr>
                    ) : (
                      bookings.map(b => (
                        <tr key={b.id}>
                          <td>{b.id}</td>
                          <td>{b.registrationNumber}</td>
                          <td>{b.startDate}</td>
                          <td>{b.endDate}</td>
                          <td>{b.customerEmail}</td>
                          <td>
                            <Link to={`/CarRates/${b.id}`}>
                            <button
                              className="btn btn-warning btn-sm"
                              style={{ backgroundColor: "#f6c23e", color: "#000" }}
                            >
                             Rate Vehicle
                            </button>
                            </Link>
                          </td>

                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* PAYMENTS TABLE */}
              <div style={cardStyle}>
                <div className="d-flex align-items-center mb-4 gap-2">
                  <i className="bi bi-currency-dollar text-warning fs-4"></i>
                  <h5 className="mb-0 fw-bold">Payments</h5>
                </div>

                <table className="table table-dark table-hover border-secondary align-middle mb-0" style={{ fontSize: "0.85rem" }}>
                  <thead className="text-warning text-uppercase">
                    <tr style={{ borderBottom: "2px solid #f6c23e" }}>
                      <th>Booking Id</th>
                      <th>Method</th>
                      <th>Payment Date</th>
                      <th>Type</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="5" className="text-center text-secondary">Loading...</td>
                      </tr>
                    ) : payments.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center text-secondary">No payments found</td>
                      </tr>
                    ) : (
                      payments.map(p => (
                        <tr key={p.id}>
                          <td>{p.bookingId}</td>
                          <td>{p.method}</td>
                          <td>{p.paymentDate}</td>
                          <td>{p.type}</td>
                          <td>{p.amount}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="col-lg-4">
              {/* Analytics card */}
              <div style={{ ...cardStyle, marginBottom: "20px" }}>
                <h6 className="text-secondary mb-3 fw-bold">Live Analytics</h6>
                <div style={statLine}><span className="text-warning">●</span> Revenue<span className="ms-auto fw-bold text-white">$1,450</span></div>
                <div style={statLine}><span className="text-info">●</span> New Users<span className="ms-auto fw-bold text-white">3240</span></div>
                <div style={statLine}><span className="text-success">●</span> Active Vehicles<span className="ms-auto fw-bold text-white">85%</span></div>
              </div>
            </div>
          </div>

          <footer className="text-center text-secondary py-4" style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>
            © 2026 RIDEWAVE - PREMIER CAR RENTAL SERVICE
          </footer>
        </div>
      </div>
    </div >
  );
}

// --- CSS Objects ---
const sidebarItem = { padding: "12px 15px", color: "#777", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "15px", cursor: "pointer", transition: "0.3s" };
const heroBannerStyle = { height: "220px", background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1350&q=80')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #333" };
const cardStyle = { backgroundColor: "#1c1e22", padding: "25px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", border: "1px solid #2d3035" };
const statLine = { display: "flex", padding: "10px 0", borderBottom: "1px solid #222", fontSize: "0.9rem", color: "#888" };

export default CustomerHome;
