import React from 'react';
import AdminNavbar from '../components/AdminNavbar';
import image from '../assets/bookings-admin.png';

function AdminBookings() {
  return (
    <>
      <AdminNavbar />

      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "750px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      ></div>

      {/* search bookings */}

      <div className="d-flex justify-content-end align-items-center mb-3" style={{ gap: "10px" }}>
        <input
          type="search"
          className="form-control form-control-dark"
          placeholder="Search Bookings.."
          aria-label="Search"
          style={{ width: "300px" }}
        />
        <button type="button" className="btn btn-warning fw-bold m-3">
          Search
        </button>
      </div>

      {/* Table */}
      <div className="container my-5">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Booking Id</th>
              <th>Customer</th>
              <th>Car</th>
              <th>Dates</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/*add body here  */}
          </tbody>
        </table>

      </div>



    </>
  );
}

export default AdminBookings;
