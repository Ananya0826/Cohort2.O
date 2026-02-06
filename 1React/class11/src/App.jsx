import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/' element={<Product />} />
      </Routes>
        <Route path='/product/men' element={<Men/>} />
        <Route path='/product/women' element={<Women/>} />
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
Steps to use react-router-dom:
-install react-router-dom
-in main.jsx import {BrowserRouter} from 'react-router-dom'
-wrap <App/> by BrowserRouter in main.jsx file
in App.jsx import { Routes ,Route } from 'react-router-dom'
-make "routes"(collection of all route)and inside routes make "route"
in route mention path (where to go) and element (what to render)

use "Link" by 'react-router-dom' tag to redirect to any specific route 
Make Navbar component as well add it before <Routes> in App.jsx
*/