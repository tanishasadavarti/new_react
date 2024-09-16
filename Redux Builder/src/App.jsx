import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Theme from './components/Theme'
import Counter from './components/Counter'
import CounterValue from './components/CounterValue'
import CounterButton from './components/CounterButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',width:'55%',margin:"auto",border:"1px solid gray"}}>
        <Theme />
        <Counter />
      </div>

    </>
  )
}

export default App
