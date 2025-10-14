import { createContext, use, useEffect } from "react";

let context = createContext()
export default context


const contextP=({children})=>{
    let data = {
        apiData:[],
        cart:[]
    }

    function reducer(apiData,action){
        if(action.type==="apiData"){
            return {...apiData,apiData:action.payload}
        }
    }

    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=>res.json())
        .then((data)=>{
            
            dispatch({type:"apiData",payload:data.recipes})
        })
    },[])

    let [val,dispatch]=useReducer(reducer,data)
    return(
        <div>
            <context.Provider>
                {children}
            </context.Provider>
        </div>
    )
}
export {contextP}