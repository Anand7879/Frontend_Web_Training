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

    // function fun1(){
    //   if(state=='red'){
    //     SetState("green")
    //   }else{
    //     SetState("red")
    //   }
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



// import React, {useState} from 'react'

// const App = () => {
    //   let [state,SetState] = useState(new Date().toLocaleTimeString())
    
    //   setInterval(() => {
        //      SetState(new Date().toLocaleTimeString())
        //   });
        
//   return (
//     <div>
//          <h2>{state}</h2>
//          <button onClick={()=>SetState(state+1)}>Stop</button>
//          <button onClick={()=>SetState(state+1)}>Start</button>

//     </div>
//   )
// }

// export default App



//Date:-24/09/2025
// import React, {useState,useEffect} from 'react'

// const App = () => {
//   let [count,setCount] = useState(0)
//   let [city,setCity] = useState('Indore')

//   useEffect(() => {
//     console.log("Hello");

//   },[count])
  

//   return (
//     <div>
//         <h2>{count}</h2>
//         <button onClick={()=>setCount(count+1)}>click</button>
//         <h3>{city}</h3>
//         <button onClick={()=>setCity('Katni')}>Change</button>
//     </div>
//   )
// }
// export default App

// import React, {useState,useEffect, use} from 'react'
// const App = () => {
//   let [Apidata,setApiData] = useState([])
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response)=>{
//       return response.json()
//     }).then((data)=>{
//       console.log(data);
//       setApiData(data)
      
//     })

//   },[])
//   return(
//     <div>
//       {
//         Apidata.map((a)=>{
//           return(
//             <>
//             <p id='one'>{a.id}</p>
//             <h2>{a.title}</h2>
//             </>
//           )
//         })
//       }
//     </div>
//   )

// }
// export default App



//Date:-25/09/2025

import React, {useEffect,useState} from 'react'
import './App.css'

const App = () => {
let [apiData,setApiData] = useState([])

useEffect(() => {
fetch("https://dummyjson.com/recipes").then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data.recipes);
    setApiData(data.recipes)
})
}, []) 

function deleteRecipe(recipeId){
  let newArr =   apiData.filter((recipe, index) => {
        return index != recipeId
    })
    setApiData(newArr)
}

function save(index){
     let newArr =   apiData.find((recipe, index) => {
        
    })
    localStorage.setItem("recipe",JSON.stringify(newArr))
    
}

  return (
    <div>
        {
            apiData.map((a,index)=>{
                return(
                <div id='one'>
                    <img src={a.image}/>
                    <p>{a.name}</p>
                    <button onClick={() => deleteRecipe(index)}>delete</button>
                    <button onClick={() => save(index)}>save</button>
                </div>
                )
            })
        }
    </div>
  )
}

export default App