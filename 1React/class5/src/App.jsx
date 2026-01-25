import React from 'react'
import { useState } from "react";
const App = () => {
  const [marks,setMarks]= useState([60,55,89,12,29]);
  function graceStudent(){
    const newMarks=marks.map(function(elem){
      return elem<=95?elem+5:elem;
    })
    setMarks(newMarks);
  }
  return (
    <div>
      {marks.map(function(elem,idx){
        return <h1 key={idx}>Student {idx+1} = {elem} ({elem>33?'PASS':'FAIL'})</h1>
      })}
      <button onClick={graceStudent}>Give then grace</button>
    </div>
  )
}
export default App