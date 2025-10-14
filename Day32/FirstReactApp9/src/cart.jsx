import React from 'react'
const Cart = ({cart, SetCart}) => {
  return (
    <div>
        {cart.map((a,b)=>{
            return(
               <div id='one'>
                    <img src={a.image}/>
                    <p>{a.name}</p>
                    <p id='p1'>{a.rating}</p>
                    <button  onClick={()=>{
                        let x = cart.filter((item, index)=>{
                            return index != b;
                        })
                        SetCart(x);
                    }}>Remove</button>
                </div>
            )
        }       
        )}
    </div>
  )
}
export default Cart
