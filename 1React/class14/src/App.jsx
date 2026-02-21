import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sections from './components/Sections'

const App = () => {
  return (
    <div className='app-div'>
      <Navbar/>
      <Sections><h1>
        Hello</h1></Sections>
      <Footer/>
    </div>
  )
}

export default App
