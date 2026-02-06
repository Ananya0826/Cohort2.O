import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between bg-pink-900 px-8 py-4 mb-10 text-white'>
              <h2>Navbar</h2>
              <input className='border-2' type="text" />
              <div className='flex gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Product</Link>
              </div>
            </div>
    </div>
  )
}

export default Navbar
