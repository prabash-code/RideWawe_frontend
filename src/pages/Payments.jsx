import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Payments() {

    const [bookingId, setBookingId] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

    const handlePay = (e) => {
        e.preventDefault();
        console.log("Booking ID:", bookingId);
        console.log("Payment Method:", paymentMethod);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div
                className="card shadow p-4"
                style={{ width: "420px", borderRadius: "15px" }}
            >
                <form onSubmit={handlePay}>

                    {/* Header */}
                    <div className="d-flex align-items-center bg-warning rounded p-2 mb-3">
                        <img
                            src={logo}
                            alt="RideWave Logo"
                            style={{ width: "45px", height: "45px" }}
                            className="me-2"
                        />
                        <div>
                            <h5 className="mb-0 fw-bold text-dark">Payments</h5>
                            <small className="text-dark fw-bold">
                                Premier Car Rental Service In Sri Lanka
                            </small>
                        </div>
                    </div>

                    {/* Booking ID */}
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className="form-control"
                            id="bookingId"
                            placeholder="Booking ID"
                            onChange={(e) => setBookingId(e.target.value)}
                            required
                        />
                        <label htmlFor="bookingId">Booking ID</label>
                    </div>

                    {/* Payment Method Dropdown */}
                    <div className="form-floating mb-3">
                        <select
                            className="form-select"
                            id="paymentMethod"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            required
                        >
                            <option value="">Select Payment Method</option>
                            <option value="CARD">Card</option>
                            <option value="CASH">Cash</option>
                            <option value="BANK">Bank Transfer</option>
                        </select>
                        <label htmlFor="paymentMethod">Payment Method</label>
                    </div>

                    {/* Buttons */}
                    <div className="d-flex flex-column gap-2">
                        <button type="submit" className="btn btn-warning fw-bold">
                            Pay
                        </button>

                        <Link
                            to="/Home"
                            className="btn btn-outline-secondary fw-bold text-center"
                        >
                            Back to Home
                        </Link>
                    </div>

                    {/* Footer */}
                    <p className="text-center text-muted mt-4 mb-0">
                        © 2025 RideWave
                    </p>

                </form>
            </div>
        </div>
    );
}

export default Payments;
