import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App,Hello} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <App />
    <Hello/>
    <h1>happy </h1>
  </StrictMode>,
)
