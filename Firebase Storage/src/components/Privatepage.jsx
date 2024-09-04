import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';
const Privatepage = ({children}) => {
  const [user] = useAuthState(auth);
//   if(!user){
//     return <Navigate to={"/login"}/>
//   }else{
//     return children;
//   }
}

export default Privatepage
