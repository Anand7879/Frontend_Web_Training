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


import React from 'react'
let count = 0
const App = () => {
    function fun1(){
      count+=1

    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={fun1}>click</button>
    </div>
  )
}

export default App