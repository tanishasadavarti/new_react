

import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { db } from "../services/firebase"

const initialdata={
  title:"",
  price:null,
  image:"",
  category:"",
  description:""
}

const Addproduct = () => {

  const [formdata,setformdata]=useState(initialdata)

  const {title,price,description,image,category}=formdata

  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
  
  const handlesubmit=(e)=>{

    e.preventDefault()
    // console.log(formdata)

      addDoc(collection(db,"products"),formdata)
      .then((res)=>{
        console.log(res)
      alert("Data Added...")
      })
      .catch((err)=>{
        console.log(err)
      })
    
}


  return (
    <div  style={{margin:'auto',textAlign:"center",marginTop:"10%",border:"1px solid black",width:"40%",padding:"30px"}}>
      <h1 >Add Product Here</h1>
      <div>
      <form action="" style={{margin:"auto"}}  onSubmit={(e)=>handlesubmit(e)}>
        <input style={{padding:"10px",width:"70%"}} name='image' value={image} onChange={(e)=>handlechange(e)} type="text" placeholder='Image' /><br /><br></br>
        <input style={{padding:"10px",width:"70%"}}  name='title' value={title} onChange={(e)=>handlechange(e)} type="text" placeholder='Title' /><br /><br></br>
        <select style={{padding:"10px",width:"70%"}}   name='category' value={category} onChange={(e)=>handlechange(e)}  id="">
          <option value="">Select Your Category</option>
          <option value={"Men's Cloths"}>Men's Clothing</option>
          <option value={"Women's Cloths"}>Women's Clothing</option>
          <option value={"Jwelery"}>Jwelery</option>
          <option value={"Electronics"}>Electronics</option>
        </select><br /><br></br>
        <input style={{padding:"10px",width:"70%"}}   name='price' value={price} onChange={(e)=>handlechange(e)} type="text" placeholder='Price' /><br /><br></br>
        <input style={{padding:"10px",width:"70%"}}  name='description' value={description} onChange={(e)=>handlechange(e)} type="text" placeholder='Description' /><br /><br></br>

        <input  style={{padding:"10px 40px",backgroundColor:"rgb(0, 110, 255)",border:"none",borderRadius:"10px",color:"white"}} type="submit" />
      </form>
      </div>
    </div>
  )
}

export default Addproduct
