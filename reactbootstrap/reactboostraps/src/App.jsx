import { Button } from "bootstrap"
import {Container,Col,Row} from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import { use } from "react";
function App() {

  let [name, setName]=useState("")
  let [value, setValue]=useState(0)
  let [pic,setimag]=useState("image(1).jpg")
  function demo(){
    setName("lovekush")
  }
  function incre(){
    setValue(value++)
  }
  function decre(){
    if(value>0){
    setValue(value--)
    }
  }
 
  function setimage(im){
    
    setimag(im)
  }
 
 
  let mobile="images(1).jpg"
  let laptop="laptop.webp"
  return (

   
    <>
     <h1>my name is {name}</h1>
     <button onClick={demo}>tap</button>
     <h1>value-{value}</h1>
     <button onClick={incre}>incre</button>
     <button onClick={decre}>decre</button>

   
    <button onClick={()=>setimage(laptop)}>laptap </button>
    <button onClick={()=>setimage(mobile)}>mobile</button>
   

  <img className="imge" src={pic} />
    
    { /* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
     <h1>Welcome</h1>
     <button>tape here</button>

     <Button>Tape Here</Button>
     <Container>
      <h1>This is first container</h1>
     </Container>

     <Container fluid>
      <h1>This is second container</h1>
     </Container>
     <Container>
      <Row>
      <Col lg={6} md={6} sm={12} className="bg-primary text-white p-4">
        <h1>First column</h1>
      </Col>
      <Col lg={6} md={6} sm={12} className="bg-danger text-white p-4">
        <h1>Second column</h1>
        {/* <Button variant="danger">Click here</Button> */}
      {/* </Col>
      </Row>
     </Container> */} 

    </>
  )
}

export default App