import Child2 from "./Child2.jsx"
import { createContext } from "react"
import React from "react"
import Child3 from "./Child3.jsx"
let nextdata=createContext()
let age=24
const Child1=()=>{
    return (
        <>
        <Child2/>
        
   <nextdata.Provider value={age}>
    <Child3/>
   </nextdata.Provider>
        </>
    )
}

export default Child1