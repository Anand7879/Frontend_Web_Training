import React, { useContext } from 'react'
import Context from './Context'
import './App.css'
import { Link } from 'react-router-dom'


const Home = () => {
    
  let{state,dispatch}=useContext(Context)

 
  return (
    <>
    <div>
     <h1>🍽️ Recipe Menu</h1> 
     <Link to="/cart">
    <button id = 'cart'> 🛒Cart</button>
     </Link>
        <div>
        {
          state.apiData.map((a)=>{
            return(
              <div id='one'>
                    <img src={a.image}/>
                    <p>{a.name}</p>
                    <p id='p1'>⭐ {a.rating}</p>
                    <button  onClick={()=>{
                      dispatch({type:"addToCart",payload:a})
                    }}>Add To Cart</button>
                </div>
                )
              })
          }
        </div>
    </div>
    </>

  )
}

export default Home