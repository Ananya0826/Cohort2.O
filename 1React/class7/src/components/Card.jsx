import React from 'react'
const Card = (props) => {
  return (
    <div  className='w-[23vw] py-8 px-8 text-center flex items-center justify-center flex-col bg-white text-black rounded-xl'>
      <img className='h-24 w-24 rounded-full object-center object-cover' src={props.imgURL} alt="" />
<h1 className='text-2xl mt-2 font-bold'>{props.userName}</h1>
<h5 className='text-blue-500 font-semibold text-lg my-3'>{props.userRole}</h5>
<p className='text-sm font-medium leading-tight'>{props.userDesc}</p>

      <button onClick={()=>{
        props.deleteHandler(props.idx)
      }
      } className='px-4 py-2 rounded cursor-pointer active:scale-95 bg-red-600 text-xs text-white font-semibold mt-3'>Remove</button>
    </div>
  )
}

export default Card
