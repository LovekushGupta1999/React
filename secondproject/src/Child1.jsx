import Child2 from "./child2"

const Child=(props)=>{
// const Child=({name,age})=>{
    let {name,age}=props //destructuring of object's propertise
    return(
        <>
        <h1>Child {name} {age}</h1>
        <Child2 {...props}/>
        {/* <Child2 name={name} age={age}/> */}
        </>
    )
}
export default Child