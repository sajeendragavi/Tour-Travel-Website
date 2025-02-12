import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../Assests/sigiriya.jpeg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service(){
    return(
        <>
         <Navbar/>
        <Hero 
            cName = "hero-mid"
            heroImg = {aboutImg}
            title = "Service"

            btnClass = ".hide"

        />
        <Trip/>
        <Footer/>
        </>

    )

}

export default Service;