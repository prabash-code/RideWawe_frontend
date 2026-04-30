import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import image from '../assets/back.png';
import { Link } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import suv from '../assets/suv.jpg';

function Home() {

    const [cars, setCars] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [carRes, feedbackRes, ratingRes] = await Promise.all([
                    axiosInstance.get("/cars"),
                    axiosInstance.get("/feedback"),
                    axiosInstance.get("/ratings")
                ]);

                setCars(carRes.data);
                setFeedbacks(feedbackRes.data);
                setRatings(ratingRes.data);
                setLoading(false);

            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    const renderStars = (rating) => {
        const numericRating = Number(rating) || 0;
        return [...Array(5)].map((_, index) => (
            <i
                key={index}
                className={`bi ${index < numericRating ? "bi-star-fill" : "bi-star"} me-1`}
                style={{ color: index < numericRating ? "#ffc107" : "#ddd" }}
            ></i>
        ));
    };

    const chunkArray = (arr, size) => {
        const chunked = [];
        for (let i = 0; i < arr.length; i += size) {
            chunked.push(arr.slice(i, i + size));
        }
        return chunked;
    };

    if (loading) {
        return <h2 className="text-center mt-5">Loading...</h2>;
    }

    return (
        <div style={{ backgroundColor: "#f8f9fa" }}>
            <Navbar />

            {/* ================= HERO ================= */}
            <div style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "92vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center"
            }}>
                
              

                <Link to="/CarView">
                    <button className="btn btn-warning btn-lg rounded-pill px-5">
                        Rent Now
                    </button>
                </Link>
            </div>

            {/* FEATURES */}
            <div className="container py-5">
                <Feature />
            </div>

            {/* ================= CAR CAROUSEL ================= */}
            <div className="container py-5">
                <h2 className="text-center fw-bold mb-5">Popular Cars</h2>

                <div id="carCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {chunkArray(ratings, 4).map((group, index) => (
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                <div className="row">
                                    {group.map((c) => (
                                        <div className="col-md-3 mb-4" key={c.id}>
                                            <div className="card shadow rounded-4 h-100 border-0"
                                                style={{ transition: "0.3s" }}
                                                onMouseOver={e => e.currentTarget.style.transform = "translateY(-10px)"}
                                                onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
                                            >
                                                <img
                                                    src={c.car?.image
                                                        ? `data:${c.car.imageType};base64,${c.car.image}`
                                                        : suv}
                                                    className="card-img-top"
                                                    style={{ height: "200px", objectFit: "cover" }}
                                                />

                                                <div className="card-body text-center">
                                                    <h5 className="fw-bold">{c.car?.type}</h5>
                                                    <p>{c.car?.year}</p>

                                                    <div className="mb-2">
                                                        {renderStars(c.rating)}
                                                    </div>

                                                    <Link to="/CarView" className="btn btn-warning rounded-pill w-100">
                                                        Book Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ================= WHY CHOOSE US ================= */}
            <div className="container py-5">
                <h2 className="text-center fw-bold mb-5">Why Choose Us</h2>

                <div className="row text-center">
                    {[
                        { icon: "cash-stack", title: "Cheap Price", desc: "Best prices guaranteed" },
                        { icon: "headset", title: "24/7 Support", desc: "Always here to help" },
                        { icon: "lightning-charge", title: "Fast Booking", desc: "Book in seconds" }
                    ].map((item, i) => (
                        <div className="col-md-4 mb-4" key={i}>
                            <div className="p-4 bg-white shadow rounded-4 h-100">
                                <i className={`bi bi-${item.icon} fs-1 text-warning`}></i>
                                <h5 className="fw-bold mt-3">{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= CTA ================= */}
            <div style={{
                background: "linear-gradient(135deg, #ffb400, #e8f0c3)",
                padding: "80px 20px",
                textAlign: "center",
                color: "white"
            }}>
                <h1 className="fw-bold mb-3">Book Your Ride Now 🚗</h1>
                <p className="mb-4">Choose from a wide range of cars</p>

                <Link to="/CarView">
                    <button className="btn btn-dark btn-lg rounded-pill px-5">
                        Get Started
                    </button>
                </Link>
            </div>

            {/* ================= FEEDBACK ================= */}
            <div className="container py-5">
                <h2 className="text-center fw-bold mb-5">Customer Feedback</h2>

                <div className="row">
                    {feedbacks.map((f) => (
                        <div className="col-md-4 mb-4" key={f.id}>
                            <div className="card p-4 shadow rounded-4 text-center border-0">
                                <div>{renderStars(f.ratings)}</div>
                                <p className="mt-3">{f.review}</p>
                                <h6 className="fw-bold">- {f.name}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;