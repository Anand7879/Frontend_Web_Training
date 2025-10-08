// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//     let[input,SetInput] = useState({       
//         name : "",
//         email: "",
//         passWord : ""
//     })

//      let[show,SetShow] = useState({       
//         name : "",
//         email: "",
//         passWord : ""
//     })

//     function fun1(e){
//         let{name,value} = e.target
//         SetInput({...input,[name]:value})
//         console.log(input)
//     }
//     function fun2(){
//         SetShow(input)
//         console.log(show)
//     }
//   return (
//     <div>
//         <h1>{show.name}</h1>
//         <h1>{show.email}</h1>
//         <h1>{show.passWord}</h1>
//         <br />
//         <input name='name' value={input.name} onChange={fun1} type="text" placeholder='Name' />
//         <br />
//         <br />
//         <input type="email" name='email' value={input.email} onChange={fun1} placeholder='Email' />
//         <br />
//         <br />
//         <input name='passWord' value={input.passWord} type="text" onChange={fun1} placeholder='Password' />
//         <br />
//         <br />
//         <button onClick={fun2}>click</button>
//     </div>
//     )
// }

// export default App~

import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
// http://localhost:5173/
const App = () => {
  return (
    <div>
      {/* <SignUp/>
      <Login/> */}

      <Routes>
        <Route   path='/'    element={<Home/>}/>
        <Route   path='/signup'    element={<SignUp/>}/>
        <Route   path='/login'    element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App