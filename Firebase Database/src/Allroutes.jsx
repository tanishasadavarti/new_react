import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Products from './pages/Products'
import Privatepage from './components/Privatepage'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/'element={<Homepage/>} ></Route>
        <Route path='/login'element={<Login/>} ></Route>
        <Route path='/products'element={
          <Privatepage>
            <Products/>
          </Privatepage>} ></Route>
    </Routes>
  )
}

export default Allroutes
