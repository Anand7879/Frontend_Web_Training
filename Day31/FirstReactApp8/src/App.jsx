// import React from 'react'
// import { useReducer } from 'react'

// const App = () => {
//   function reducer(count,action){
//     if(action.type==='inc'){
//       return count+1
//     }
//     else{
//       return count
//     }
//   }

//   let[count,dispatch] = useReducer(reducer,0)
//   return (
//     <div>
//        <h2>{count}</h2>
//        <button onClick={()=>dispatch({type:"inc"})}>++</button>
//     </div>
//   )
// }

// export default App




// import React from 'react'
// import { useReducer } from 'react'

// const App = () => {
//   function reducer(color,action){
//     if(action.type==='r'){
//       return 'red'
//     }
//     else if(action.type==='g'){
//       return 'green'
//     }     
//     else if(action.type==='b'){
//       return 'blue'
//     }
//     else{
//       return color
//     } 
//   }

//   let[color,dispatch] = useReducer(reducer,'white')

//   return (
//     <div style={{backgroundColor:color,height:'100vh'}}>
//       <button onClick={()=>dispatch({type:'r'})}>Red</button>
//       <button onClick={()=>dispatch({type:'g'})}>Green</button>
//       <button onClick={()=>dispatch({type:'b'})}>Blue</button>

//     </div>
//   )
// }

// export default App


import React from 'react'
import Home from './Home'

const App = () => {
  
  let user="hello Anand"

  return (
    <div>
      <Home data={user}></Home>
    </div>
  )
}

export default App