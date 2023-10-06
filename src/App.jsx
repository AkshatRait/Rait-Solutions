import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Pages/Services'
import Reviews from './Pages/Reviews'
import About from './Pages/About'
import {Routes, Route } from 'react-router-dom'
import Booking from './Pages/Booking'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/services' element={<Services />} ></Route>
      <Route path='/reviews' element={<Reviews />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path='/booking' element={<Booking />} ></Route>      
    </Routes>
     <Footer />
    </>
  )
}

export default App
