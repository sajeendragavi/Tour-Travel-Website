import { Component } from "react";
import "./NavbarStyles.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useState } from "react";

const Navbar =() =>{
    const navigate = useNavigate();//Hook to navigate
    const [clicked, setClicked] = useState(false); //UseState for managing state in functional component
    //state = { clicked: false }; //this use class component 

    // handleClick = () =>{
    //     this.setState({ clicked: !this.state.clicked})
    // }

    const handleClick = () => {
        setClicked(!clicked);  //Toggle menu
    }


        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">RusCey Tours</h1>

                <div className="menu-icons" onClick={handleClick}>
                    <
                        i className={clicked ? "fas fa-times" : "fas fa-bars"} 
                    ></i>

                </div>

                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => (
                       

                            <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>
                        


                    ))}

                    
                <button onClick={()=> navigate("/signUp")}>Sign Up</button>

                </ul>

            </nav>
        )
    
}

export default Navbar;