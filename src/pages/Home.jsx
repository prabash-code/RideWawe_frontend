import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import image from '../assets/back.png';
import { Link } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import suv from '../assets/suv.jpg';
import sedan from '../assets/sedan.jpg';
import benz from '../assets/benz.jpg';
import luxury from '../assets/luxury-cars.jpg';
import sport from '../assets/sport-car.jpg';
import cross from '../assets/crossover.jpg';
import van from '../assets/van.jpg';

const defaultPopularCars = [
    {
        id: 1,
        rating: 5,
        car: {
            id: 1,
            type: "Mercedes-Benz C200",
            year: 2024,
            image: benz,
            isDirectSrc: true
        }
    },
    {
        id: 2,
        rating: 5,
        car: {
            id: 2,
            type: "Toyota RAV4 Adventure",
            year: 2023,
            image: suv,
            isDirectSrc: true
        }
    },
    {
        id: 3,
        rating: 4,
        car: {
            id: 3,
            type: "Honda Civic Sedan",
            year: 2023,
            image: sedan,
            isDirectSrc: true
        }
    },
    {
        id: 4,
        rating: 5,
        car: {
            id: 4,
            type: "Ford Mustang GT",
            year: 2024,
            image: sport,
            isDirectSrc: true
        }
    },
    {
        id: 5,
        rating: 5,
        car: {
            id: 5,
            type: "BMW 7 Series Luxury",
            year: 2024,
            image: luxury,
            isDirectSrc: true
        }
    },
    {
        id: 6,
        rating: 4,
        car: {
            id: 6,
            type: "Toyota HiAce Van",
            year: 2022,
            image: van,
            isDirectSrc: true
        }
    },
    {
        id: 7,
        rating: 5,
        car: {
            id: 7,
            type: "Nissan X-Trail Crossover",
            year: 2023,
            image: cross,
            isDirectSrc: true
        }
    },
    {
        id: 8,
        rating: 5,
        car: {
            id: 8,
            type: "Range Rover Sport SUV",
            year: 2024,
            image: suv,
            isDirectSrc: true
        }
    }
];

const defaultFeedbacks = [
    { id: "dummy-1", name: "Kasun Perera", review: "Excellent service! The car was in top condition and customer support was very helpful.", ratings: 5 },
    { id: "dummy-2", name: "Sarah Jenkins", review: "Smooth booking process and quick pickup at Colombo airport. Highly recommend RideWawe!", ratings: 5 },
    { id: "dummy-3", name: "David Silva", review: "Great rates and transparent pricing with no hidden charges. Will definitely book again.", ratings: 5 },
    { id: "dummy-4", name: "Nimali Fernando", review: "Very punctual driver and seamless booking experience. Loved the luxury ride!", ratings: 5 }
];

function Home() {
    const [cars, setCars] = useState([]);
    const [feedbacks, setFeedbacks] = useState(defaultFeedbacks);
    const [ratings, setRatings] = useState(defaultPopularCars);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [carRes, feedbackRes, ratingRes] = await Promise.all([
                    axiosInstance.get("/cars").catch(() => ({ data: [] })),
                    axiosInstance.get("/feedback").catch((err) => {
                        console.error("Failed to fetch backend feedbacks:", err);
                        return { data: [] };
                    }),
                    axiosInstance.get("/ratings").catch(() => ({ data: [] }))
                ]);

                if (carRes?.data && carRes.data.length > 0) setCars(carRes.data);

                if (feedbackRes?.data && Array.isArray(feedbackRes.data) && feedbackRes.data.length > 0) {
                    // Map real original feedbacks from the backend database
                    const backendFeedbacks = feedbackRes.data.map((f, i) => {
                        const rawName = f.name?.trim() || "Customer";
                        const formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
                        return {
                            id: f.id || f.feedbackId || `backend-${i}`,
                            name: formattedName,
                            email: f.email || "",
                            review: f.review || "",
                            ratings: Number(f.ratings) || 5,
                            isUserAdded: true
                        };
                    });

                    // Hold both: Original backend feedbacks first, supplemented with a few dummy reviews
                    setFeedbacks([...backendFeedbacks, ...defaultFeedbacks]);
                } else {
                    setFeedbacks(defaultFeedbacks);
                }
                let finalRatings = [];
                if (ratingRes?.data && Array.isArray(ratingRes.data) && ratingRes.data.length > 0) {
                    const formattedRatings = ratingRes.data.map((item) => ({
                        id: item.id,
                        rating: item.rating,
                        car: {
                            id: item.car?.id,
                            type: `${item.car?.brand || ''} ${item.car?.type || ''}`.trim() || "Popular Car",
                            year: item.car?.year || 2024,
                            image: item.car?.image,
                            imageType: item.car?.imageType || "image/jpeg",
                            isDirectSrc: item.car?.isDirectSrc || false
                        }
                    }));
                    finalRatings = [...formattedRatings];
                    // 8kata adu nam default popular cars walin ithuru tika fill karanna
                    if (finalRatings.length < 8) {
                        const needed = 8 - finalRatings.length;
                        finalRatings = [...finalRatings, ...defaultPopularCars.slice(0, needed)];
                    }
                } else {
                    finalRatings = defaultPopularCars;
                }
                setRatings(finalRatings);

            } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
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
            style={{ color: index < numericRating ? "#ffc107" : "#555" }}
        ></i>
    ));
};

