import React from 'react'
import { useSelector } from 'react-redux'
const CounterValue = () => {
    const {counter}= useSelector((store)=>store.counterreducer)

  return (
    <div >
            <h1> {counter }</h1>

    </div>
  )
}

export default CounterValue
