import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [product, setProduct] = useState([])
  const [page,setpage] =useState(1)
  const [category,setcategory]=useState(null)
  const [order,setorder]=useState(null)
  const [search,setsearch] = useState("")
  // console.log(order)
  // console.log(category)
  console.log(search)
  const getData = () => {
    axios.get(`http://localhost:3000/product`,{
      params:{
        _page:page,
        _limit:5,
        category:category,
        _sort:"price",
        _order:order
      }
    })
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handlesearch=(e)=>{
    setsearch(e.target.value)
  }

  const handledelete=(id)=>{
    axios.delete(`http://localhost:3000/product/${id}`)
    .then((res)=>{
      console.log(res)
      alert("delete !!")
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(() => {
    getData()
  }, [page,category,order])

  return (
    <div>
      <h1>Products</h1>
      <hr />
      <div style={{display:"flex",justifyContent:"space-around"}} >
        <div >
          {/* select */}
          <select name="" id="" onChange={(e)=>setcategory(e.target.value)}>
            <option value="">select your category</option>
            <option value="men's clothing">men</option>
            <option value="women's clothing"> women</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>
        </div>
        <div>
          <div className="search">
            <input type="text" placeholder='search' value={search} onChange={handlesearch}/>
          </div>
        </div>
        <div>
          {/* btn */}
          <button onClick={()=>setorder("asc")}>LowtoHigh</button>
          <button onClick={()=>setorder("desc")}>HightoLow</button>
        </div>
      </div>
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
          <button style={{padding:"5px 10px",margin:"5px",backgroundColor:"black",color:"white"}}><Link to={`/Editpage/${el.id}`}>EDIT</Link></button>
          <button onClick={()=>handledelete(el.id)} style={{padding:"5px 10px",margin:"5px",backgroundColor:"black",color:"white"}}>DELETE</button>
         
        </div>
      ))}
      </div>

      <div style={{display:"flex" ,justifyContent:"center"}}>
        <button onClick={()=>setpage(page-1)}>prev</button>
        <span>{page}</span>
        <button disabled={page==5} onClick={()=>setpage(page+1)}>next</button>
      </div>
    </div>
  )
}

export default Product;
