import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from "./Components/Pages/Home"
import Contact from "./Components/Pages/Contact"
import Projects from "./Components/Pages/Projects"
import Error from "./Components/Pages/Error"
import Footer from './Components/Footer'
import ServicesPage from './Components/Pages/ServicesPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <BrowserRouter>
      <div className=''>
        <Navbar />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='*' element={<Error />} />
        </Routes>


        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App