import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div   style={{display:"flex",justifyContent:"space-between",width:"50%",margin:"auto",marginTop:"5%"}}>
      <Login/>
      <Signup/>
      </div>
    </>
  )
}

export default App
