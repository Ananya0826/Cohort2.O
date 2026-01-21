import React from 'react'

const Navbar = (props) => {
  console.log(props);
  
  return (
    <div style={{backgroundColor:props.color}} className='bg-pink-300 text-black  flex items-center justify-between px-8 py-3 mb-1 '>
      <h1>{props.title}</h1>
      <div className='flex gap-20'>
        {
        props.links.map(function(elem,idx){
          return <h4 key={idx}>{elem}</h4>;
        })}
      </div>
    </div>
  )
}

export default Navbar
