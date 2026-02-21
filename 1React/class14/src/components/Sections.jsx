import React from 'react'

const Sections = (props) => {
  
  
  return (
    <div className='h-150 bg-zinc-800'>
      <h1  className='text-xl'>All Sections</h1>
      {props.children}
    </div>
  )
}

export default Sections
