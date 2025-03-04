import { Routes,Route } from 'react-router-dom'
import './App.css'
import Form from './form'
import Navbar1 from './Navbar'
import About from './About'

function App() {

  return (
   <>
  

   
   <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/about' element={<About/>}/>
      
   

    </Routes>
   </>
  )
}

export default App
