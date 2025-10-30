import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    let[input,SetInput] = useState({       
        name : "",
        email: "",
        passWord : ""
    })

     let[show,SetShow] = useState({       
        name : "",
        email: "",
        passWord : ""
    })

    function fun1(e){
        let{name,value} = e.target
        SetInput({...input,[name]:value})
        console.log(input)
    }
    function fun2(){
        SetShow(input)
        console.log(show)
    }
  return (
    <div class="form-container">
        <legend>SignUp</legend>
        <h1>{show.name}</h1>
        <h1>{show.email}</h1>
        <h1>{show.passWord}</h1>
       
        <input name='name' value={input.name} onChange={fun1} type="text" placeholder='Name' />
    
        <input type="email" name='email' value={input.email} onChange={fun1} placeholder='Email' />
    
        <input name='passWord' value={input.passWord} type="text" onChange={fun1} placeholder='Password' />
    
        <button onClick={fun2}>Submit</button>
        {/* <Link  to={'/login'}>  
          <button style={{marginLeft:"10px"}}>Login</button>
        </Link> */}
         <p class="message">Already registered? <a href="login">login</a></p> 
   </div>
    )
}

export default SignUp
