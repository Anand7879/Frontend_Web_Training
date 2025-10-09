// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {

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
//         <legend>Login</legend>
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
//         <Link  to={'/signup'} >  
//         <button style={{marginLeft:"10px"}}>go to the SignUp page</button>
//        </Link>
//     </div>
//     )
// }

// export default Login

import React from 'react'

const Login = () => {
  return(
    <div class="login-page">
    <h2>Login</h2>
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered? <a href="/signup">Create an account</a></p>
    </form>
        
    </div>
  )
}

export default Login