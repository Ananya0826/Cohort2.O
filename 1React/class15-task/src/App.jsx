import React, { useEffect } from 'react'
import axios from 'axios';
const App = () => {
  const getData=async()=>{
    const response=await axios.get('https://fakestoreapi.com/products')
    console.log(response.data);
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
      
    </div>
  )
}

export default App
