import axios from 'axios'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../services/firebase'

const initialstate={
  title:"",
  price:"",
  image:"",
  description:"",
  category:""

}
const Editpage = () => {
  let {id}=useParams()
  const [formdata,setformdata]=useState(initialstate)

  const {title,price,description,image,category}=formdata

  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
  
  const handlesubmit=(e)=>{

    e.preventDefault()
    // console.log(formdata)

    updateDoc(doc(db,"products",id),formdata)
    .then((res)=>{
      console.log(res)
      alert("Data Updated...")
    })
    .catch((err)=>{
      console.log(err)
    })
}

  const GetSingleData=(id)=>{
    getDoc(doc(db,"products",id))
    .then((res)=>{
      console.log(res.data())
      setformdata(res.data())
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  useEffect(()=>{
    GetSingleData(id)
  },[])
  return (
    <div>
       <form onSubmit={(e)=>handlesubmit(e)}  style={{textAlign:"center",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",width:'30%',margin:"10% auto",padding:"30px 15px"}}>
        <input type="text" name="image" value={image} onChange={(e)=>handlechange(e)}  placeholder="image" /> <br />  <br />
        <input type="text" name="title" value={title} onChange={(e)=>handlechange(e)} placeholder="title" /> <br /><br />
        <select name="category" value={category} onChange={(e)=>handlechange(e)} >  
          <option value="category">category</option>
          <option value="men's clothing">men</option>
          <option value="women's clothing">women</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
        </select> <br /> <br />
        <input type="text" name='price' value={price}onChange={(e)=>handlechange(e)}  placeholder='price' /> <br /><br />
        <input type="text" name='description' value={description} onChange={(e)=>handlechange(e)}  placeholder='description' /> <br /> <br />
        <input type="submit" />
        

      </form>
    </div>
  )
}

export default Editpage
