import { signOut } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../services/firebase'

const Navbar = () => {
  const handlelogout=()=>{
    signOut(auth)
    .then((res)=>{
      alert("logout ....")
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div style={{justifyContent:"space-evenly",display:"flex"}}>
        <Link style={{textDecoration:"none"}} to={"/"}>home</Link>
        <Link style={{textDecoration:"none"}} to={"/products"}>products</Link>
        <Link style={{textDecoration:"none"}} to={"/login"}>login</Link>
        <Link style={{textDecoration:"none"}} to={"/editpage/:id"}> Editproduct</Link>
        <Link style={{textDecoration:"none"}} to={"/addproduct"}> addproduct</Link>
        <button  onClick={handlelogout} style={{backgroundColor:"lightblue",padding:"5px 10px",border:'none',borderRadius:'5px',fontWeight:"bold"}}>logout  </button>
    </div>
  )
}

export default Navbar
