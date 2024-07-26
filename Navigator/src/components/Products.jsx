import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [product, setProduct] = useState([])

  const getData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>Products</h1>
      <hr />
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20",margin:"auto",textAlign:"center"}}>
      {product.map((el) => (
        <div key={el.id} style={{margin:"20px",padding:"20px",boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
          <Link to={`/descriptionpage/${el.id}`} style={{textDecoration:"none",color:"black"}}>
          <img src={el.image} alt="" height={200} width={200} />
          <h3>{el.title}</h3>
          <h3>{el.price}</h3>
          <p>{el.description}</p>
          </Link>
          <button style={{padding:"5px 10px",margin:"5px",backgroundColor:"black",color:"white"}}><Link to={"/Editpage"}>EDIT</Link></button>
          <button style={{padding:"5px 10px",margin:"5px",backgroundColor:"black",color:"white"}}>DELETE</button>
         
        </div>
      ))}
      </div>
    </div>
  )
}

export default Product;
