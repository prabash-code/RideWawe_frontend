import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import sedan from "../assets/sedan.jpg";
import suv from "../assets/suv.jpg";
import benz from "../assets/benz.jpg";
import luxury from "../assets/luxury-cars.jpg";
import sport from "../assets/sport-car.jpg";
import cross from "../assets/crossover.jpg";
import van from "../assets/van.jpg";

const defaultCars = [
    // SEDAN
    {
        id: 1,
        brand: "Honda",
        model: "Civic RS Turbo",
        type: "SEDAN",
        dailyRentalPrice: "9,500",
        imageUrl: sedan
    },
    {
        id: 2,
        brand: "Toyota",
        model: "Premio G Superior",
        type: "SEDAN",
        dailyRentalPrice: "8,500",
        imageUrl: sedan
    },
    // SUV
    {
        id: 3,
        brand: "Toyota",
        model: "RAV4 Adventure AWD",
        type: "SUV",
        dailyRentalPrice: "14,500",
        imageUrl: suv
    },
    {
        id: 4,
        brand: "Ford",
        model: "Everest Titanium 4x4",
        type: "SUV",
        dailyRentalPrice: "16,000",
        imageUrl: suv
    },
    // LUXURY
    {
        id: 5,
        brand: "Mercedes-Benz",
        model: "C200 AMG Line",
        type: "LUXURY",
        dailyRentalPrice: "24,000",
        imageUrl: benz
    },
    {
        id: 6,
        brand: "BMW",
        model: "7 Series 730Li",
        type: "LUXURY",
        dailyRentalPrice: "28,000",
        imageUrl: luxury
    },
    // SPORT
    {
        id: 7,
        brand: "Ford",
        model: "Mustang GT 5.0 V8",
        type: "SPORT",
        dailyRentalPrice: "35,000",
        imageUrl: sport
    },
    // CROSSOVER
    {
        id: 8,
        brand: "Nissan",
        model: "X-Trail e-POWER AWD",
        type: "CROSSOVER",
        dailyRentalPrice: "13,000",
        imageUrl: cross
    },
    // VAN
    {
        id: 9,
        brand: "Toyota",
        model: "HiAce Grand Cabin Luxury",
        type: "VAN",
        dailyRentalPrice: "17,500",
        imageUrl: van
    }
];

function CarView() {
    const [cars, setCars] = useState(defaultCars);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await axiosInstance.get("/cars");
                if (res.data && Array.isArray(res.data) && res.data.length > 0) {
                    const carsWithImage = res.data.map((car) => ({
                        ...car,
                        imageUrl: car.imageBase64
                            ? `data:${car.imageType};base64,${car.imageBase64}`
                            : (car.image ? `data:${car.imageType};base64,${car.image}` : suv),
                    }));
                    setCars(carsWithImage);
                }
            } catch (err) {
                console.warn("Could not fetch cars from backend, using default fleet data:", err);
            }
        };

        fetchCars();
    }, []);

    const groupedCars = cars.reduce((acc, car) => {
        if (!acc[car.type]) acc[car.type] = [];
        acc[car.type].push(car);
        return acc;
    }, {});

    return (
        <div style={{ backgroundColor: "#0b0f19", color: "#f8fafc", minHeight: "100vh" }}>
            <Navbar />

            {/* Header Banner */}
            <div style={{
                background: "linear-gradient(135deg, #1e293b 0%, #0b0f19 100%)",
                padding: "60px 20px 40px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                textAlign: "center"
            }}>
                <h1 className="fw-bold text-white mb-2">Our Vehicle Fleet</h1>
                <p className="text-white-50 mb-0">Browse through our well-maintained selection of vehicles available for rent</p>
            </div>

            <div className="container py-5">
                {Object.keys(groupedCars).length === 0 ? (
                    <p className="text-center text-white-50">No cars available.</p>
                ) : (
                    Object.keys(groupedCars).map((type) => (
                        <div key={type} className="mb-5">
                            <div className="d-flex align-items-center mb-4 pb-2 border-bottom border-secondary border-opacity-25">
                                <h3 className="text-uppercase text-warning fw-bold mb-0 me-3">{type}</h3>
                                <span className="badge bg-secondary bg-opacity-25 text-white-50 px-3 py-1 rounded-pill">
                                    {groupedCars[type].length} Available
                                </span>
                            </div>

                            <div className="row g-4">
                                {groupedCars[type].map((car) => (
                                    <div key={car.id} className="col-lg-4 col-md-6">
                                        <div
                                            className="card h-100 shadow border-0 rounded-4 overflow-hidden"
                                            style={{
                                                backgroundColor: "#1e293b",
                                                color: "#fff",
                                                border: "1px solid rgba(255, 255, 255, 0.08)",
                                                transition: "transform 0.3s ease"
                                            }}
                                            onMouseOver={e => e.currentTarget.style.transform = "translateY(-6px)"}
                                            onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
                                        >
                                            <img
                                                src={car.imageUrl}
                                                alt={car.brand}
                                                className="card-img-top"
                                                style={{ height: "210px", objectFit: "cover" }}
                                            />
                                            <div className="card-body d-flex flex-column justify-content-between p-4">
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <span className="badge bg-warning text-dark fw-bold px-2 py-1 rounded">
                                                            {car.type}
                                                        </span>
                                                        <span className="text-warning fw-bold fs-5">
                                                            Rs. {car.dailyRentalPrice} <span className="text-white-50 small fw-normal">/ day</span>
                                                        </span>
                                                    </div>

                                                    <h5 className="card-title text-white fw-bold mb-2">
                                                        {car.brand} {car.model}
                                                    </h5>
                                                </div>

                                                <div className="pt-3 border-top border-secondary border-opacity-25 mt-3">
                                                    <Link
                                                        to={`/BookingConformation/${car.id}`}
                                                        className="btn btn-warning rounded-pill w-100 fw-bold py-2"
                                                    >
                                                        Book Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <Footer />
        </div>
    );
}

export default CarView;
