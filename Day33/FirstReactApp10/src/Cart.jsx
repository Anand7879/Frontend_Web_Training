import React from 'react'
import { useContext } from 'react'
import Context from './Context'
const Cart = () => {
    let {state,dispatch}=useContext(Context)
  return (
    <div>
        <h1>Cart Items</h1>
        <div>
        {
          state.cart.map((a)=>{
            return(
                <div id='one'>
                    <img src={a.image}/>
                    <p>{a.name}</p>
                    <p id='p1'>⭐ {a.rating}</p>
                </div>
                )
              })
          }
        </div>
    </div>
  )
}

export default Cart