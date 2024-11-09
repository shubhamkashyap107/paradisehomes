import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from "./Components/Pages/Home"
import Contact from "./Components/Pages/Contact"
import Projects from "./Components/Pages/Projects"

const App = () => {
  return (
    <BrowserRouter>
      <div className=''>
        {/* <Navbar /> */}


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>


      </div>
    </BrowserRouter>
  )
}

export default App