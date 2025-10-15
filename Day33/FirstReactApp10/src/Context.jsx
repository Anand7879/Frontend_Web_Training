import { createContext, useEffect } from "react";
import { useReducer } from "react";

let Context = createContext()
export default Context

const ContextP=({children})=>{
    let data = {
        apiData:[],
        cart:[]
    }

    function reduser(state,action){
        if(action.type=="apiData"){
            return {apiData:action.payload}
        }
        else if(action.type=="addToCart"){
            return {...state,cart:[action.payload]}
        }
    }
    

    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=>res.json())
        .then((data)=>{
            
            dispatch({type:"apiData",payload:data.recipes})
        })
    },[])

    let [state,dispatch]=useReducer(reduser,data)
    return(
        <div>
            <Context.Provider value={{state,dispatch}}>
                {children}
            </Context.Provider>
        </div>
    )
}
export {ContextP}