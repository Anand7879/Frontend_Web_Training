import React from 'react'
import { useState } from 'react'

const Login = () => {

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
    <div>
        <fieldset>
        <legend>Login Form</legend>
        <h1>{show.name}</h1>
        <h1>{show.email}</h1>
        <h1>{show.passWord}</h1>
        <br />
        <input name='name' value={input.name} onChange={fun1} type="text" placeholder='Name' />
        <br />
        <br />
        <input type="email" name='email' value={input.email} onChange={fun1} placeholder='Email' />
        <br />
        <br />
        <input name='passWord' value={input.passWord} type="text" onChange={fun1} placeholder='Password' />
        <br />
        <br />
        <button onClick={fun2}>click</button>
        </fieldset>
    </div>
    )
}

export default Login