
const About=()=>{
      

    let [signd, setsign]=useState({username:"",password:""})
    let [logindata, setlogindata]=useState({username:"",password:""})
    function inpchange(e){
        const {name,value}=e.target
        setFormdata({...FormData,[name]:value})
    }
 let navigator= useNavigate()
 useEffect(()=>{let signd=JSON.parse(localStorage.getItem("datas"))
    setsign(signd)
 })

    function finalsubmit(e){
        e.preventdefault()
        
        // let signd=JSON.parse(localStorage.getItem("datas"))

        if(signd.username==logindata.username && signd.password==logindata.password){
            console.log("user found")
            navigator('/app')
        }
        else{
            console.log("user not found")
        }
    }
         

    return(
        <>
         <form action="" onSubmit={finalsubmit}>
       user name
    <input type="text" name="username" onChange={inpchange} /><br />

    password
    <input type="text" name="password" onChange={{inpchange}} /><br />

   <input type="submit" />
      </form>
        </>
    )
}
export default About