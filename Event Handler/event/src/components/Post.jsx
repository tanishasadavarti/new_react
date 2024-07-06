import React, { useState } from 'react'

const Post = () => {

    const [data, setData] = useState([])
    const fetchdata = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                console.log(data)
            })
            .catch((err) => console.log(err))

    }
    return (
        <div style={{margin:"auto"}}>
            <button onClick={fetchdata} style={{backgroundColor:"teal"}}>GET POST</button>
            {data.map((data) => (
                <div key={data.id} style={{border:"1px solid teal",margin:"10px"}}>
                    <h1>{data.title}</h1>
                    <h3>{data.body}</h3>
                </div>
            ))}
        </div>
    )
}

export default Post
