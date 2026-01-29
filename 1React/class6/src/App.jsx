import React from 'react'
import { useState } from 'react';
const App = () => {
  const [name,setName] =useState('');
  const [allUsers,setAllUsers]=useState([]);
  const submitHandler=(e)=>{
    e.preventDefault();
    const oldUsers=[...allUsers];
    oldUsers.push(name);
    setAllUsers(oldUsers);
    setName('');
    console.log(allUsers);
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter your Name' required value={name} onChange={(e)=>{
          setName(e.target.value);
        }}/>
        <button>Submit</button>
      </form>
       {allUsers.map((elem,idx)=>{
        return <h1 key={idx}>{elem}</h1>
       })}
    </div>
  )
}
export default App