import React, { useState } from 'react'
import { useFormState } from 'react-dom';

const App = () => {
  const [num,setNum]=useState(10);
  const btnClicked=()=>{
    console.log('btn clicked');
    setNum(90);
  }
  return (
    <div>
      <h1>
        {num}
      </h1>
      <button onClick={btnClicked}>Increase</button>
    </div>
  )
}

export default App
 