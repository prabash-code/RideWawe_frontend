import React, { useState } from 'react';

const BookingConformation = () => {
    const [formData, setFormData] = useState({
        customerId: '',
        customerName: '',
        customerEmail: '',
        registrationNumber: '',
        pickupLocation: '',
        finalLocation: '',
        startDate: '',
        endDate: '',
        totalAmount: '',
        status: 'AVAILABLE' // Based on your CarStatus enum
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting to Backend:", formData);
        // Add your Axios/Fetch call here to hit your Spring Boot Controller
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-5 rounded-5 border-0" style={{ maxWidth: "800px", width: "100%" }}>
                <h2 className="text-center fw-bold mb-5">
                    Confirm Your Booking <span role="img" aria-label="car">🚗</span>
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                        {/* Row 1 */}
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Customer ID</label>
                            <input type="number" name="customerId" className="form-control p-3 bg-light border-0 rounded-3" placeholder="ID Number" onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Email Address</label>
                            <input type="email" name="customerEmail" className="form-control p-3 bg-light border-0 rounded-3" placeholder="example@mail.com" onChange={handleChange} required />
                        </div>

                        {/* Row 2 */}
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Full Name</label>
                            <input type="text" name="customerName" className="form-control p-3 bg-light border-0 rounded-3" placeholder="John Doe" onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Car Registration Number</label>
                            <input type="text" name="registrationNumber" className="form-control p-3 bg-light border-0 rounded-3" placeholder="WP-BC-1234" onChange={handleChange} required />
                        </div>

                        {/* Row 3 */}
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Pickup Location</label>
                            <div className="input-group bg-light rounded-3">
                                <input type="text" name="pickupLocation" className="form-control p-3 bg-transparent border-0" placeholder="Location A" onChange={handleChange} required />
                                <span className="input-group-text bg-transparent border-0 opacity-50">📍</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Final Destination</label>
                            <div className="input-group bg-light rounded-3">
                                <input type="text" name="finalLocation" className="form-control p-3 bg-transparent border-0" placeholder="Location B" onChange={handleChange} required />
                                <span className="input-group-text bg-transparent border-0 opacity-50">🏁</span>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Start Date & Time</label>
                            <input type="datetime-local" name="startDate" className="form-control p-3 bg-light border-0 rounded-3" onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">End Date & Time</label>
                            <input type="datetime-local" name="endDate" className="form-control p-3 bg-light border-0 rounded-3" onChange={handleChange} required />
                        </div>

                        {/* Amount */}
                        <div className="col-md-12">
                            <label className="form-label fw-bold small">Total Amount ($)</label>
                            <input type="number" name="totalAmount" className="form-control p-3 bg-light border-0 rounded-3 text-center fw-bold" placeholder="0.00" onChange={handleChange} required />
                        </div>

                        {/* Button */}
                        <div className="col-12 mt-5">
                            <button type="submit" className="btn btn-warning w-100 p-3 fw-bold rounded-pill shadow" style={{ backgroundColor: "#ff6624", color: "white", border: "none" }}>
                                CONFIRM BOOKING NOW
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingConformation;