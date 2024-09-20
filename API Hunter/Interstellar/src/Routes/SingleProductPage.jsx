import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function SingleProductPage(){

    const [productdata,setproductdata]=useState([])
    const {id} = useParams()
    useEffect(()=>{
      axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
      .then((res)=>{
        setproductdata(res.data.data)
        console.log(res.data.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    },[])
    return (
        <div data-testid="products-container" style={{margin:"auto",width:"60%",boxShadow:" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>   
            <div>
                <h3 data-testid="product-brand" style={{paddingTop:"20px"}}>{productdata.brand}</h3>
            </div>
            <div >
            <img src={productdata.img} width={350} data-testid="product-image"/>
            </div>
            <div data-testid="product-category">{productdata.category}
            </div>
           
            <div data-testid="product-details"> {productdata.details}
            </div>
            <div data-testid="product-price">{productdata.price}
            </div>

            </div>
    )
}
export default SingleProductPage