// import React ,{useState}from 'react'
// import Home from './Home'
// import { Route, Routes } from 'react-router-dom'

// const App = () => {
//   let [apiData,SetData]=     useState([])
//   let [filteredddData,SetFilteredddData]=     useState([])

//     let [cart,SetCart]=    useState([])
    
//   return (
//     <div>
//       <Routes>
//         <Route   path='/'  element={<Home cart={cart} SetCart={SetCart}   apiData={apiData} SetData={SetData} filteredddData={filteredddData}    SetFilteredddData={SetFilteredddData}  />} />
//         <Route   path='/cart'  element={<cart cart={cart} SetCart={SetCart} />} />
//       </Routes>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Home from './Home'


const App = () => {
  return (
    <div>
   <Home/>
    </div>
  )
}

export default App
