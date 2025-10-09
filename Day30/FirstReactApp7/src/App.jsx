import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {
  const [allProducts, setAllProducts] = useState([])
  const [searchResult, setSearchResult] = useState(null)
  
  useEffect(() => {
    fetch("https://dummyjson.com/products").then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      setAllProducts(data.products)
    })
  }, [])
  
  function search() {
    let input = document.querySelector("input").value;
    
    // Handle empty input
    if (input === '') {
      setSearchResult(null);
      return;
    }
    
    let foundProduct = allProducts.find((a) => {
      return a.title.toLowerCase().includes(input.toLowerCase());
    })
    
    setSearchResult(foundProduct ? foundProduct : 'not found');

  }
  
  return (
    <div>
      <input type="text" />
      <button onClick={search}>Search</button>
    
      <div>
        {searchResult && searchResult !== 'not found' ? (
          <section> 
            <h2>{searchResult.title}</h2>
            <p>{searchResult.description}</p>
            <h3>Price: ${searchResult.price}</h3>
            <p>Category: {searchResult.category}</p>
            <p>Brand: {searchResult.brand}</p>
            <p>Rating: {searchResult.rating}</p>
            <p>Stock: {searchResult.stock}</p>
            <img src={searchResult.thumbnail} alt="" />
          </section>
        ) : searchResult === 'not found' ? (
          <p>Product not found</p>
        ) : null}

      </div>
    </div>
  )
}

export default App