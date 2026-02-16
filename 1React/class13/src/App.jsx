import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllSections from './components/AllSections';

const App = () => {
  const courseData={
    courseName:'Cohort2.0',
    instructor:'Sarthak bhaiya',
    mentor:'Anubhav',
    duration:'6 months'
  }
  return (
    <div>
      <Navbar/>
      content
      <AllSections courseData={courseData}/>
      <Footer/>
    </div>
  )
}

export default App
