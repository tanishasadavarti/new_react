import React, { useState } from 'react'

const Counter = () => {
    const [count,setcount]=useState(0)

    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    const reset=()=>{
        setcount(0)
    }
    const even=(num)=> num%2==0;

    const prime=(num)=>{
        for(let i=2;i<num;i++){
            if(num%i==0)
             return false;
        }
        return true
    }
  return (
    <div style={{border:"1px solid white",padding:"50px"}}>
        <h1>Welcome to Counter 2.0</h1>
        <div className="btn">
            <button style={{backgroundColor:"white",color:"black",margin:"10px"}} onClick={decrement}>-1</button>
            <button style={{backgroundColor:"white",color:"black",margin:"10px"}} onClick={increment}>+1</button>
        </div>
        <button style={{backgroundColor:"white",color:"black",margin:"10px"}} onClick={reset}>reset Counter</button>
        <p>count : <h3>{count} </h3></p>

        <h3>This number is : {even(count)?"Even":"Odd"}</h3>
        <h3>Prime number : {prime(count)?"True":"False"} </h3>
    </div>
  )
}

export default Counter
