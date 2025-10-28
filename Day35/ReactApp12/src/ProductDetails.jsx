import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from './Context'

const ProductDetails = () => {
  let[showData,setShowData]=useState()
  let {id} = useParams()
  
  let {state} = useContext(Context)
  state.apiData.find((a,b)=>{
    return id==a.id
  })

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails