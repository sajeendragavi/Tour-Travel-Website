import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../Assests/tea plantation.jpeg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact(){
    return(
        <>
        <Navbar/>
        <Hero 
            cName = "hero-mid"
            heroImg = {aboutImg}
            title = "Contact"

            btnClass = ".hide"

        />

        <ContactForm/>
        <Footer/>
        </>

    )

}

export default Contact;