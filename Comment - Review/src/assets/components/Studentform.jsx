import React, { useState } from 'react'
import { Simulate } from 'react-dom/test-utils'

let initialstate = {
  name: "",
  email: "",
  password: "",
  city: "",
  gender: "",
}
const Studentform = () => {
  const [formdata, setformdata] = useState(initialstate)

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const { name, email, password, city, } = formdata

  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(formdata)
  }

  return (
    <div style={{ border: "1px solid white", padding: "80px 50px", }}>
      <form action="" onSubmit={(e) => handlesubmit(e)}>
        <label style={{ fontSize: "20px" }}>Full Name : </label>
        <input onChange={(e) => handlechange(e)} name='name' value={name} style={{ padding: "10px", marginBottom: "10px" }} type="text" placeholder='enter your name' /><br />

        <label style={{ fontSize: "20px" }}>E-mail :</label>
        <input onChange={(e) => handlechange(e)} name='email' value={email} style={{ padding: "10px", marginBottom: "10px", marginLeft: "35px" }} type="text" placeholder='enter your email'/><br />

        <label htmlFor="" style={{ fontSize: "20px" }}>Password : </label>
        <input onChange={(e) => handlechange(e)} name='password' value={password} style={{ padding: "10px", marginBottom: "10px" }} type="password" placeholder='enter your password' /><br />
`
        <label htmlFor="" style={{ fontSize: "20px" }}>Select city </label>
        <select onChange={(e) => handlechange(e)} name="city" value={city} id="">
          <option value="">select your city</option>
          <option value="surat">surat</option>
          <option value="ahemdabad">ahemdabad</option>
          <option value="rajkot">rajkot</option>
        </select><br />

        <label htmlFor="" style={{ fontSize: "20px" }}>Gender :</label>
        <input onChange={(e) => handlechange(e)} type="radio" name='gender' value={"male"}/>Male
        <input onChange={(e) => handlechange(e)} type="radio" name='gender' value={"female"}/>Female <br /> <br />

        <button>Submit</button>
      </form>

    </div>
  )

}

export default Studentform
