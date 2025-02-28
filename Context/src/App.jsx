import { createContext } from 'react'
import './App.css'
import Child1 from './Child1'
let cdata=createContext()
let name="lovekush"


function App() {

  return (
   <>
   <cdata.Provider value={name}>
   <Child1/>
   </cdata.Provider>



   </>
  )
}


export default App
