import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div className='bg-white border-2 border-red-500 m2 rounded px-1'>
      <h1 className='text-2xl font-semibold'>{props.user}</h1>
    </div>
  )
}

export default Card
