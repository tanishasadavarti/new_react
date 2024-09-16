import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/theme/Action'

const Theme = () => {
    const theme = useSelector((state)=>state.themereducer.theme)
    const dispatch= useDispatch()

    const handleThemeSwitch = (newTheme)=>{
        dispatch(setTheme(newTheme))
    }
  return (
    <div>
      <button
      style={{padding:"10px 50px ",margin:"10px",fontSize:"20px"}}
        onClick={() => handleThemeSwitch('light')}
        disabled={theme === 'light'}
      >
        Switch to Light
      </button>
      <button
       style={{padding:"10px 50px ",margin:"10px",fontSize:"20px"}}
        onClick={() => handleThemeSwitch('dark')}
        disabled={theme === 'dark'}
      >
        Switch to Dark
      </button>
    </div>
  )
} 

export default Theme
