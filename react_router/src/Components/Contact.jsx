import './Contact.css'
const Contact=()=>{
    return(
        <>
        <section class="contact">
        <div class="container">
            <h1>Contact Us</h1>
            <p>If you have any questions, please reach out to us. We'd love to hear from you!</p>
            
            <div class="contact-form">
                <form action="#" method="POST">
                    <div class="input-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required/>
                    </div>
                    <div class="input-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div class="input-group">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>
        </>
    )
}

export default Contact