// import React, { useEffect, useState } from 'react'
// import {Link} from 'react-router-dom'
// import './Home.css'

// const Home = ({apiData, setApiData, filterData, setFilterData, cart, setCart, itemsInCart, setItemsInCart}) => {
//     // let [apiData, setApiData] = useState([])
//     // let [filterData, setFilterData] = useState([])
//     useEffect(()=>{
//         fetch("https://dummyjson.com/recipes").then((res)=>{
//             return res.json();
//         }).then((data)=>{
//             console.log(data.recipes);
//             setApiData(data.recipes);
//             setFilterData(data.recipes);
//         })
//     },[])
//     function del(id){
//         let x = apiData.filter((a,b)=>{
//             return b !== id;
//         })
//         setFilterData(x);
//     }
//     function save(id){
//         let x = apiData.find((a, b)=>{
//             return b == id;
//         })
//         localStorage.setItem("img", JSON.stringify(x));
//     }
//     function sort(x){
//         if(x == 's'){
//             let data = apiData.filter((a, b)=>{
//                 return a.mealType[0] == "Snack";
//             })
//             setFilterData(data);
//         }
//         else if(x == 'l'){
//             let data = apiData.filter((a, b)=>{
//                 return a.mealType[0] == "Lunch";
//             })
//             setFilterData(data);;
//         }
//         else if(x == 'd'){
//             let data = apiData.filter((a, b)=>{
//                 return a.mealType[0] == "Dinner";
//             })
//             setFilterData(data);
//         }
//     }
//     // Sorting logic
//     // let arr = [1,2,5,6,9,2,3,4,5];
//     // let data = arr.sort((a,b)=>{
//     //     return a - b; //Ascending Order Sorting
//     //     // return b - a; //Descending Order Sorting
//     // })
//     // console.log(data);

//     function asc(){
//         let data = [...apiData].sort((a,b)=>{
//             return a.rating - b.rating;
//         })
//         setFilterData(data);
//     }
//     function dec(){
//         let data = [...apiData].sort((a,b)=>{
//             return b.rating - a.rating;
//         })
//         setFilterData(data);
//     }
//     function addToCart(a){
//         let x = cart.find((y)=>{
//             if(y.userId == a.userId){
//                 y.quantity++;
//                 return true;
//             }
//             return false;
//         })
//         if(!x){
//             let z = a;
//             z['quantity'] = 1;
//             setCart([...cart,z])
//         }
//         setItemsInCart(itemsInCart+1);
//     }
//   return (
//     <>
//     <div className="nav">
//         {/* Also filter based on ratings */}
//         <Link to={'/cart'}>
//             <button>Show Cart {itemsInCart}</button>
//         </Link>
//         <button onClick={asc}>ASC</button>
//         <button onClick={dec}>DEC</button>
//         <button onClick={()=>sort('s')}>Snack</button>
//         <button onClick={()=>sort('l')}>Lunch</button>
//         <button onClick={()=>sort('d')}>Dinner</button>
//     </div>
//     <section className='all'>
//     {
//         filterData.map((a, b)=>{
//             return(
//                 <>
//                 <div id='card'>
//                     <img src={a.image}/>
//                     <p>{a.name}</p>
//                     <p>Rating: {a.rating}</p>
//                     <div className="btns">
//                         <button onClick={()=>del(b)}>Delete</button>
//                         <button onClick={()=>save(b)}>Save</button>
//                         <button onClick={()=>{addToCart(a)}}>Add To Cart</button>
//                     </div>
//                 </div>
//                 </>
//             )
//         })
//     }
//     </section>
//     </>
//   )
// }

// export default Home


import React ,{useEffect,useState} from 'react'
import './App.css'
import {Link} from 'react-router-dom'



const Home = ({apiData,setApiData,copyData,setCopyData,cart,SetCart}) => {
    // let [apiData,setApiData] = useState([])
    // let [copyData,setCopyData] = useState([])

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
        }
        else if(x == 'l'){

            let filterdData = apiData.filter((a)=>{
                return a.mealType[0] == "Lunch";
            })
            setCopyData(filterdData)
        }
        else if(x == 'd'){
            let filterdData = apiData.filter((a)=>{
                return a.mealType[0] == "Dinner";
            })
            setCopyData(filterdData)

        }
    }
  return (
    <>
      <Link  to={'/cart'}>  
       <button> 🛒Cart {cart.length}</button>
       </Link>
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
                    <button  onClick={()=> SetCart([...cart,a])}>Add To Cart</button>
                </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Home