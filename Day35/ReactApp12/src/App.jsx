import React from 'react'
import Home from './Home'
import {Route,Routes} from 'react-router-dom'
import Cart from './Cart'
import ProductDetails from './ProductDetails'
import ToDo from './ToDo'



const App = () => {
  return (
    <div>
       {<ToDo/>}

       {/* <Home/> */}
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detail/:id' element={<ProductDetails/>}/>
      </Routes> */}
    </div>

  )
}

export default App
