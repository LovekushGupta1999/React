const About=()=>{
    let [logindata, setlogindata]=useState({username:"",password:""})
    function inpchange(e){
        const {name,value}=e.target
        setFormdata({...FormData,[name]:value})
    }
    function finalsubmit(e){
        e.preventdefault()
        localstorage.setItem("data",JSON.stringify(formdata))
    }
       

    return(
        <>
         <form action="" onSubmit={finalsubmit}>
       user name
    <input type="text"  onChange={inpchange} /><br />

    password
    <input type="text" name="password" onChange={{inpchange}} /><br />

   <input type="submit" />
      </form>
        </>
    )
}
export default About