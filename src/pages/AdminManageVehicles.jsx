import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import axiosInstance from "../services/axiosInstance";

function AdminManageVehicles() {


  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [regNo, setRegNo] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [year, setYear] = useState("");
  const [seatingCapacity, setSeatCapacity] = useState("");
  const [rental, setRental] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const previewImageURL = URL.createObjectURL(file);
      setImagePreview(previewImageURL);
    }
  }

  const handleAdd = async (e) => {
    e.preventDefault();

    const payload = {
      brand: brand,
      type: vehicleType,
      model: model,
      status: status,
      registrationNumber: regNo,
      year: year,
      fuelType: fuelType,
      seatingCapacity: seatingCapacity,
      dailyRentalPrice: rental,
      description: description,
      imageUrl: imageFile
    }

    try {
      const response = await axiosInstance.post("/cars", payload);

      if (response.ok) {
        const result = await response.json();
        console.log("Vehicle added successfully:", result);
        alert("Vehicle added successfully!");
        resetForm();

      } else {
        console.error("Failed to add vehicle");
        alert("Failed to add vehicle. Please try again.");

      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");

    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const payload = {
      brand: brand,
      type: vehicleType,
      model: model,
      status: status,
      registrationNumber: regNo,
      year: year,
      fuelType: fuelType,
      seatingCapacity: seatingCapacity,
      dailyRentalPrice: rental,
      description: description,
      imageUrl: imageFile
    }

    try {
      const response = await axiosInstance.put("/cars/{id}", payload);

      if (response.ok) {
        const result = await response.json();
        console.log("Vehicle updated successfully:", result);
        alert("Vehicle update successfully!");
        resetForm();

      } else {
        console.error("Failed to update vehicle");
        alert("Failed to update vehicle. Please try again.");

      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");

    }
  }

  const resetForm = () => {
    setImageFile(null);
    setImagePreview("");
    setBrand("");
    setModel("");
    setRegNo("");
    setFuelType("");
    setYear("");
    setSeatCapacity("");
    setRental("");
    setVehicleType("");
    setStatus("");
    setDescription("");
  }



  return (
    <div className="min-vh-100" style={{ backgroundColor: "#121212", color: "#e0e0e0" }}>
      <AdminNavbar />

      {/* Hero Banner Section */}
      <div
        className="position-relative w-100 mb-5 d-flex align-items-center justify-content-center"
        style={{
          height: "200px",
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h2 className="text-white fw-bold tracking-widest uppercase" style={{ letterSpacing: "3px" }}>
          MANAGE VEHICLES
        </h2>
      </div>

      <div className="container pb-5 d-flex justify-content-center">
        <div
          className="p-4 shadow-lg border-0"
          style={{
            maxWidth: "900px",
            width: "100%",
            backgroundColor: "#1e1e1e",
            borderRadius: "10px",
            border: "1px solid #333"
          }}
        >
          <h4 className="text-center mb-4 text-light border-bottom border-secondary pb-3 mx-auto" style={{ width: "fit-content" }}>
            MANAGE VEHICLES
          </h4>

          <form className="containers">
            {/* Vehicle Image */}
            <div className="mb-4">
              <label for="input-file">
                <input
                  type="file"
                  className="form-control custom-dark-input"
                  accept="image/*"
                  id="img"
                  onChange={handleImageChange}
                  placeholder="Add Image URL"
                />
                {imagePreview && (
                  <div className="mt-3">
                    <img
                      src={imagePreview}
                      alt="Vehicle Preview"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "200px",
                        objectFit: "contain",
                        borderRadius: "8px",
                        border: "2px solid #444"
                      }}
                    />
                  </div>
                )}
              </label>
            </div>

            {/* Brand & Model */}
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <label className="text-light mb-2 small fw-bold"

                >Brand</label>
                <input type="text" className="form-control custom-dark-input" id="brand" placeholder="Brand" onChange={(e) => setBrand(e.target.value)} />
              </div>

              <div className="col-md-6">
                <label className="text-light mb-2 small fw-bold"

                  placeholder="ex:corolla">
                  Model
                </label>
                <input type="text" className="form-control custom-dark-input" id="model" placeholder="ex:Corolla" onChange={(e) => setModel(e.target.value)} />
              </div>
            </div>

            {/* Registration & Year Info - Row with 3 Columns */}
            <div className="row g-4 mb-4">
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold" >
                  Registration Number
                  <input type="text" className="form-control custom-dark-input" id="brand" placeholder="RegisterNumber"onChange={(e) => setRegNo(e.target.value)}></input>
                </label>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-md-4"></div>

                <select className="form-select custom-dark-input" id="fuelType" onChange={(e) => setFuelType(e.target.value)}>
                  <option selected disabled>Fuel Type</option>
                  <option value="Petrol"><PETROL></PETROL></option>
                  <option value="Diesel">DIESEL</option>
                  <option value="Diesel">ELECTRIC</option>
                  <option value="Diesel">HYBRID</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold">Year (2000-2025)</label>
                <select className="form-select custom-dark-input" id="year" onChange={(e) => setYear(e.target.value)}>
                  <option selected disabled>Reg</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold">Date (2000-2025)</label>
                <select className="form-select custom-dark-input" id="seating" onChange={(e) => setSeatCapacity(e.target.value)}>
                  <option selected disabled>Seating Capacity</option>
                  <option>2 Seats</option>
                  <option>4 Seats</option>
                  <option>5 Seats</option>
                </select>
              </div>
            </div>

            {/* Rental, Type, & Status */}
            <div className="row g-4 mb-4">
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold">Daily Rental</label>
                <select className="form-select custom-dark-input" id="rental" onChange={(e) => setRental(e.target.value)}>
                  <option selected disabled>Daily Rental</option>
                  <option>$50</option>
                  <option>$100</option>
                  <option>$200</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold">Vehicle Type</label>
                <select className="form-select custom-dark-input" id="vehicleType" onChange={(e) => setVehicleType(e.target.value)}>
                  <option selected disabled>Select type</option>
                  <option selected >SEDAN</option>
                  <option>SUV</option>
                  <option>LUXARY</option>
                   <option>VAN</option>
                    <option>SPORT</option>
                     <option>CROSSOVER</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="text-light mb-2 small fw-bold">Vehicle Status</label>
                <select className="form-select custom-dark-input" id="status" onChange={(e) => setStatus(e.target.value)}>
                  <option selected disabled>Select</option>
                  <option selected>AVAIABLE</option>
                  <option>RENTED</option>
                  <option>MAINTENANCE</option>
                </select>
              </div>
            </div>

            {/* Description Section */}
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <label className="text-light mb-2 small fw-bold">Description of Vehicle</label>
                <select className="form-select custom-dark-input"  id="descType" onChange={(e) => setDescription(e.target.value)}>
                  <option selected disabled>Select Default</option>
                  <option>Full option</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-row gap-3 mt-4" style={{ width: "130px" }}>
              <button className="btn btn-warning fw-bold text-dark border-0" onClick={handleAdd}>
                Add
              </button>
              <button className="btn btn-warning fw-bold text-dark border-0" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </form>
        </div>
      </div >

      {/* Custom Scoped CSS */}
      < style > {`
        .custom-dark-input {
          background-color: #2a2a2a !important;
          border: 1px solid #444 !important;
          color: #fff !important;
          padding: 10px 15px !important;
        }
        .custom-dark-input::placeholder {
          color: #777 !important;
        }
        .custom-dark-input:focus {
          border-color: #ffc107 !important;
          box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25) !important;
        }
        .btn-warning {
          background-color: #f6c23e !important;
          transition: transform 0.2s;
        }
        .btn-warning:hover {
          background-color: #dba514 !important;
          transform: scale(1.02);
        }
      `}</style >
    </div >
  );
}

export default AdminManageVehicles;