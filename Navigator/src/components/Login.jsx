import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const handlesubmit=(e)=>{
    e.preventDefault()
     let user={
      email,
      password
     }
     axios.post("https://reqres.in/api/login",user).then((res)=>{
      let tokenfrom = res.data.token
      localStorage.setItem("token",tokenfrom)
      console.log()
     })
     .catch((err)=>console.log(err))
  }

  return (
    <div style={{border:"1px solid black",width:"30%",margin:"auto",textAlign:"center",height:"300px",marginTop:"10%"}} >
      <h1>Login</h1>
      <form action=""onSubmit={(e)=>handlesubmit(e)} >
        <input onChange={(e)=>setemail(e.target.value)} type="email"placeholder='enter your email' /> <br /> <br />
        <input onChange={(e)=>setpassword(e.target.value)} type="password"placeholder='enter your password' /> <br /> <br />
        <input type="submit" />
      </form>
     
    </div>
  
  )
}

export default Login
