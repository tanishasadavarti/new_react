import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Products from '../components/Products'
import Login from '../components/Login'
import Privatepage from '../components/Privatepage'
import Descriptionpage from '../components/Descriptionpage'

const Allrotes = () => {
  return (
    <div>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={
            <Privatepage >
                <Products/>
            </Privatepage>}>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/descriptionpage/:id' element={<Descriptionpage/>}></Route>
      </Routes>
    </div>
  )
}

export default Allrotes
