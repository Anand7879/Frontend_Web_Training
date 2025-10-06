import React from 'react'
import { useState } from 'react'

const App = () => {

    let [input, setInput] = useState("")
    let [data,setData] = useState([])
    function fun1(e){
        // console.log(e.target.value)
        setInput(e.target.value)
    }
    function fun2(){
       setData([...data,input])
         console.log(data)
    }

  return (
    <div>
        {/* <h2>{input}</h2> */}
        {
            data.map((value)=>{
                return <h2>{value}</h2>
            })
        }
    <input onChange={fun1} />  
        <button onClick={fun2}>Print</button>
    </div>
  )
}
export default App
