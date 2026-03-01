import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {
  const [productData,setProductData]=useState([]);
  const getData=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products')
    setProductData(response.data);
  }

  useEffect(function(){
    getData()
    console.log('hello');
  },[])
  return (
    <div className='allProducts'>
      {productData.map(function(elem,idx){
        return <a target='_blank' className='product' key={idx}href="">
        <div>
          <img src={elem.image} alt="" />
          <h2>{elem.title}</h2>
        </div>
        </a>
      })}
    </div>
  )
}
export default App
