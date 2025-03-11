import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [Apidata, setApi] = useState([])
  const [frmdata, setfrmdata] = useState({})
  const [showfrm, setshowfrm] = useState(false)
  const [editdata, seteditdata] = useState({})

  function inputins(e){
    const {name,value}=e.target
    setfrmdata({...frmdata,[name]:value})
  }
 
  function frmsubmit(e){
   e.preventDefault()
   axios.post("http://localhost:3000/student",frmdata).then(r=>alert("data inserted"))
  }
 useEffect(()=>{
    axios.get("http://localhost:3000/student").then(res =>{setApi(res.data)})
  },[del])
 
  function del(id){
    axios.delete(`http://localhost:3000/student/${id}`).then(r=>alert("Delete"))
  }

 function handledit(e){
  const {name,value}=e.target
  seteditdata({...editdata,[name]:value})
 }

 function editfinalsubmit(e){
  e.preventDefault()
  axios.put(`http://localhost:3000/student/${editdata.id}`,editdata).then(r=>alert("dataedited"))
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
      <td>{e.id}</td>
      <td>{e.name}</td>
      
      <td>{e.email}</td>
      <td>{e.phone}</td>
      <td>{e.message}</td>
      <td><button onClick={()=>del(e.id)}>Delete</button></td>
      <td><button onClick={()=>{setshowfrm(!showfrm), seteditdata(e)}}>Edit</button></td>
  </tr>
  </>
   })}
</table>

<div class="form-container"  onSubmit={frmsubmit}>
    <form action="#" method="post">
      <div class="input-section">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" onChange={inputins}required/>
      </div>
      <div class="input-section">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" onChange={inputins} required/>
      </div>
      <div class="input-section">
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" onChange={inputins} required/>
      </div>
      <div class="input-section">
        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" onChange={inputins} required></textarea>
      </div>
      <div class="submit-btn">
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>

   { showfrm &&  
   ( <><h1>Edit Table</h1>
    <div class="form-container"  onSubmit={editfinalsubmit}>
    <form action="#" method="post">
    <div class="input-section">
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" name="name" value={editdata.id} placeholder="Enter your name" onChange={handledit}required/>
      </div>
      <div class="input-section">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={editdata.name} placeholder="Enter your name" onChange={handledit}required/>
      </div>
      <div class="input-section">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={editdata.email} placeholder="Enter your email" onChange={handledit} required/>
      </div>
      <div class="input-section">
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" value={editdata.phone} placeholder="Enter your phone number" onChange={handledit} required/>
      </div>
      <div class="input-section">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"  value={editdata.message} placeholder="Enter your message" onChange={handledit} required></textarea>
      </div>
      <div class="submit-btn">
        <button type="submit">Submit</button>
      </div>
    </form>
    </div></>
  ) }
  </> )
}
export default App
