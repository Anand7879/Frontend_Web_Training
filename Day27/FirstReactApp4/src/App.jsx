// import React from 'react'
// let arr = [32,4,,4,3,2,7,8]
// let data = arr.sort((a,b)=>{
//     return a-b
// })
// console.log(data);

// export default function App() {
//   return (
//     <div>
//       <h1>Check the console for sorted array</h1>
//     </div>
//   )
// }


import React ,{useEffect,useState} from 'react'
import './App.css'


const App = () => {
    let [apiData,setApiData] = useState([])
    let [copyData,setCopyData] = useState([])

useEffect(() => {
fetch("https://dummyjson.com/recipes").then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data.recipes);
    setApiData(data.recipes)
    setCopyData(data.recipes)
})
}, []) 

function fun1(){
    let data1 = [...apiData].sort((a,b)=>{
        return a.rating - b.rating
    })
    setApiData(data1)
}
function fun2(){
    let data1 = [...apiData].sort((a,b)=>{
        return b.rating - a.rating
    })
    setApiData(data1)
}
function Show(){
    fetch("https://dummyjson.com/recipes").then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data.recipes);
        setApiData(data.recipes)
    })
}
 function sort(x){
        if(x == 'b'){
            let filterdData = apiData.filter((a)=>{
                return a.mealType[0] == "Breakfast";
            })
            
            setCopyData(filterdData)
            // setApiData(filterdData)
        }
        else if(x == 'l'){

            let filterdData = apiData.filter((a)=>{
                return a.mealType[0] == "Lunch";
            })
            // setApiData(filterdData)
            setCopyData(filterdData)
        }
        else if(x == 'd'){
            let filterdData = apiData.filter((a)=>{
                return a.mealType[0] == "Dinner";
            })
            // setApiData(filterdData)
            setCopyData(filterdData)

        }
    }
  return (
    <div>
        <h1>🍽️ Recipe Menu</h1>
        
        <div id='btn'>
        <button onClick={() => fun1()}>acs</button>
        <button onClick={() => fun2()}>dcs</button>
        <button onClick={()=>sort('b')}>Breakfast</button>
        <button onClick={()=>sort('l')}>Lunch</button>
        <button onClick={()=>sort('d')}>Dinner</button>
        <button onClick={()=>Show()}>ShowAll</button>
        </div>

        {
            copyData.map((a)=>{
                return(
                <div id='one'>
                    <img src={a.image}/>
                    <p>{a.name}</p>
                    <p id='p1'>{a.rating}</p>
                </div>
                )
            })
        }
    </div>
  )
}

export default App
