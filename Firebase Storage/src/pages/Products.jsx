import axios from 'axios';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore'; 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../services/firebase';

const Product = () => {
  const [data, setdata] = useState([]);

  const getData = () => {
    getDocs(collection(db, "products"))
      .then((res) => {
        const filterdata = res.docs.map((el) => ({ id: el.id, ...el.data() }));
        setdata(filterdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const handledelete = (id) => {
    deleteDoc(doc(db, "products", id)) 
      .then((res) => {
        console.log(res);
        alert("Data Deleted...");
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <hr />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", margin: "auto", textAlign: "center" }}>
        {data.map((el) => (
          <div key={el.id} style={{ margin: "20px", padding: "20px" }}>
            <img src={el.image} alt="" height={200} width={200} />
            <h3>{el.title}</h3>
            <h3>{el.price}</h3>
            <p>{el.description}</p>
            <Link to={`/editpage/${el.id}`}>
              <button>edit</button>
            </Link>
            <button onClick={() => handledelete(el.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
