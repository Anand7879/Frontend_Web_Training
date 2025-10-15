import React from 'react'
import Home from './Home'
import {Route,Routes} from 'react-router-dom'
import Cart from './Cart'



const App = () => {
  return (
    <div>
       {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>

  )
}

export default App
