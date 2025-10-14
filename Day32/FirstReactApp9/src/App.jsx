import React ,{useState}from 'react'
import Home from './Home'
import Cart from './Cart'

import { Route, Routes } from 'react-router-dom'


const App = () => {
  let [apiData,SetData]=     useState([])
  let [filteredddData,SetFilteredddData]=     useState([])
  let [cart,SetCart]=    useState([])
    
  return (
    <div>
      <Routes>
        <Route   path='/'  element={<Home cart={cart} SetCart={SetCart}   apiData={apiData} SetData={SetData} filteredddData={filteredddData}    SetFilteredddData={SetFilteredddData} ></Home>} />
        <Route   path='/cart'  element={<Cart cart={cart} SetCart={SetCart} ></Cart>} />
      </Routes>
    </div>
  )
}

export default App
