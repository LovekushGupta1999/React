import React, { useState } from "react";

const Form=()=>{
let [FormData, setFormdata]= useState=({username:"",email:"",password:""})
function inpchange(e){
    const {name,value}=e.target
    setFormdata({...FormData,[name]:value})
}

function finalsubmit(e){
    e.preventdefault()
    localstorage.setItem("data",JSON.stringify(formdata))
    console.log(formdata)
}
    return(
        <>
    <form action="" onSubmit={finalsubmit}>
    <input type="text"  onChange={inpchange} /><br />
    <input type="text" name="email" onChange={{inpchange}} /><br />
    <input type="text" name="password" onChange={{inpchange}} /><br />

   <input type="submit" />
      </form>
    </>
    )
}
export default Form