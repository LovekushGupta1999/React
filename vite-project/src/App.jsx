// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from "./About"
import Payment from "./Payment"
import Service from "./Service"
import FAQ from "./FAQ"
import { Moneyback as Money,Replace } from './Features'
function App() {

  return (
    <>
   <h1>Welcome</h1>
   <p>react</p>
   <About/>
   <FAQ/>
   <Payment/>
   <Service/>
   <Money/>
   <Replace/>
   </>
  )
}

export default App
