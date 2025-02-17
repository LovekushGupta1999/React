import myimage from "./imageswatch.jfif"

const Cart=()=>{
    return(
        <div style={{width : "30%"}}>

        <img src="image2.jpg" alt="" />
        <img src={myimage} alt="" />
        <h1>Digital watch</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam, </p>
        <button style={{background:"black",color:"white"}}>BUY</button>
        </div>
    )
}
export default Cart