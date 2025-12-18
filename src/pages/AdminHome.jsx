import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import image from '../assets/back.png'



function AdminHome() {
  return (
    <>
      <AdminNavbar />


      <div style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: "750px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      </div>

      <h2 className="text-center">YOUR OVERVIEW</h2>
      <div
        className="d-flex justify-content-center align-items-start gap-4 mt-4"
        style={{ padding: "20px" }}>

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text fw-bold">Active Bookings</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text fw-bold">Complete Bookings</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text fw-bold">Total Spent</p>
          </div>
        </div>

      </div>

      {/* current bookings */}
      <h2 className="text-center">CURRENT BOOKINGS</h2>
      <div className="d-flex justify-content-center align-items-start gap-4 mt-4"
        style={{ padding: "20px" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text fw-bold">Active Bookings</p>
          </div>
        </div>

      </div>


      {/* Available Cars */}

           <h2 className="text-center">SEARCH AVAILABLE CARS</h2>
<div className="d-flex justify-content-end align-items-center mb-3" style={{ gap: "10px" }}>
  <input
    type="search"
    className="form-control form-control-dark"
    placeholder="Search..."
    aria-label="Search"
    style={{ width: "300px" }}
  />
  <button type="button" className="btn btn-warning fw-bold m-3">
    Search
  </button>
</div>


      <div className="d-flex justify-content-center align-items-start gap-4 mt-4"
        style={{ padding: "20px" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text fw-bold"></p>
          </div>
        </div>

      </div>
    </>

  )
}

export default AdminHome