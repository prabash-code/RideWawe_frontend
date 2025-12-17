import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Bookings from './pages/Bookings'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import Signin from './pages/Signin'
import Register from './pages/Register'
import AdminHome from './pages/AdminHome'
import AdminBookings from './pages/AdminBookings'
import ManageVehicles from './pages/ManageVehicles'
import AdminPayments from './pages/AdminPayments'
import AdminReports from './pages/AdminReports'
import CustomerHome from './pages/CustomerHome'
import CustomerBookings from './pages/CustomerBookings'
import CustomerPayments from './pages/CustomerPayments'






function App({ show }) {
  const [count, setCount] = useState(0)
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
          
          <Route path='/HomeAdmin' element={<AdminHome />} />
          <Route path='/BookingsAdmin' element={<AdminBookings />} />
          <Route path='/ManageAdmin' element={<ManageVehicles />} />
          <Route path='/PaymentsAdmin' element={<AdminPayments/>} />
          <Route path='/ReportsAdmin' element={<AdminReports/>} />
          <Route path='/LogoutAdmin' element={<Home/>} />


      {/* Customer */}

          <Route path='/HomeCustomer' element={<CustomerHome />} />
          <Route path='/BookingsCustomer' element={<CustomerBookings />} />
          <Route path='/PaymentsCustomer' element={<CustomerPayments />} />
          <Route path='/LogoutCustomer' element={<Home/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App

