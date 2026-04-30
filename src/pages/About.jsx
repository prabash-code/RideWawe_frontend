import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutImg from '../assets/benz.jpg'
import teamImg from '../assets/team.jpg'

function About() {
  return (
    <>
    <Navbar/>
                {/* HERO */}
            <div style={{
                background: "linear-gradient(135deg, #ffb400, #e7ceb3)",
                padding: "100px 20px",
                textAlign: "center",
                color: "white"
            }}>
                <h1 className="fw-bold display-4">About Us 🚗</h1>
                <p className="fs-5">Your trusted partner for easy and reliable car rentals</p>
            </div>

            {/* ABOUT SECTION */}
            <div className="container py-5">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <img src={aboutImg} alt="about" className="img-fluid rounded-4 shadow" />
                    </div>

                    <div className="col-md-6">
                        <h2 className="fw-bold mb-3">Who We Are</h2>
                        <p>
                            We are a modern car rental service dedicated to providing affordable,
                            reliable, and comfortable transportation solutions. Whether you need a car
                            for a trip, business, or daily use, we’ve got you covered.
                        </p>

                        <p>
                            Our platform makes booking fast and simple, giving you access to a wide
                            range of vehicles at competitive prices.
                        </p>
                    </div>

                </div>
            </div>

            {/* MISSION / VISION */}
            <div style={{ background: "#f8f9fa" }}>
                <div className="container py-5">
                    <div className="row text-center">

                        <div className="col-md-6 mb-4">
                            <div className="p-4 shadow-sm rounded-4 h-100">
                                <i className="bi bi-bullseye fs-1 text-warning"></i>
                                <h4 className="fw-bold mt-3">Our Mission</h4>
                                <p>
                                    To provide affordable and high-quality car rental services
                                    with excellent customer support.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="p-4 shadow-sm rounded-4 h-100">
                                <i className="bi bi-eye fs-1 text-warning"></i>
                                <h4 className="fw-bold mt-3">Our Vision</h4>
                                <p>
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
                <h2 className="text-center fw-bold mb-5">Why Choose Us</h2>

                <div className="row text-center">

                    <div className="col-md-4">
                        <div className="p-4 shadow-sm rounded-4">
                            <i className="bi bi-cash-stack fs-1 text-warning"></i>
                            <h5 className="fw-bold mt-3">Affordable Prices</h5>
                            <p>Best rates with no hidden charges.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-4 shadow-sm rounded-4">
                            <i className="bi bi-headset fs-1 text-warning"></i>
                            <h5 className="fw-bold mt-3">24/7 Support</h5>
                            <p>We are always ready to help you.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-4 shadow-sm rounded-4">
                            <i className="bi bi-lightning-charge fs-1 text-warning"></i>
                            <h5 className="fw-bold mt-3">Fast Booking</h5>
                            <p>Quick and easy reservation process.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* TEAM SECTION */}
            <div style={{ background: "#f8f9fa" }}>
                <div className="container py-5 text-center">
                    <h2 className="fw-bold mb-4">Our Team</h2>
                    <p className="mb-4">Meet the people behind our service</p>

                    <img src={teamImg} alt="team" className="img-fluid rounded-4 shadow" style={{width:"300px",height:"300px"}} />
                </div>
            </div>

            {/* CTA */}
            <div style={{
                background: "#222",
                color: "white",
                padding: "80px 20px",
                textAlign: "center"
            }}>
                <h2 className="fw-bold mb-3">Ready to Ride? 🚗</h2>
                <p className="mb-4">Book your car now and enjoy a smooth journey</p>

                <a href="/CarView">
                    <button className="btn btn-warning rounded-pill px-5">
                        Book Now
                    </button>
                </a>
            </div>
    <Footer/>
    </>
   
  )
}

export default About