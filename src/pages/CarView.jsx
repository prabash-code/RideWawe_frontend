import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";
import { Link } from "react-router-dom";

function CarView() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await axiosInstance.get("/cars");
                const carsWithImage = res.data.map((car) => ({
                    ...car,
                    imageUrl: car.imageBase64
                        ? `data:${car.imageType};base64,${car.imageBase64}`
                        : "/no-image.png",
                }));
                setCars(carsWithImage);
            } catch (err) {
                console.error(err);
                alert("Failed to fetch cars.");
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
        <div className="container py-4">
            <h2 className="text-center mb-4 text-warning">Car Viewing</h2>

            {Object.keys(groupedCars).length === 0 ? (
                <p>No cars available.</p>
            ) : (
                Object.keys(groupedCars).map((type) => (
                    <div key={type} className="mb-5">
                        <h3 className="text-uppercase text-info mb-3">{type}</h3>
                        <div className="row g-4">
                            {groupedCars[type].map((car) => (
                                <div key={car.id} className="col-lg-4 col-md-6">
                                    <div className="card h-100 shadow-sm">
                                        <img
                                            src={car.imageUrl}
                                            alt={car.brand}
                                            className="card-img-top"
                                            style={{ height: "200px", objectFit: "cover" }}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{car.brand} {car.model}</h5>
                                            <p className="card-text">Type: {car.type}</p>
                                            <p className="card-text text-warning">
                                                ${car.dailyRentalPrice} / day
                                            </p>
                                            <div className="card-footer bg-transparent border-0 d-flex gap-2">
                                                <Link
                                                    to={`/BookingConformation/${car.id}`}
                                                    className="btn btn-outline w-50 text-center"
                                                >
                                                    Update
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
    );
}

export default CarView;
