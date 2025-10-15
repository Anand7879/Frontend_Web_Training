import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Context from './Context.jsx'
// import './index.css'
import App from './App.jsx'
import {BrowserRouter}  from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>    */}
   <Context.Provider value={"hello"}>
    <App />
   </Context.Provider>
    
    {/* </BrowserRouter> */}
  </StrictMode>,
)