const chunkArray = (arr, size) => {
    const chunked = [];
    if (!Array.isArray(arr)) return chunked;
    for (let i = 0; i < arr.length; i += size) {
        chunked.push(arr.slice(i, i + size));
    }
    return chunked;
};

if (loading) {
    return <h2 className="text-center text-white mt-5">Loading...</h2>;
}

return (
    <div style={{ backgroundColor: "#0b0f19", color: "#f8fafc", minHeight: "100vh" }}>
        <Navbar />

        {/* ================= HERO ================= */}
        <div style={{
            backgroundImage: `linear-gradient(rgba(11,15,25,0.4), rgba(11,15,25,0.85)), url(${image})`,
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
                <button className="btn btn-warning btn-lg rounded-pill px-5 fw-bold shadow">
                    Rent Now
                </button>
            </Link>
        </div>

        {/* FEATURES */}
        <div className="container py-5">
            <Feature />
        </div>

        {/* =================  POPULAR CAR CAROUSEL ================= */}
        <div className="container py-5">
            <h2 className="text-center fw-bold mb-5 text-white">POPULAR CARS</h2>

            <div id="carCarousel" className="carousel slide position-relative" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner">
                    {chunkArray(ratings, 4).map((group, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                            <div className="row">
                                {group.map((c) => (
                                    <div className="col-md-3 mb-4" key={c.id}>
                                        <div
                                            className="card shadow rounded-4 h-100 border-0"
                                            style={{
                                                backgroundColor: "#1e293b",
                                                color: "#fff",
                                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                                transition: "0.3s"
                                            }}
                                            onMouseOver={e => e.currentTarget.style.transform = "translateY(-10px)"}
                                            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
                                        >
                                            <img
                                                src={c.car?.isDirectSrc
                                                    ? c.car.image
                                                    : (c.car?.image
                                                        ? `data:${c.car.imageType};base64,${c.car.image}`
                                                        : suv)}
                                                className="card-img-top"
                                                style={{ height: "200px", objectFit: "cover" }}
                                                alt={c.car?.type || "Car"}
                                            />

                                            <div className="card-body text-center d-flex flex-column justify-content-between">
                                                <div>
                                                    <h5 className="fw-bold text-white mb-1">{c.car?.type}</h5>
                                                    <p className="text-white-50 small mb-2">{c.car?.year}</p>

                                                    <div className="mb-3">
                                                        {renderStars(c.rating)}
                                                    </div>
                                                </div>

                                                <Link to="/CarView" className="btn btn-warning rounded-pill w-100 fw-bold">
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

                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carCarousel"
                    data-bs-slide="prev"
                    style={{ width: "45px", left: "-25px" }}
                >
                    <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carCarousel"
                    data-bs-slide="next"
                    style={{ width: "45px", right: "-25px" }}
                >
                    <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                </button>
            </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="container py-5">
            <h2 className="text-center fw-bold mb-5 text-white">WHY CHOOSE US</h2>

            <div className="row text-center g-4">
                {[
                    { icon: "cash-stack", title: "Cheap Price", desc: "Best prices guaranteed" },
                    { icon: "headset", title: "24/7 Support", desc: "Always here to help" },
                    { icon: "lightning-charge", title: "Fast Booking", desc: "Book in seconds" }
                ].map((item, i) => (
                    <div className="col-md-4 mb-4" key={i}>
                        <div
                            className="p-4 shadow rounded-4 h-100"
                            style={{
                                backgroundColor: "#1e293b",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                color: "#fff"
                            }}
                        >
                            <i className={`bi bi-${item.icon} fs-1 text-warning`}></i>
                            <h5 className="fw-bold mt-3 text-white">{item.title}</h5>
                            <p className="text-white-50">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* ================= Banner ================= */}
        <div style={{
            background: "linear-gradient(135deg, #1e293b 0%, #0b0f19 100%)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "80px 20px",
            textAlign: "center",
            color: "white"
        }}>
            <h1 className="fw-bold mb-3 text-white">Book Your Ride Now 🚗</h1>
            <p className="mb-4 text-white-50">Choose from a wide range of premium cars</p>

            <Link to="/CarView">
                <button className="btn btn-warning btn-lg rounded-pill px-5 fw-bold">
                    Get Started
                </button>
            </Link>
        </div>

        {/* ================= FEEDBACK CAROUSEL ================= */}
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
                <div>
                    <h2 className="fw-bold mb-1 text-white">CUSTOMER FEEDBACK</h2>
                    <p className="text-white-50 mb-0">What our valued riders have to say</p>
                </div>
                <Link to="/feedback" className="btn btn-outline-warning rounded-pill px-4 fw-bold">
                    <i className="bi bi-chat-quote-fill me-2"></i>Give Feedback
                </Link>
            </div>

            <div
                id="feedbackCarousel"
                key={`feedback-${feedbacks.length}`}
                className="carousel slide position-relative"
                data-bs-ride="carousel"
                data-bs-interval="4500"
            >
                <div className="carousel-inner pb-3">
                    {chunkArray(feedbacks, 3).map((group, slideIndex) => (
                        <div className={`carousel-item ${slideIndex === 0 ? "active" : ""}`} key={slideIndex}>
                            <div className="row g-4 justify-content-center">
                                {group.map((f, itemIndex) => (
                                    <div className="col-lg-4 col-md-6 mb-3" key={f.id || itemIndex}>
                                        <div
                                            className="card p-4 shadow rounded-4 border-0 h-100"
                                            style={{
                                                backgroundColor: "#1e293b",
                                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                                color: "#fff",
                                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between"
                                            }}
                                            onMouseOver={e => {
                                                e.currentTarget.style.transform = "translateY(-8px)";
                                                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.4)";
                                            }}
                                            onMouseOut={e => {
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "";
                                            }}
                                        >
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <div>{renderStars(f.ratings)}</div>
                                                    {f.isUserAdded && (
                                                        <span className="badge bg-warning text-dark fw-bold px-2 py-1 rounded-pill small">
                                                            Verified Rider
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-white-50 fst-italic mb-4" style={{ minHeight: "65px" }}>
                                                    "{f.review}"
                                                </p>
                                            </div>

                                            <div className="d-flex align-items-center pt-3 border-top border-secondary border-opacity-25">
                                                <div
                                                    className="rounded-circle bg-warning text-dark fw-bold d-flex align-items-center justify-content-center me-3"
                                                    style={{ width: "42px", height: "42px", fontSize: "1.1rem" }}
                                                >
                                                    {f.name ? f.name.charAt(0).toUpperCase() : "U"}
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold text-white mb-0">{f.name}</h6>
                                                    <small className="text-warning">RideWawe Customer</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                {chunkArray(feedbacks, 3).length > 1 && (
                    <>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#feedbackCarousel"
                            data-bs-slide="prev"
                            style={{ width: "45px", left: "-25px" }}
                        >
                            <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#feedbackCarousel"
                            data-bs-slide="next"
                            style={{ width: "45px", right: "-25px" }}
                        >
                            <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                        </button>

                        {/* Indicators */}
                        <div className="carousel-indicators position-relative mt-4">
                            {chunkArray(feedbacks, 3).map((_, dotIndex) => (
                                <button
                                    key={dotIndex}
                                    type="button"
                                    data-bs-target="#feedbackCarousel"
                                    data-bs-slide-to={dotIndex}
                                    className={dotIndex === 0 ? "active" : ""}
                                    aria-current={dotIndex === 0 ? "true" : "false"}
                                    aria-label={`Slide ${dotIndex + 1}`}
                                    style={{
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "50%",
                                        margin: "0 5px",
                                        backgroundColor: dotIndex === 0 ? "#ffc107" : "#6c757d"
                                    }}
                                ></button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>

        <Footer />
    </div>
);
}

export default Home;