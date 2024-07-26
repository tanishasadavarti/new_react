import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-around",fontSize:"20px"}}>
      <Link to={"/"} style={{textDecoration:"none"}}> home</Link>
      <Link to={"/about"} style={{textDecoration:"none"}}> about</Link>
      <Link to={"/product"} style={{textDecoration:"none"}}> product</Link>
      <Link to={"/login"} style={{textDecoration:"none"}}> login</Link>

    </div>
  )
}

export default Navbar
