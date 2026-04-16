import React from "react";
import { Link } from "react-router-dom";

function CarListning() {

  const cars = [
    {
      id: 1,
      name: "BMW 3 Series",
      category: "Sedan",
      price: 120,
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442"
    },
    {
      id: 2,
      name: "Audi A6",
      category: "Luxury",
      price: 150,
      image: "https://images.unsplash.com/photo-1617814076668-9b82c1b53c63"
    },
    {
      id: 3,
      name: "Mercedes C-Class",
      category: "Sedan",
      price: 140,
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c6"
    },
    {
      id: 4,
      name: "Tesla Model 3",
      category: "Electric",
      price: 160,
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
    },
    {
      id: 5,
      name: "Toyota Corolla",
      category: "Economy",
      price: 70,
      image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f3"
    },
    {
      id: 6,
      name: "Honda Civic",
      category: "Economy",
      price: 75,
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c6"
    }
  ];

  return (
    <div className="bg-dark text-white min-vh-100 p-4">

      {/* PAGE HEADER */}
      <div className="mb-4">
        <h2 className="fw-bold text-warning">Car Listings</h2>
        <p className="text-secondary">
          View and manage available rental cars
        </p>
      </div>

      {/* FILTER BAR (UI ONLY) */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control bg-black text-white border-secondary"
            placeholder="Search car..."
          />
        </div>
        <div className="col-md-3">
          <select className="form-select bg-black text-white border-secondary">
            <option>All Categories</option>
            <option>Sedan</option>
            <option>Luxury</option>
            <option>Electric</option>
            <option>Economy</option>
          </select>
        </div>
      </div>

      {/* CAR GRID */}
      <div className="row g-4">
        {cars.map((car) => (
          <div className="col-lg-4 col-md-6" key={car.id}>
            <div className="card bg-black text-white border-0 h-100 rounded-4 shadow">

              <img
                src={car.image}
                alt={car.name}
                className="card-img-top rounded-top-4"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="fw-bold">{car.name}</h5>
                <p className="text-secondary mb-2">{car.category}</p>
                <h6 className="text-warning fw-bold">
                  ${car.price} / day
                </h6>
              </div>

              <div className="card-footer bg-transparent border-0 d-flex gap-2">
                <Link
                  to="/AdminManageVehicles"
                  className="btn btn-outline-light w-50 text-center"
                >
                  Update
                </Link>
                <button className="btn btn-warning w-50 fw-semibold">
                  Delete
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CarListning;
