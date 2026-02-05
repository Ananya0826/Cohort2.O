import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
/*
react->ui banana
react-DOM->react or dom ko connect
react-router-dom->
routing:ek page se dusre website pe jana
React router DOM
-install react-router-dom
-in main.jsx import {BrowserRouter} from 'react-router-dom'
-wrap <App/> by BrowserRouter in main.jsx file
*/