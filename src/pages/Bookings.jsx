import React from 'react'

import Footer from '../components/Footer'
import CustomerNavbar from '../components/CustomerNavbar'
import image from '../assets/bookings.png'

function Bookings() {
  return (
    <>
      <CustomerNavbar />
      {/* front image */}

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

      <div><p>Bookings</p></div>

      <div className="container my-5">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Booking Id</th>
              <th>Registraton Number</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Total Amount</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {/*add body here  */}
          </tbody>
        </table>

      </div>
      <Footer />
    </>

  )
}

export default Bookings