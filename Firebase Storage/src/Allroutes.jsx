import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Privatepage from './components/Privatepage'
import Products from './pages/Products'
import Editpage from './pages/Editpage'


const Allroutes = () => {
  return (
    <Routes>
        <Route path='/'element={<Homepage/>} ></Route>
        <Route path='/login'element={<Login/>} ></Route>
        <Route path='/products'element={<Products/>} ></Route>
        <Route path='/editpage/:id' element={<Editpage/>}> </Route>
    </Routes>
  )
}

export default Allroutes
