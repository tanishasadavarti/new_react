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
        <div key={el.id} style={{margin:"20px",padding:"20px"}}>
          <img src={el.image} alt="" height={200} width={200} />
          <h3>{el.title}</h3>
          <h3>{el.price}</h3>
          <p>{el.description}</p>
         
        </div>
      ))}
      </div>
    </div>
  )
}

export default Product;
