// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// const SignUp = () => {

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
//         <legend>SignUp</legend>
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
//         <Link  to={'/login'}>  
//           <button style={{marginLeft:"10px"}}>Login</button>
//         </Link>
//    </div>
//     )
// }

// export default SignUp


import React from 'react'

const SignUp = () => {
  return (
    <div>
        <div class="signup-page">
        <h2>Sign Up</h2>
        <form class="signup-form">
          <input type="text" placeholder="name"/>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <button>create</button>
            <p class="message">Already registered? <a href="/login">Sign In</a></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp