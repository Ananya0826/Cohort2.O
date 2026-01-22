import React from 'react'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar title='Sheryians' color="red" links={["Home","About","Account","Contact"]}/>
      <Navbar title='Bixi' color="blue" links={["Home","Services","Courses","Contact","Videos"]}/>
      <Navbar title='Hehahahaha' color="green" links={["Home","Product","Men","Women"]}/>
      <Navbar title='Hehah' color="pink" links={["Home","Product","Men","Women"]}/>
    </div>
  )
}

export default App
