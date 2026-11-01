import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import CustomerNavbar from "../components/CustomerNavbar";
import "bootstrap-icons/font/bootstrap-icons.css";


function CarRates() {
const{id}=useParams();

  const location = useLocation();
  const navigate = useNavigate();
  const [booking,setBookings]=useState([]); 
  const [overallRating, setOverallRating] = useState("");
  const [loading, setLoading] = useState(false);

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #444",
    backgroundColor: "#111",
    color: "#fff",
    marginBottom: "20px"
  };

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axiosInstance.get(`/bookings/${id}`);
        setBookings(res.data); 
      } catch (err) {
        console.error("Failed to fetch booking:", err);
        alert("Failed to fetch booking info!");
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);
    


  const renderStars = (rating, setRating) => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      return (
        <i
          key={index}
          className={`bi ${
            starValue <= rating ? "bi-star-fill" : "bi-star"
          } text-warning`}
          style={{ fontSize: "28px", cursor: "pointer", marginRight: "6px" }}
          onClick={() => setRating(starValue)}
        ></i>
      );
    });
  };

  const handleSubmit = async () => {
    if (!overallRating) {
      alert("Please select overall rating!");
      return;
    } 

    try {
      setLoading(true);
      await axiosInstance.post(`/ratings/${booking.carId}?rating=${overallRating}&userId=${booking.customerId}`);
      alert("Review submitted successfully!");
      navigate("/CustomerHome");

    } catch (error) {
      console.error(error);
      alert("Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#15171a", minHeight: "100vh", color: "#e7e2e2" }}>
      <CustomerNavbar />

      <div className="container py-5">
        <div
          className="card p-5 shadow-lg rounded-4"
          style={{
            backgroundColor: "#1c1e22",
            border: "1px solid #2d3035"
          }}
        >
          <h3 className="text-warning text-center fw-bold mb-4">
            ⭐ Rate Your Experience
          </h3>

          {/* Booking Info */}
          <div className="mb-4 p-3 rounded-3" style={{ backgroundColor: "#111", color:"white" }}>
            <p><strong>Booking ID:</strong> {booking?.id}</p>
            <p><strong>Car:</strong> {booking?.registrationNumber}</p>
            <p><strong>Start Date:</strong> {booking?.startDate}</p>
            <p><strong>End Date:</strong> {booking?.endDate}</p>
          </div>

          {/* Overall Rating Dropdown */}
          <div>
            <label className="fw-bold mb-2" style={{ color:"white"  }}>Overall Rating</label>
            <select
              style={inputStyle}
              value={overallRating}
              onChange={(e) => setOverallRating(e.target.value)}
            >
              <option value="">Select Rating</option>
              <option value="1">⭐ 1 - Bad</option>
              <option value="2">⭐⭐ 2 - Poor</option>
              <option value="3">⭐⭐⭐ 3 - Average</option>
              <option value="4">⭐⭐⭐⭐ 4 - Good</option>
              <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
            </select>
          </div>


          {/* Submit Button */}
          <div className="text-center">
            <button
              className="btn btn-warning px-5 py-2 fw-bold"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CarRates;