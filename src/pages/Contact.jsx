import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    const [message, setMessage] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        text: ''
    });

    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ backgroundColor: "#0b0f19", color: "#f8fafc", minHeight: "100vh" }}>
            <Navbar/>

            {/* 1. Header Hero - Inspired by image_448466.jpg */}
            <div style={{
                backgroundImage: `linear-gradient(rgba(11,15,25,0.7), rgba(11,15,25,0.85)), url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "40vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
            }}>
                <h1 className="display-4 fw-bold text-white">Contact Us</h1>
                <p className="text-white-50 mb-0">Have a question? We are here to help you 24/7.</p>
            </div>

            {/* 2. Top Info Cards */}
            <div className="container mt-n5 position-relative" style={{ marginTop: "-45px", zIndex: 10 }}>
                <div className="row g-4 text-center">
                    {[
                        { icon: "📞", title: "Call Us", detail: "+9477777574" },
                        { icon: "📧", title: "Email Us", detail: "ridewawe@gmail.com" },
                        { icon: "📍", title: "Visit Us", detail: "No.26, Main Street, Galle" }
                    ].map((item, i) => (
                        <div className="col-md-4" key={i}>
                            <div
                                className="card border-0 shadow-lg p-4 rounded-4 h-100"
                                style={{
                                    backgroundColor: "#1e293b",
                                    color: "#fff",
                                    border: "1px solid rgba(255, 255, 255, 0.08)"
                                }}
                            >
                                <div className="display-6 mb-2">{item.icon}</div>
                                <h6 className="fw-bold text-uppercase small text-white-50">{item.title}</h6>
                                <p className="mb-0 fw-bold text-warning">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Map & Form Section */}
            <div className="container py-5 my-4">
                <div
                    className="row g-0 shadow-lg rounded-5 overflow-hidden"
                    style={{
                        backgroundColor: "#1e293b",
                        border: "1px solid rgba(255, 255, 255, 0.08)"
                    }}
                >
                    {/* Map Side */}
                    <div className="col-lg-6">
                        <iframe 
                            title="location-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.81732767975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1631512345678!5m2!1sen!2sau" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, minHeight: "450px" }} 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Form Side */}
                    <div className="col-lg-6 p-4 p-md-5" style={{ backgroundColor: "#1e293b" }}>
                        <h2 className="fw-bold mb-2 text-white">Send Message</h2>
                        <p className="text-white-50 mb-4 small">Have a query? Submit to us here.</p>
                        
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label text-white fw-semibold small mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-control text-white dark-input p-3 border-0"
                                        style={{ backgroundColor: "#0f172a", border: "1px solid rgba(255, 255, 255, 0.15)" }}
                                        placeholder="Enter your first name"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label text-white fw-semibold small mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-control text-white dark-input p-3 border-0"
                                        style={{ backgroundColor: "#0f172a", border: "1px solid rgba(255, 255, 255, 0.15)" }}
                                        placeholder="Enter your last name"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label text-white fw-semibold small mb-1">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control text-white dark-input p-3 border-0"
                                        style={{ backgroundColor: "#0f172a", border: "1px solid rgba(255, 255, 255, 0.15)" }}
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label text-white fw-semibold small mb-1">Phone No.</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control text-white dark-input p-3 border-0"
                                        style={{ backgroundColor: "#0f172a", border: "1px solid rgba(255, 255, 255, 0.15)" }}
                                        placeholder="Enter your phone number"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label text-white fw-semibold small mb-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control text-white dark-input p-3 border-0"
                                        style={{ backgroundColor: "#0f172a", border: "1px solid rgba(255, 255, 255, 0.15)" }}
                                        placeholder="Enter subject"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label text-white fw-semibold small mb-1">Question or Request</label>
                                    <textarea
                                        name="text"
                                        rows="4"
                                        className="form-control text-white dark-input p-3 border-0"
                                        style={{ backgroundColor: "#0f172a", border: "1px solid rgba(255, 255, 255, 0.15)" }}
                                        placeholder="Write your question or request here..."
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="col-12 mt-4">
                                    <button
                                        type="button"
                                        className="btn btn-warning w-100 py-3 fw-bold rounded-pill shadow"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;