import React, { useState } from "react";

const Form=()=>{
let [FormData, setFormdata]= useState=("")
function inpchange(e){
    console.log(e.target.value)
    setFormdata(e.target.value)
}

    return(
        <>
    {FormData}
    <input type="text" name="" id="" onChange={inpchange} />
    </>
    )
}
export default Form