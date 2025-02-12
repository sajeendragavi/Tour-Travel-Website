import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName = "hero"
        heroImg = "https://images.unsplash.com/photo-1568918756300-c011aed10362?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title = "Your Journey Your Story"
        text = "Choose your favourite Destinations"
        buttonText = "Travel Plan"
        url = "/"
        btnClass = "show"

        />

        <Destination/>
        <Trip/>
        <Footer/>

        </>

    )

}

export default Home;