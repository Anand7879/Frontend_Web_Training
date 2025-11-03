// import React, { useState } from 'react'

// const App = () => {

//     let[data,SetData] = useState(0)
//     let res = 0
//     for(let i = 0; i<1000000000; i++)
//     {
//         res+=i;
//     }
//   return (
//     <div>
//         <h2>{res}</h2>
//         <h2>{data}</h2>
//         <button onClick={()=>SetData(data+1)}>click</button>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import { useMemo } from 'react'

// const App = () => {

//   let[data,SetData] = useState(0)
//   let res =  useMemo(() => {
//        let total = 0
//         for(let i = 0; i<100000000; i++)
//         {
//             total+=i;
//         }
//         return total
//       }, []);
//       return (
//         <div>
//         <h2>{res}</h2>
//         <h2>{data}</h2>
//         <button onClick={()=>SetData(data+1)}>click</button>
//     </div>
//   )
// }

// export default App



//Problem with useEffect
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let[input,SetInput] = useState("")
//   let [data,SetData] = useState()

//   useEffect(() => {
//     SetData(data+1)
//   })

//   return (
//     <div>
//       <h1>{data}</h1>
//       <input type="text" onChange={(e)=>SetInput(e.target.value)} />
//     </div>
//   )
// }

// export default App


//solution
import React, { use, useEffect, useRef, useState } from 'react'

const App = () => {
  let [input,SetInput] = useState("")
  let count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1
  })
  return (
    <div>
   <h1>{count.current}</h1>
      <input type="text" onChange={(e)=>SetInput(e.target.value)} />
    </div>
  )
}

export default App

