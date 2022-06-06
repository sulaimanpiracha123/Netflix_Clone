import React, { useState } from 'react'
//import logo from "./images/logo1.png" 
import "./css/Login.css"
import Signup from './Signup'

function Login() {
    const [Signin,SetSignIn] = useState(false)
    return (
        <div className="Login">
            <div className="Login__header">
                <h1 >Netflix</h1>
                {/* <img src='' /> */}
                <button className='Login__button'>
                    Sign_In
                </button>

            </div>
            <div className='login_body'>
                {
            Signin ?(<Signup/>):(
            <> 
                <h2>Unlimited movies, TV shows, and more.</h2>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                <form className="Login_form">
                    <input type="text" placeholder="Email Address" />
                    <button onClick={()=>{SetSignIn(true)}}>Get Started</button>
                </form>
                </>
)
}
            </div>






            <div className='login_gradient'>

            </div>

        </div>

    )
}


export default Login