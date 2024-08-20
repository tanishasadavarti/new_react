import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvideFunction } from './context/Themecontext.jsx'


createRoot(document.getElementById('root')).render(
  <ThemeContextProvideFunction>
    <App />
  </ThemeContextProvideFunction>,
)
