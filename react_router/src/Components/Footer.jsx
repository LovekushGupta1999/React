import './Footer.css'
const Footer=()=>{
    return(
        <>
       <footer>
        <div class="footer-container">
        
            <div class="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                    <li><a href="terms.html">Terms & Conditions</a></li>
                </ul>
            </div>

           
            <div class="footer-social">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#" class="social-icon facebook">Facebook</a></li>
                    <li><a href="#" class="social-icon twitter">Twitter</a></li>
                    <li><a href="#" class="social-icon instagram">Instagram</a></li>
                    <li><a href="#" class="social-icon youtube">YouTube</a></li>
                </ul>
            </div>

          
            <div class="footer-newsletter">
                <h3>Subscribe to Our Newsletter</h3>
                <form action="#" method="POST">
                    <input type="email" placeholder="Enter your email" required/>
                    <button type="submit" class="subscribe-btn">Subscribe</button>
                </form>
            </div>
        </div>

     
        <div class="footer-bottom">
            <p>&copy; 2025 Your E-Commerce Store. All rights reserved.</p>
        </div>
    </footer>

        </>
    )
}
export default Footer


