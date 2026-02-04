import React, { useEffect, useState } from 'react'
import axios from 'axios'
/*
React-used to create ui
side by side wali cheezein like API call,animation,etc ke liye useEffect use hota hai 

*/
const App = () => {
  const [username,setUsername]=useState([]);
  const [num,setNum]=useState(0);
  const getData=async()=>{
    const response=await axios.get('https://randomuser.me/api/');
    console.log(response.data.results[0].name.first+" "+response.data.results[0].name.last);
    setUsername(response.data.results[0].name.first+" "+response.data.results[0].name.last);
    
  }
  useEffect(function(){
    getData();
  },[num]);
  return (
    <div>
      {username}
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1);
      }}>click</button>
    </div>
  )
}

export default App
