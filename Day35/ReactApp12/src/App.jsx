import React, { useState } from 'react'
import Home from './Home'
import {Route,Routes} from 'react-router-dom'
import Cart from './Cart'
import ProductDetails from './ProductDetails'
import ToDo from './ToDo'


const App = () => {
  // const [count, setCount] = useState(0)
  // let[backGround,setbackGround] = useState()
  // function fun1(){
  //   setCount(count+1)
  // }

  // function fun2(){
  //   setbackGround('Green')
  // }

  return (
     <div>

       {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detail/:id' element={<ProductDetails/>}/>
      </Routes>
     </div>

    
    // <div style={{ backgroundColor: backGround,height:'100vh'}}>
    //   <h1>{count}</h1>
    //   <button onClick={fun1}>btn</button>
    //   <button onClick={fun2}>changeColor</button> 
    // </div>

  )
}

export default App
