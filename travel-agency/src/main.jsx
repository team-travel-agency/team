import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Trips from './trips/trips.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    {/* <Trips/> */}
  </StrictMode>,
)
