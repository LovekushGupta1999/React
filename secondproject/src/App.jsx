import Nav from "./navbar"
import Cart from "./cart"
import Hero from "./Herosec"
import Child from "./Child1"



function App() {
  let para={
    color: "green"
  }
  // let email=prompt("enter your email")
  let person={
    name:"sanjay",
    age:23,
    city:"bhopal"
  }
  let name="lovekush"

  function alertmes(a){
    alert("site is in maintenance")
    return a;
  }
 
  return (
    <>
    <Nav/>
    {/* <Hero/> */}
    <Cart/>
    {/* <h1>{name}-----------{email}</h1> */}
    <h1>client name {person.name}, age {person.age} and city {person.city}</h1>
     {/* <h1 style={{color:"red"}}>Welcome</h1> */}
     {/* <p style={para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam reprehenderit rerum ipsum inventore repudiandae numquam doloribus ab necessitatibus, voluptatibus quo, ipsam provident voluptate, voluptas sint natus deserunt excepturi ratione veniam!</p> */}
    {alertmes(10)}
    <Child name="vinay" age="21"/>
    </>
   

  )
}

export default App
