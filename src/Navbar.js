import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import './css/Navbar.css'
function Navbar() {
  const [show,handleShow]=useState(false);

  const transitionNavBar=()=>{
    if(window.scrollY>100)
    {
    handleShow(true)

  }
  else{
    handleShow(false)
  }
}
useEffect(()=>{
  window.addEventListener("scroll",transitionNavBar)
  return()=>{
    window.removeEventListener("scroll",transitionNavBar)
  }
},[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
    <div className='nav_content'>
      <h1>netflix</h1>
      <img src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" onClick={()=>firebase.auth().signOut()} className = "nav_avtar"/>
    </div>
  </div>



  )
}

export default Navbar