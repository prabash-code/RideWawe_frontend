import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'

function App({ show }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register></Register>
    </>
  )
}

export default App

