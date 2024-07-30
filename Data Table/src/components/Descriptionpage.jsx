import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Descriptionpage = () => {
    const [oneproduct,setoneproduct]=useState({})
    const params=useParams()
        const getsingledata=()=>{
        axios.get(`http://localhost:3000/product/${params.id}`)
        .then((res)=>setoneproduct(res.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getsingledata()
    },[])
  return (
    <div>
      <div style={{margin:"auto",textAlign:"center",border:"1px solid black",width:"50%",marginTop:"10%",padding:"20px"}}>
        <img src={oneproduct.image} alt=""  height={200} width={200}/>
        <h3>{oneproduct.title}</h3>
        <h3>{oneproduct.price}</h3>
        <p>{oneproduct.description}</p>
        <h5>{oneproduct.category}</h5>
      </div>
    </div>
  )
}

export default Descriptionpage
