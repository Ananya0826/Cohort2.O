import React from 'react'
import { useState } from 'react';
const App = () => {
  const [userName,setUserName]=useState('');
  const [userRole,setUserRole]=useState('');
  const [imgURL,setImgURL]=useState('');
  const [userDesc,setUserDesc]=useState('');

  const localData=JSON.parse(localStorage.getItem('all-users')) || []

  const [allUsers,setAllUsers]=useState(localData);
  const submitHandler=(e)=>{
    e.preventDefault();

    const oldUsers=[...allUsers];
    oldUsers.push({userName,userRole,userDesc,imgURL})
    setAllUsers(oldUsers);
    localStorage.setItem('all-users',JSON.stringify(oldUsers))

    setUserDesc('');
    setUserRole('');
    setUserName('');
    setImgURL('');
  }
  const deleteHandler=(idx)=>{
    const copyUser=[...allUsers]
    const conf=confirm("Do you really want to delete this user element?")
    if(conf)copyUser.splice(idx,1);
    else alert('User Element Not Deleted!')
    setAllUsers(copyUser);
    localStorage.setItem('all-users',JSON.stringify(copyUser))
    
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}className='flex flex-wrap px-2 py-2'>
        <input 
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value);
        }}
        className='border-2 px-5 py-2 rounded m-2  text-xl font-semibold lg:w-[45%]' 
        type="text" 
        placeholder="Enter Your Name" />
        <input 
        value={imgURL}
        onChange={(e)=>{
          setImgURL(e.target.value);
        }}
        className='border-2 px-5 py-2 rounded m-2  text-xl font-semibold lg:w-[45%]' 
        type="text" 
        placeholder='Image URL' />
        <input 
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value);
        }}
        className='border-2 px-5 py-2 rounded m-2  text-xl font-semibold lg:w-[45%]' 
        type="text" 
        placeholder='Enter Role' />
        <input 
        value={userDesc}
        onChange={(e)=>{
          setUserDesc(e.target.value);
        }}
        className='border-2 px-5 py-2 rounded m-2  text-xl font-semibold lg:w-[45%]' 
        type="text" 
        placeholder='Enter Description' />
        <button className='px-5 py-2 bg-emerald-700 active:scale-95 cursor-pointer rounded m-2 w-[97%]'>Create User</button>
      </form>
      <div className='flex flex-wrap gap-5 p-4'>
        {allUsers.map(function(elem ,idx){
          return <div key={idx} className='w-[23vw] py-8 px-8 text-center flex items-center justify-center flex-col bg-white text-black rounded-xl'>
      <img className='h-24 w-24 rounded-full object-center object-cover' src={elem.imgURL} alt="" />
<h1 className='text-2xl mt-2 font-bold'>{elem.userName}</h1>
<h5 className='text-blue-500 font-semibold text-lg my-3'>{elem.userRole}</h5>
<p className='text-sm font-medium leading-tight'>{elem.userDesc}</p>

      <button onClick={()=>{
        deleteHandler(idx)
      }
      } className='px-4 py-2 rounded cursor-pointer active:scale-95 bg-red-600 text-xs text-white font-semibold mt-3'>Remove</button>
    </div>
        })}
      </div>
    </div>
  )
}
export default App