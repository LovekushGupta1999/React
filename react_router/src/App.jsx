import { useEffect, useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
//pages
import Navbar1  from './Components/Navbars'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  let [color,setcolor]=useState('yellow')
   useEffect(()=>{alert("working....!!")},[color,value])
   let [value,setvalue]=useState(0)

  return (
    <><Navbar1/>
    <h1>welcome to my site</h1>
    <div style={{height:"100vh",background:color,width:"100%"}}></div>
    <button onClick={()=>setcolor('red')}>click</button>
    <button onClick={()=>setcolor('green')}>click</button>
    <button onClick={()=>setcolor('black')}>click</button>

    <button onClick={()=>setvalue(value+1)}>+</button>
    <button onClick={()=>setvalue(value-1)}>-</button>
    <div>{value}</div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
   

    </Routes>
    </>
  )
}

export default App
