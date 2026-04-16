import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Bookings from './pages/Bookings'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import Signin from './pages/Signin'
import Register from './pages/Register'
import AdminBookings from './pages/AdminBookings'
import AdminPayments from './pages/AdminPayments'
import AdminReports from './pages/AdminReports'
import CustomerHome from './pages/CustomerHome'
import CustomerBookings from './pages/CustomerBookings'
import CustomerPayments from './pages/CustomerPayments'
import ForgotPw from './pages/ForgotPw'
import ChangePw from './pages/ChangePw'
import AdminManageVehicles from './pages/AdminManageVehicles'
import AdminHome from './pages/AdminHome'
import CarListning from './pages/CarListning'



function App({ show }) {

  return (
    <>
            <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Bookings' element={<Bookings />} />
          <Route path='/Packages' element={<Packages />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Register' element={<Register />} />

          {/* admin */}

          <Route path='/Admin' element={<AdminHome/>} />
          <Route path='/BookingsAdmin' element={<AdminBookings />} />
          <Route path='/ManageAdmin' element={<AdminManageVehicles />} />
          <Route path='/PaymentsAdmin' element={<AdminPayments />} />
          <Route path='/ReportsAdmin' element={<AdminReports />} />
          <Route path='/Home' element={<Home/>} />

          {/* Customer */}
         <Route path='/CustomerHome' element={<CustomerHome/>} />
          <Route path='/BookingsCustomer' element={<CustomerBookings />} />
          <Route path='/PaymentsCustomer' element={<CustomerPayments />} />
          <Route path='/LogoutCustomer' element={<Home />} />
         
          {/* Forgot passwod form */}
          <Route path='/ForgotPw' element={<ForgotPw />} />

          {/* Change Password */}
          <Route path='/ChangePw' element={<ChangePw/>} />

          {/* route to  car listnings */}
          <Route path='/CarListning' element={<CarListning/>} />
          {/* add vehicle */}
            <Route path='/AdminManageVehicles' element={<AdminManageVehicles/>} />
            
         
        </Routes>
      </Router>
    </>
  )
}

export default App

