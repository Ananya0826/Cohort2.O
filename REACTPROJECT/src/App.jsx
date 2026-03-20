import React from 'react'
import "./app.scss"

import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'

const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
      <Resume/>
      <Github/>
      <Note/>
      <Spotify/>
    </main>
  )
}

export default App
