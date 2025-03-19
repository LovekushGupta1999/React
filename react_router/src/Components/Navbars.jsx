import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Container,Col,Row} from "react-bootstrap"
import { Link } from 'react-router-dom';
import './Navbar.css'
import Footer from './Footer';





const  Navbar1=()=>{
    return(
        <>
       <header>
    <nav class="navbar">
        <div class="logo">
            <a href="#">ShopNow</a>
        </div>
        <ul class="nav-links">
            <li><Link to="/Home">Home </Link></li>
            <li><Link to="/Swiper">Shop</Link></li>
            <li><Link to="/About">About </Link></li>
            <li><Link to="/Contact">Contact </Link></li>
            <li><Link to="/Loginpage">Login </Link></li>
            <li><Link to="/Signup">Signup </Link></li>
        </ul>
        <div class="cart">
            <a href="#">🛒</a>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Search for products..."/>
            <button type="button">Search</button>
        </div>
    </nav>
</header>

        </>
    )
} 

export default Navbar1