import "./ContactFormStyles.css"

function ContactForm(){
    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form action="https://formspree.io/f/xbldapvq" method="POST">
                <input name="name" placeholder="Name" required/>
                <input name="email" placeholder="Email" required/>
                <input name="subject" placeholder="Subject" required/>
                <textarea name="message" placeholder="Message" rows="4"></textarea>
                <button type="submit">Send Message</button>
            </form>

        </div>
    )
}

export default ContactForm;