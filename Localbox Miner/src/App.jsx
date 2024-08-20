import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Midsection from './components/Midsection'
import { themecontext } from './context/Themecontext'
import Click from './Components/Click'

function App() {
  const {theme}=useContext(themecontext)
  console.log(theme)

  return (
    <>
    <div style={{backgroundColor:theme=="light"?"white":"black",color: theme=="light"?"black":"white"}}>
      <Navbar />
      <Click/>
      <Midsection/>
    
      </div>
      
    </>
  )
}

export default App
