import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {
  const [productData,setProductData]=useState([]);
  const getData=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products')
    setProductData(response.data);
    console.log(response.data,"hehehehehehehehehehehe");
  }
  const getFirstData=async(id)=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(response.data);
  }
  useEffect(function(){
    getData()
    console.log('hello');
  },[])
  return (
    <div>
      {productData.map(function(elem){
        return <div><a href="">product</a></div>
      })}
    </div>
  )
}
export default App
