import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Context/AuthContext";
import axios from "axios";
import ProductsTable from "../Components/ProductsTable";

function Dashboard() {
  const {logoutUser,auth} =useContext(Authcontext)
  const [productdata,setproductdata]=useState([])
  useEffect(()=>{
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
    .then((res)=>{
      setproductdata(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn"style={{border:"none",backgroundColor:"rgb(0, 89, 255)",color:"white",padding:"10px 20px",borderRadius:"5px"}} >Logout</button>
        <p>
          Token:
          <b data-testid="user-token"> {auth.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable data={productdata} />
      </div>
    </div>
  );
}

export default Dashboard;
