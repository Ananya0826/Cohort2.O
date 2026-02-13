import React from 'react'
import Navbar from './components/Navbar'
import { Route ,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Kodex from './pages/Kodex'
import AllCourses from './pages/AllCourses'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}>
        <Route path='/courses' element={<AllCourses/>}/>
        <Route path='/courses/kodr' element={<Kodr/>}/>
        <Route path='/courses/kodex' element={<Kodex/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
/*
React-Single Page Applications(URL change hone pe kuch nahi hota tha!)
REACT ROUTER DOM-came to solve this problem
react router dom cotains 2 things-
reactrouter-contains logic
and 
reactrouter dom-history,url,interacts with dom
routes-container
route-if url(path) is x then show y
Types of router:
1.Browser Router:commonly & majorly used
uses history urls of html
used to show the ui very neatly
needs server configurations
good seo
pros:
  uses History API
  url clean
  used in almost every modern web apps
cons:
  when integrated with backend server configurations always asks for index.html file only,hence we need to make index.html file always
2.Hash Router:works like browser routers but url contains hash
  contains hash(#)-e.g.=/courses/#/about
  was used in older browsers 
  no seo
3.Memory Router:
  used when we use React Native n our projects
4.Static Router:
  used in server side rendering.
*/