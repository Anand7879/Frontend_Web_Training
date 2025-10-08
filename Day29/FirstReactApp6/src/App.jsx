// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//     let [input, setInput] = useState("")
//     let [data,setData] = useState([])
//     function fun1(e){
//         // console.log(e.target.value)
//         setInput(e.target.value)
//     }
//     function fun2(){
//        setData([...data,input])
//          console.log(data)
//     }
//   function fun3(index){
//     let newData = data.filter((value,i)=>{
//         return i!==index
//     })
//     setData(newData)
//   } 



//   return (
//     <div>
//         {/* <h2>{input}</h2> */}
//         <input onChange={fun1} />  
//         <button onClick={fun2}>Print</button>
//         {
//             data.map((value,index)=>{
                
//                 return (
//                     <div>
//                         <h2>{value}</h2>
//                         <button onClick={()=>fun3(index)}>Clear</button>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }
// export default App




import React from 'react'

const App = () => {

    let input = {       
        name : "",
        passWord : ""
    }
  return (
    <div>
        <input name='name' value={input.name} type="text" placeholder='Name' />
        <br />
        <br />
        <input name='passWord' value={input.passWord} type="text" placeholder='Password' />
    </div>
  )
}

export default App
