import React from 'react'
import { useState } from 'react'
import "./LoginSignUpStyles.css"
import Icon1 from "../../Assests/name.png"
import Icon2 from "../../Assests/emailIcon.jpg"
import Icon3 from "../../Assests/password.png"

export const LoginSignUp = () => {

    const[action, setAction] = useState("Login");

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>

        </div>
        <div className='inputs'>
            {action==="Login"?<div></div>:<div className='input'>
                <img alt="img" src ={Icon1}/>
                <input type="text" placeholder='Name'/>
                </div>}
            

                <div className='input'>
                <img alt="img" src ={Icon2}/>
                <input type="email" placeholder='Email'/>
                </div>

                <div className='input'>
                <img alt="img" src ={Icon3}/>
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click here</span></div>}
        
        <div className='submit-container'>
            <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

        </div>
        
        </div>
  )
}
