import React, { useState } from "react";
import axiosInstance from "../services/axiosInstance";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // 

        try {
            const payload = {
                username: name,
                email: email,
                password: password,
                phone: phone,
                nic: id,
            };

            const response = await axiosInstance.post("/user/register", payload);
            console.log("Response:", response.data);
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div
                className="card shadow p-4"
                style={{ width: "420px", borderRadius: "15px" }}
            >
                <form onSubmit={handleSubmit}>
                    {/* Header */}
                    <div className="d-flex align-items-center bg-warning rounded p-2 mb-3">
                        <img
                            src={logo}
                            alt="RideWave Logo"
                            style={{ width: "45px", height: "45px" }}
                            className="me-2"
                        />
                        <div>
                            <h5 className="mb-0 fw-bold text-dark">Create Account</h5>
                            <small className="text-dark">
                                Premier Car Rental Service In Sri Lanka
                            </small>
                        </div>
                    </div>

                    {/* Name */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Saman Perera"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Full Name</label>
                    </div>

                    {/* Email */}
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email address</label>
                    </div>

                    {/* Password */}
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    {/* Phone */}
                    <div className="form-floating mb-3">
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            placeholder="0771234567"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <label htmlFor="phone">Phone Number</label>
                    </div>

                    {/* NIC */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="nic"
                            placeholder="86592665V"
                            onChange={(e) => setId(e.target.value)}
                        />
                        <label htmlFor="nic">NIC</label>
                    </div>

                    {/* select role */}
                    <select className="form-select mb-3" id="state" required="">
                        <option value="">ADMIN</option>
                        <option>CUSTOMER</option> </select>

                    {/* Button */}

                    <div className="d-flex flex-column" style={{ gap: "10px" }}>
                        <button className="btn btn-warning w-100 fw-bold py-2 ">
                            Sign Up
                        </button>

                        <Link to="/Home">
                            <button
                                className="btn btn-outline-secondary w-100 fw-bold"
                            >
                                Back to Home
                            </button>
                        </Link>
                    </div>


                    {/* Footer */}
                    <p className="text-center text-muted mt-4 mb-0">
                        © 2025 RideWave
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
