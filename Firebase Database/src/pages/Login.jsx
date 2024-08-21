import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../service/Firebase'
import { signInWithPopup } from 'firebase/auth'
const Login = () => {
  const handlelogin=()=>{
    // alert("hello")
    signInWithPopup(auth,provider)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <h1>login page</h1>
      <GoogleButton onClick={handlelogin} />
    </div>
  )
}

export default Login
