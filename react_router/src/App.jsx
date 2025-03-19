import { useEffect, useState } from 'react'
import './App.css'
import { Routes,Route, Link } from 'react-router-dom'
//pages
import Navbar1  from './Components/Navbars'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Swiper from 'Swiper'
import LoginPage from './Components/Loginpage'
import SignUp from './Components/Signup'

function App() {
 
  return (
    <>  
    <Navbar1/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Swiper' element={<Swiper/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Loginpage' element={<LoginPage/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
   

    </Routes>
    </>
  )
}

export default App
