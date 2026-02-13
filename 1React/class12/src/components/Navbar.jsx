import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink 
      to='/'
      className={({isActive})=>({
        color:isActive?'active':'non-active'
      })}
      >
        Home
        </NavLink>
      <NavLink 
      to='/about'
      className={({isActive})=>({
        color:isActive?'active':'non-active'
      })}
      >
        About
        </NavLink>
      <NavLink 
      to='/courses'
      className={({isActive})=>({
        color:isActive?'active':'non-active'
      })}
      >
        Courses
        </NavLink>
    </div>
  )
}

export default Navbar
