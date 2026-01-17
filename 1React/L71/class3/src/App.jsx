import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='p-3 h-screen bg-black'>
      <Card user='ananya' age={30}/>
      <Card user='aadarsh' age={34}/>
    </div>
  )
}
export default App
//map:transforms and returns new array
//filter:filters values and returns them