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

      <table style={{border:"1"}}>
        <tr>
          <th>Registration Number</th>
          <th> Start Date</th>
          <th>End Date</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Created Date</th>
          <th>Update Date</th>
        </tr>

        <tr>
          <td>as</td>
          <td>b</td>
          <td>d</td>
          <td>c</td>
          <td>r</td>
          <td>e</td>
          <td>f</td>
        </tr>
      </table>
      <Footer />
    </>

  )
}

export default Bookings