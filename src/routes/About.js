import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../Assests/kandy.jpeg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About(){
    return(
        <>
        <Navbar/>
        <Hero 
            cName = "hero-mid"
            heroImg = {aboutImg}
            title = "About"

            btnClass = ".hide"

        />
        <AboutUs/>
        <Footer/>
        </>

    )

}

export default About;