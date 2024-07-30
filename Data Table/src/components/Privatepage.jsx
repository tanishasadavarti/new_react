import React from 'react'

const Privatepage = ({children}) => {
 const isAuth=localStorage.getItem("token")
    if(!isAuth)
    {
        alert("you are not login !")
        window.location.href="/login"
    }
    else
    {
        return children
    }
}

export default Privatepage
