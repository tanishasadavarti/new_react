import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../services/Firebase';


const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("Your Account is Created...");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container" style={{border:"1px solid black",padding:"50px 20px",textAlign:"center",marginLeft:"10px",width:"50%"}}>
      <form className="signup-form" onSubmit={(e) => handlesubmit(e)}>
        <h2>Sign Up</h2>
        <p>Create your account. It's free and only takes a minute.</p>
        <input
         style={{padding:"10px 30px"}}
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter Your Email..."
        /><br /><br />
        <div className="password-container">
          <input
           style={{padding:"10px 30px"}}
            type={showPassword ? "text" : "password"}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter Your Password..."
          />
        </div>
        <br /><br />
        <input type="submit" className="submit-btn" />
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
