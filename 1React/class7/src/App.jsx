import React from 'react'
import { useState } from 'react';
import Card from './components/card';
const App = () => {
  const [userName,setUserName]=useState('');
  const [userRole,setUserRole]=useState('');
  const [imgURL,setImgURL]=useState('');
  const [userDesc,setUserDesc]=useState('');
  const [allUsers,setAllUsers]=useState([]);
  const submitHandler=(e)=>{
    console.log(userName,userRole,userDesc,imgURL);
    const oldUsers=[...allUsers];
    setAllUsers([...allUsers,{userName,userRole,userDesc,imgURL}]);
    e.preventDefault();
    setUserDesc('');
    setUserRole('');
    setUserName('');
    setImgURL('');
  }
  const deleteHandler=(idx)=>{
    const copyUser=[...allUsers]
    copyUser.splice(idx,1);
    console.log(copyUser);
    setAllUsers(copyUser);
    
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
          return <Card key={idx} idx={idx} {...elem} deleteHandler={deleteHandler}/>

        })}
      </div>
    </div>
  )
}

export default App

// localStorage.clear()
// to clear local storage data
// key value inputs in setItem
// localStorage.setItem('user','ananya')
// key for getItem
// var user=localStorage.getItem()

// localStorage.removeItem('user')
// JSON.stringify:array/Object->string
// json.parse:string->array/Object