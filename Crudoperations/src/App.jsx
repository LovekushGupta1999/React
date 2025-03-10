import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [Apidata, setApi] = useState([])
  const [frmdata, setfrmdata] = useState([])
  function inputins(e){
    const {name,value}=e.target
    setfrmdata({...frmdata,[name]:value})
  }
 
  function frmsubmit(e){
   e.preventdefault()
  }
 useEffect(()=>{
    axios.get("http://localhost:3000/student").then(res =>{setApi(res.data)})
  },[del])
 
  function del(id){
    axios.delete(`http://localhost:3000/student/${id}`).then(r=>alert("Delete"))
  }
return(<>
 <table border="1">
  <tr>
      <th>Name</th>
      <th>age</th>
      <th>contact</th>
      <th>city</th>
      <th>operation</th>
  </tr>
 { Apidata.map((e)=>{ 
  return<>

  <tr>
      <td>{e.name}</td>
      <td>{e.age}</td>
      <td>{e.contact}</td>
      <td>{e.city}</td>
      <td><button onClick={()=>del(e.id)}>Delete</button></td>
  </tr>
  </>
   })}
</table>

<div class="form-container">
    <form action="#" method="post">
      <div class="input-section">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required/>
      </div>
      <div class="input-section">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required/>
      </div>
      <div class="input-section">
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>
      </div>
      <div class="input-section">
        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
      </div>
      <div class="submit-btn">
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  
  </> )
  }
export default App
