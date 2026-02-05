import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";

function CarListning() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axiosInstance.get("/cars");
        const carsWithImage=res.data.map((car)=>({...car,
          imageUrl:car.imageBase64 
          ?`data:${car.imageType};base64,${car.imageBase64}` 
          :"/no-image.png",
        }));
        
        setCars(carsWithImage);
      } catch {
        alert("Failed to fetch cars. Try again.");
      }
    }
    fetchCars();

  }, []);


  const handleDelete = async (id) => {
    try {
      const res = await axiosInstance.delete(`cars/${id}`);
      if (res.status === 200) {
        alert("Delete  Successfully!"); 
        setCars(cars.filter(car => car.id !== id));
       

      }
      else {
        alert("Failed to delete vehicle. Please try again.");

      }
    } catch {
      alert("An error occurred. Please try again.");
    }

  }

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
                src={car. imageUrl}
                alt={car.brand}
                className="card-img-top rounded-top-4"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="fw-bold">{car.brand}</h5>
                <p className="text-secondary mb-2">{car.type}</p>
                <h6 className="text-warning fw-bold">
                  ${car.dailyRentalPrice} / day
                </h6>
              </div>

              <div className="card-footer bg-transparent border-0 d-flex gap-2">
                <Link
                  to={`/ManageAdmin`}
                  className="btn btn-outline-light w-50 text-center"
                >
                  Update
                </Link>

                <button className="btn btn-warning w-50 fw-semibold" onClick={()=>handleDelete(car.id)}>
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
