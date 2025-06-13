import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Navbar from '../components/Navbar'
import { ProveedorDeTareas } from '../context/proveedorDeTareas'

function App() {
  

  return (
    <>
     <ProveedorDeTareas>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </ProveedorDeTareas>
    </>
  )
}

export default App
