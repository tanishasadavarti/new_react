import React from 'react'
import CounterValue from './CounterValue'
import CounterButton from './CounterButton'
import { useSelector } from 'react-redux'

const Counter = () => {
  const {theme} = useSelector((store)=>store.themereducer)
  return (
    <div className={`counter ${theme === 'light' ? 'light_theme' : 'dark_theme'}`} style={{width:"80%",margin:"auto",padding:"20px",height:"40%",marginTop:"20px ",paddingBottom:"30px",marginBottom:"40px"}}>
      <h1>counter</h1>
      <CounterValue />
      <CounterButton />
    </div>
  )
}

export default Counter
