// import React from 'react'

// const cart = ({cart}) => {
//   return (
//     <div>
//         {
//             cart.map((a)=>{
//                 return (<>
//                 <div id='card'> 
//                     <img  src={a.image}/>
//             <p>{a.name}</p>
//             <p> Rating: {a.rating}</p>
//          <button  onClick={()=> SetCart([...cart,a])}>add </button>
//          </div>
//                 </>)

//             })
//         }
//     </div>
//   )
// }

// export default cart

// import React from 'react'
// import { Link } from 'react-router-dom'
// const cart = ({cart}) => {
//     return (
//         <div>
//             <h1>Cart Items</h1>
//             {
//                 cart.map((a) => {
//                     return (<>
//                         <div id='card'>
//                             <img src={a.image} />
//                             <p>{a.name}</p>
//                             <p> Rating: {a.rating}</p>
//                             <button onClick={() => SetCart([...cart, a])}>Add to Cart </button>
//                         </div>
//                     </>)    
//                 })
//             }
//             <Link to={'/'}>
//                 <button>Go to Home</button>
//             </Link>
//         </div>
//     )
// }

// export default cart
