import React from 'react'
import logo from "../assets/logo.png";

function AddNewAdmin() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div
                className="card shadow p-4"
                style={{ width: "420px", borderRadius: "15px" }}
            >
                <form>

                    {/* Header */}
                    <div className="d-flex align-items-center bg-warning rounded p-2 mb-3">
                        <img
                            src={logo}
                            alt="RideWave Logo"
                            style={{ width: "45px", height: "45px" }}
                            className="me-2"
                        />
                        <div>
                            <h5 className="mb-0 fw-bold text-dark">ADD NEW ADMIN</h5>
                            <small className="text-dark fw-bold">
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
                            placeholder="86592665V"
                            onChange={(e) => setId(e.target.value)}
                        />
                        <label htmlFor="name">Admin Name</label>
                    </div>

                                        {/* Email */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="86592665V"
                            onChange={(e) => setId(e.target.value)}
                        />
                        <label htmlFor="email">Admin Email</label>
                    </div>

                                        {/* password */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="86592665V"
                            onChange={(e) => setId(e.target.value)}
                        />
                        <label htmlFor="password">Add Password</label>
                    </div>

                    <div className="d-flex flex-column gap-2">
                        <button type="submit" className="btn btn-warning fw-bold">
                            Add New Admin
                        </button>
                  

                    <button
                        className="btn btn-outline-secondary w-100 fw-bold"
                    >
                        Back to Home
                    </button>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default AddNewAdmin 