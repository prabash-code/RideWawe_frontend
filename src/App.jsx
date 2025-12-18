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
import AdminPayments from './pages/AdminPayments'
import AdminReports from './pages/AdminReports'
import CustomerHome from './pages/CustomerHome'
import CustomerBookings from './pages/CustomerBookings'
import CustomerPayments from './pages/CustomerPayments'
import ForgotPw from './pages/ForgotPw'
import ChangePw from './pages/ChangePw'
import Payments from './pages/Payments'
import AddNewAdmin from './pages/AddNewAdmin'
import AdminManageVehicles from './pages/AdminManageVehicles'


function App({ show }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <AdminPayments/>
    </>
  )
}

export default App

