// const App=()=>{
//     return(
//     // <><h1>Hello Purvesh Tiwari</h1></>
//      <form>
//         <h1>Registration Form</h1>
//         <fieldset>
//         <legend>Personel Information</legend> 
//         <label htmlFor="Name">Name:</label>
//         <input type="text" />
//         <br />
//         <br />
//           <label for="DOB">Date Of Birth:</label>
//           <input type="date" />
//            <br/>  
//             <br/>
//               <label for="Gen">Gender:</label>
//            <input name="Gen" type="radio">Male
//            <input name="Gen"  type="radio">Female
//            <input name="Gen"  type="radio">Other
//         </fieldset>
//      </form>
    
// )
// }
// export default App


// import React, {useState} from 'react'

// const App = () => {
//   let [state,SetState] = useState(0)
//     function fun1(){
      
// SetState(state+1)
//     }
//   return (
//     <div>
//         <h2>{state}</h2>
//         <button onClick={fun1}>click</button>
//     </div>
//   )
// }

// export default App

// import React, {useState} from 'react'

// const App = () => {
//   let [state,SetState] = useState("red")

//     function fun1(){
//       if(state=='red'){
//         SetState("green")
//       }else{
//         SetState("red")
//       }
//     }
//   return (
//     <div style={{backgroundColor:state,width:"100vw",height:"100vh",display:'flex',justifyContent:'center',alignItems:'center'}}>
//         <h2></h2>
//         <button onClick={fun1}>click</button>
//     </div>
//   )
// }

// export default App



// import React, {useState} from 'react'

// const App = () => {
//   let [state,SetState] = useState(0)

//     function fun1(){
// SetState(state+1)
      
//     }
//      function fun2(){
// SetState(state-1)
      
//     }
//      function fun3(){
// SetState(0)
      
//     }
//   return (
//     <div>
//          <h2>{state}</h2>
//         <button onClick={fun1}>++</button>
//         <button onClick={fun2}>--</button>
//         <button onClick={fun3}>Reset</button>

//     </div>
//   )
// }

// export default App




// import React, {useState} from 'react'

// const App = () => {
//   let [state,SetState] = useState(0)

//   return (
//     <div>
//          <h2>{state}</h2>
//         <button onClick={()=>SetState(state+1)}>++</button>
//         <button onClick={()=>SetState(state>0?state-1:0)}>--</button>
//         <button onClick={()=>SetState(0)}>Reset</button>

//     </div>
//   )
// }

// export default App



import React, {useState} from 'react'

const App = () => {
  let [state,SetState] = useState(new Date().toLocaleTimeString())

  setInterval(() => {
     SetState(new Date().toLocaleTimeString())
  });

  return (
    <div>
         <h2>{state}</h2>
         <button onClick={()=>SetState(state+1)}>Stop</button>
         <button onClick={()=>SetState(state+1)}>Start</button>

    </div>
  )
}

export default App