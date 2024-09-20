import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext";
import Loader from "../Components/Loader";

function Login() {
  const [email,setemail]= useState("")
  const [password,setpassword]=useState("")
  const {loginUser,auth} =useContext(Authcontext)
  const [isloading,setisloading] = useState(false)
  const navigate = useNavigate()
  const handlesubmit=(e)=>{
    e.preventDefault()
    setisloading(true)
    axios.post("https://reqres.in/api/login",{email,password})
    .then((res)=>{
      setisloading(false)
      loginUser(res.data.token)
      console.log(res.data.token)
      navigate("/dashboard")
    })
    .catch((err)=>{
      console.log(err)
  })
  }
  return  isloading ? <Loader/>  : (
    <div>
      <form data-testid="login-form" onSubmit={(e)=>handlesubmit(e)} style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",width:"25%",margin:"auto",padding:"30px" ,marginTop:"10%"}}>
        <div>
          <label>
            Email : 
            <input data-testid="email-input" type="email" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)} style={{padding:"15px 20px",marginLeft:"40px"}} />

          </label>
        </div> <br />
        <div>
          <label>
            Password : 
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              name="password"
              onChange={(e)=>setpassword(e.target.value)}
              style={{padding:"15px 20px",marginLeft:"10px"}}
            />
          </label>
        </div> <br />
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" style={{border:"none",backgroundColor:"rgb(0, 89, 255)",color:"white",padding:"15px 40px",borderRadius:"5px"}} />
        </div>
      </form>
      <div style={{marginTop:"20px"}}>
        <Link to="/" style={{textDecoration:"none"}}><h3 >Go Back</h3></Link>
      </div>
    </div>
  );
}
export default Login;
