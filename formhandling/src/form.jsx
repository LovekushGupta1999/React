import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form=()=>{
let [FormData, setFormdata]= useState({username:"",email:"",password:""})
function inpchange(e){
    const {name,value}=e.target
    setFormdata({...FormData,[name]:value})
}

 let navigator= useNavigate()
 
function finalsubmit(e){
    e.preventdefault()
    localstorage.setItem("datas",JSON.stringify(formdata))
    
    navigator('/about')
}

    return(
       <>
    <form action="" onSubmit={finalsubmit}>
    name
    <input type="text" name="username" onChange={inpchange} /><br />
    email
    <input type="text" name="email" onChange={inpchange} /><br />
    password
    <input type="text" name="password" onChange={inpchange} /><br />

   <input type="submit" />
      </form>
    </>
    )
}
export default Form