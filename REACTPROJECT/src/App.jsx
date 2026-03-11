import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import MACWindow from './components/windows/MACWindow'
const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
      <MACWindow>
        <h2>hello</h2>
        h1
      </MACWindow>
    </main>
  )
}

export default App
