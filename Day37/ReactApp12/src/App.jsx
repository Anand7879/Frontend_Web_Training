import React, { useState } from 'react'
// import Home from './Home'
import {Route,Routes} from 'react-router-dom'
import NavBar from './NavBar'
import Login from './Login'
import SignUp from './SignUp'
import About from './About'


const App = () => {
  return (
     <div>
    {/* <NavBar/> */}
       
      <Routes>
        <Route path='/' element={<NavBar/>}/>
         <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Routes>
     </div>
  )
}

export default App
