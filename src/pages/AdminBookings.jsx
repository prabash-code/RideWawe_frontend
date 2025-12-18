import React from 'react'
import AdminNavbar from '../../components/AdminNavbar'
import image from '../assets/bookings-admin.png'

function AdminBookings() {
  return (
    <>
      <AdminNavbar />

      {/* image */}
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

    </>

  )
}

export default AdminBookings