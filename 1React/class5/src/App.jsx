import React from 'react'
import { useState } from 'react'
const App = () => {
  const [user,setUser]=useState('anubhav');
  const btnClicked=()=>{
    setUser('hehe');
  }
  return (
    <div>
      <h1>{user}</h1>
      <button onClick={btnClicked}>Change User</button>
    </div>
  )
}
export default App