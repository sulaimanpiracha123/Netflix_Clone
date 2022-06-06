import React,{useRef} from 'react'
import "./css/signup.css"
import { auth } from './firebase';

function Signup(){

    const emailRef = useRef(null);
    const PasswordRef = useRef(null);

    const registerd = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            PasswordRef.current.value,
        ).then(authUser=>{
            console.log(authUser)
        }).catch(error=>{
            alert(error.message)
        })
        alert(emailRef.current.value)
    }

    const signIn =(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            PasswordRef.current.value
            ).then(authUser=>{
                console.log(authUser)
            })
    

    }
    return(
        <div className='SignupScreen'>
            <form>
            <input ref={emailRef} type="email" placeholder ="Email"/>
            <input ref ={PasswordRef} type="password" placeholder="Password"/>
            <button onClick={signIn}>SignIn</button>
            <h4>New To Netflix: <span onClick={registerd}>Sign Up Now</span></h4>
                </form>

        </div>
    )
}

export default Signup