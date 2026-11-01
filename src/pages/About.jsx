import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutImg from '../assets/benz.jpg'
import teamImg from '../assets/team.jpg'
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Navbar/>
      <div style={{ backgroundColor: "#0b0f19", color: "#f8fafc", minHeight: "100vh" }}>
        
        {/* HERO */}
        <div style={{
            background: "linear-gradient(135deg, #1e293b 0%, #0b0f19 100%)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "90px 20px 70px",
            textAlign: "center",
            color: "white"
        }}>
            <h1 className="fw-bold display-4 text-white">About Us 🚗</h1>
            <p className="fs-5 text-white-50">Your trusted partner for easy and reliable car rentals</p>
        </div>

        {/* ABOUT SECTION */}
        <div className="container py-5">
            <div className="row align-items-center g-5">

                <div className="col-md-6">
                    <img
                        src={aboutImg}
                        alt="about"
                        className="img-fluid rounded-4 shadow"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.08)", objectFit: "cover" }}
                    />
                </div>

                <div className="col-md-6">
                    <h2 className="fw-bold mb-3 text-white">Who We Are</h2>
                    <p className="text-white-50 leading-relaxed mb-3">
                        We are a modern car rental service dedicated to providing affordable,
                        reliable, and comfortable transportation solutions. Whether you need a car
                        for a trip, business, or daily use, we’ve got you covered.
                    </p>

                    <p className="text-white-50 leading-relaxed">
                        Our platform makes booking fast and simple, giving you access to a wide
                        range of vehicles at competitive prices.
                    </p>
                </div>

            </div>
        </div>

        {/* MISSION / VISION */}
        <div style={{ background: "#0f172a", borderTop: "1px solid rgba(255, 255, 255, 0.05)", borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div className="container py-5">
                <div className="row text-center g-4">

                    <div className="col-md-6">
                        <div
                            className="p-4 rounded-4 h-100 shadow-sm"
                            style={{
                                backgroundColor: "#1e293b",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                color: "#fff"
                            }}
                        >
                            <i className="bi bi-bullseye fs-1 text-warning"></i>
                            <h4 className="fw-bold mt-3 text-white">Our Mission</h4>
                            <p className="text-white-50 mb-0">
                                To provide affordable and high-quality car rental services
                                with excellent customer support.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div
                            className="p-4 rounded-4 h-100 shadow-sm"
                            style={{
                                backgroundColor: "#1e293b",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                color: "#fff"
                            }}
                        >
                            <i className="bi bi-eye fs-1 text-warning"></i>
                            <h4 className="fw-bold mt-3 text-white">Our Vision</h4>
                            <p className="text-white-50 mb-0">
                                To become the most trusted and convenient car rental platform
                                in the region.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="container py-5">
            <h2 className="text-center fw-bold mb-5 text-white">Why Choose Us</h2>

            <div className="row text-center g-4">

                <div className="col-md-4">
                    <div
                        className="p-4 rounded-4 shadow-sm h-100"
                        style={{
                            backgroundColor: "#1e293b",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            color: "#fff"
                        }}
                    >
                        <i className="bi bi-cash-stack fs-1 text-warning"></i>
                        <h5 className="fw-bold mt-3 text-white">Affordable Prices</h5>
                        <p className="text-white-50 mb-0">Best rates with no hidden charges.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div
                        className="p-4 rounded-4 shadow-sm h-100"
                        style={{
                            backgroundColor: "#1e293b",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            color: "#fff"
                        }}
                    >
                        <i className="bi bi-headset fs-1 text-warning"></i>
                        <h5 className="fw-bold mt-3 text-white">24/7 Support</h5>
                        <p className="text-white-50 mb-0">We are always ready to help you.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div
                        className="p-4 rounded-4 shadow-sm h-100"
                        style={{
                            backgroundColor: "#1e293b",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            color: "#fff"
                        }}
                    >
                        <i className="bi bi-lightning-charge fs-1 text-warning"></i>
                        <h5 className="fw-bold mt-3 text-white">Fast Booking</h5>
                        <p className="text-white-50 mb-0">Quick and easy reservation process.</p>
                    </div>
                </div>

            </div>
        </div>

        {/* TEAM SECTION */}
        <div style={{ background: "#0f172a", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div className="container py-5 text-center">
                <h2 className="fw-bold mb-2 text-white">Our Team</h2>
                <p className="text-white-50 mb-4">Meet the people behind our service</p>

                <img
                    src={teamImg}
                    alt="team"
                    className="img-fluid rounded-4 shadow"
                    style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                        border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                />
            </div>
        </div>

        {/* CTA */}
        <div style={{
            background: "linear-gradient(135deg, #1e293b 0%, #0b0f19 100%)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            color: "white",
            padding: "80px 20px",
            textAlign: "center"
        }}>
            <h2 className="fw-bold mb-3 text-white">Ready to Ride? 🚗</h2>
            <p className="mb-4 text-white-50">Book your car now and enjoy a smooth journey</p>

            <Link to="/CarView">
                <button className="btn btn-warning rounded-pill px-5 fw-bold">
                    Book Now
                </button>
            </Link>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default About