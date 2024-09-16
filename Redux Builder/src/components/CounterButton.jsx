import React from 'react'
import { useDispatch } from 'react-redux'
import { DecrementCounter, IncrementCounter } from '../redux/counter/Action'

const CounterButton = () => {
    const dispatch = useDispatch()

  return (
    <div>
    <button style={{padding:"10px 50px ",margin:"10px ",fontSize:"20px"}} onClick={() => dispatch(IncrementCounter())} >ADD</button>
    <button style={{padding:"10px 50px " ,margin:"10px",fontSize:"20px"}} onClick={() => dispatch(DecrementCounter())}> REDUCE </button>
</div>
  )
}

export default CounterButton
