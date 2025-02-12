import Hero from "../components/Hero";
import { LoginSignUp } from "../components/LogInSignUp/LoginSignUp";
import Navbar from "../components/Navbar";
import SignUpImg from "../Assests/beach.webp"
import Footer from "../components/Footer";

function SignUp(){
    return(
        <>
            <Navbar/>
            <Hero
                cName = "hero-mid"
                heroImg = {SignUpImg}
                title = "Sign Up"
            />
            <LoginSignUp/>
            <Footer/>
        </>
    )
}
export default SignUp;