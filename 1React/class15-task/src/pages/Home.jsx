import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <div className='home'>
      <h1>This is home page</h1>
      <button className='cta' onClick={()=>{
        navigate('/product')
      }}>Explore All Products</button>
      <h1></h1>
    </div>
  )
}

export default Home
