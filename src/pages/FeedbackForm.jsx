import React, { useState } from 'react';
import axiosInstance from '../services/axiosInstance';

const FeedbackForm = () => {
    // const [feedback, setFeedback] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rate, setRate] = useState("5");
    const [review, setReview] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payLoad = {
                name: name,
                email: email,
                ratings: Number(rate) || 5,
                review: review
            };

            await axiosInstance.post("/feedback", payLoad);
            console.log("Feedback Submitted:", payLoad);
            alert("Thank you for your feedback!");
            setName("");
            setEmail("");
            setRate("5");
            setReview("");
        } catch (err) {
            console.error("Error submitting feedback:", err);
            alert("Feedback not send !");
        }
    };

    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card shadow-lg border-0 rounded-5 p-4 p-md-5" style={{ maxWidth: "600px", width: "100%" }}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Your Feedback</h2>
                    <p className="text-muted">We value your experience with us</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold small text-uppercase">Full Name</label>
                        <input
                            type="text"
                            name="customerName"
                            value={name}
                            className="form-control p-3 bg-light border-0 rounded-3"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold small text-uppercase">Email Address</label>
                        <input
                            type="email"
                            name="customerEmail"
                            value={email}
                            className="form-control p-3 bg-light border-0 rounded-3"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold small text-uppercase">Rating</label>
                        <select
                            name="rating"
                            value={rate}
                            className="form-select p-3 bg-light border-0 rounded-3 fw-bold text-warning"
                            onChange={(e) => setRate(e.target.value)}
                        >
                            <option value="5">★★★★★ (Excellent)</option>
                            <option value="4">★★★★☆ (Very Good)</option>
                            <option value="3">★★★☆☆ (Good)</option>
                            <option value="2">★★☆☆☆ (Fair)</option>
                            <option value="1">★☆☆☆☆ (Poor)</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-bold small text-uppercase">Your Review</label>
                        <textarea
                            name="comment"
                            value={review}
                            rows="4"
                            className="form-control p-3 bg-light border-0 rounded-3"
                            placeholder="How was your ride?"
                            onChange={(e) => setReview(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow-sm"
                        style={{ letterSpacing: "1px" }}
                    >
                        SUBMIT FEEDBACK
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;