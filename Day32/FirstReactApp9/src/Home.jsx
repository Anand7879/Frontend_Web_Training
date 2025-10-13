import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Home = ({ cart, SetCart, apiData, SetData, filteredddData, SetFilteredddData }) => {
    
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.recipes);
        SetData(data.recipes)
        SetFilteredddData(data.recipes)
      })
  }, [])

  function fun1() {
    let data1 = [...filteredddData].sort((a, b) => {
      return a.rating - b.rating
    })
    SetFilteredddData(data1)
  }

  function fun2() {
    let data1 = [...filteredddData].sort((a, b) => {
      return b.rating - a.rating
    })
    SetFilteredddData(data1)
  }

  function Show() {
    SetFilteredddData(apiData)
  }

  function sort(x) {
    let filterdData;
    if (x === 'b') {
      filterdData = apiData.filter((a) => {
        return a.mealType[0] === "Breakfast";
      })
    } else if (x === 'l') {
      filterdData = apiData.filter((a) => {
        return a.mealType[0] === "Lunch";
      })
    } else if (x === 'd') {
      filterdData = apiData.filter((a) => {
        return a.mealType[0] === "Dinner";
      })
    }
    SetFilteredddData(filterdData)
  }

  return (
    <>
     <Link  to={'/cart'}>  
      <button>Cart ({cart.length})</button>
       </Link>
    <div>
      <h1>🍽️ Recipe Menu</h1>
      
      <div id='btn'>
        <button onClick={() => fun1()}>Low to High Rating</button>
        <button onClick={() => fun2()}>High to Low Rating</button>
        <button onClick={() => sort('b')}>Breakfast</button>
        <button onClick={() => sort('l')}>Lunch</button>
        <button onClick={() => sort('d')}>Dinner</button>
        <button onClick={() => Show()}>Show All</button>
      </div>

      {
        filteredddData.map((a) => {
          return (
            <div id='one' key={a.id}>
              <img src={a.image} alt={a.name} />
              <p>{a.name}</p>
              <p id='p1'>⭐ {a.rating}</p>
              <button onClick={() => SetCart([...cart, a])}>Add to Cart</button>
            </div>
          )
        })
      }
    </div>
        </>
  )
}

export default Home