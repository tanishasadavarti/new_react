import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Allrotes from './routes/Allrotes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Allrotes/>
    </>
  )
}

export default App
