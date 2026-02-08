import React, { useState } from 'react';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState({
        customerName: '',
        customerEmail: '',
        rating: 5,
        comment: '',
        carModel: '' // Optional: To know which car they rented
    });

    const handleChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback Submitted:", feedback);
        alert("Thank you for your feedback!");
        // Add your API call here: axios.post('/api/feedback', feedback)
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
                            className="form-control p-3 bg-light border-0 rounded-3" 
                            placeholder="Enter your name"
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold small text-uppercase">Email Address</label>
                        <input 
                            type="email" 
                            name="customerEmail" 
                            className="form-control p-3 bg-light border-0 rounded-3" 
                            placeholder="Enter your email"
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold small text-uppercase">Rating</label>
                        <select 
                            name="rating" 
                            className="form-select p-3 bg-light border-0 rounded-3 fw-bold text-warning"
                            onChange={handleChange}
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
                            rows="4" 
                            className="form-control p-3 bg-light border-0 rounded-3" 
                            placeholder="How was your ride?"
                            onChange={handleChange} 
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