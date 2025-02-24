import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
//pages
import Navbar1  from './Components/Navbars'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {


  return (
    <>
    <Routes>
      <Route path='/Navbar1' element={<Navbar1/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    <Navbar1/>

    </Routes>
    </>
  )
}

export default App
