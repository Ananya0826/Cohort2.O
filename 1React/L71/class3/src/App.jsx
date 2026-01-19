import React from 'react'
const App = () => {
  const age=21;
  const arr=[10,20,30];
  const user="Ananya"
  return (
    <div>
      {arr.map(function(elem){
        return <h1>{elem} is king</h1>
      })
      }
    </div>
  )
}
export default App
// map,filter,reduce->higher order function