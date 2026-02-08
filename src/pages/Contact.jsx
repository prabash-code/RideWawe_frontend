import React, { useState } from 'react';
import Navbar from '../components/Navbar';

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
     
        <div style={{ backgroundColor: "#fdfdfd" }}>
          <Navbar/>
            {/* 1. Header Hero - Inspired by image_448466.jpg */}
            <div style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "40vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white"
            }}>
                <h1 className="display-4 fw-bold">Contact Us</h1>
                <p className="opacity-75">Have a question? We are here to help you 24/7.</p>
            </div>

         
            <div className="container mt-n5 position-relative" style={{ marginTop: "-50px", zIndex: 10 }}>
                <div className="row g-4 text-center">
                    {[
                        { icon: "📞", title: "Call Us", detail: "+9477777574" },
                        { icon: "📧", title: "Email Us", detail: "ridewawe@gmail.com" },
                        { icon: "📍", title: "Visit Us", detail: "No.26,Main Street, Galle" }
                    ].map((item, i) => (
                        <div className="col-md-4" key={i}>
                            <div className="card border-0 shadow-sm p-4 rounded-4 h-100">
                                <div className="display-6 mb-2">{item.icon}</div>
                                <h6 className="fw-bold text-uppercase small text-muted">{item.title}</h6>
                                <p className="mb-0 fw-bold">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

 
            <div className="container py-5 my-5">
                <div className="row g-0 shadow-lg rounded-5 overflow-hidden">
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
                    <div className="col-lg-6 bg-white p-5">
                        <h2 className="fw-bold mb-2">Send Message</h2>
                        <p className="text-muted mb-4 small">Have a query? Submit to us here.</p>
                        
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" name="firstName" className="form-control bg-light border-0 p-3" placeholder="First Name" onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="lastName" className="form-control bg-light border-0 p-3" placeholder="Last Name" onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" name="email" className="form-control bg-light border-0 p-3" placeholder="Your Email" onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="phone" className="form-control bg-light border-0 p-3" placeholder="Phone No." onChange={handleChange} />
                                </div>
                                <div className="col-12">
                                    <input type="text" name="subject" className="form-control bg-light border-0 p-3" placeholder="Subject" onChange={handleChange} />
                                </div>
                                <div className="col-12">
                                    <textarea name="text" rows="4" className="form-control bg-light border-0 p-3" placeholder="Question or Request" onChange={handleChange}></textarea>
                                </div>
                                <div className="col-12 mt-4">
                                    <button type="button" className="btn btn-warning w-100 py-3 fw-bold rounded-pill shadow-sm" style={{ backgroundColor: "#ff8c00", color: "white", border: "none" }}>
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;