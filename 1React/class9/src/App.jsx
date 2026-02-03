import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './assets/components/User';
const App = () => {
  const [allData, setAllData] = useState([]);
  const getData = async () => {
    console.log("data aa gaya guys");
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    setAllData(response.data)
  }
  useEffect(function(){
    getData()
  },[])
  return (
    <div>
      <div className='all-cards'>
        {allData.map(function (elem, idx) {
          console.log(elem);
          return <div key={idx}><User elem={elem}/></div>
        })}
      </div>
    </div>
  )
}

export default App
/*
CSR:client side rendering
SSR:server side rendering
CSR:loads backend data to frontend data in the form of json,slower but good for SEO optimization.
SSR:faster than CSR.
promise is of three stages:accept,pending,response
*/