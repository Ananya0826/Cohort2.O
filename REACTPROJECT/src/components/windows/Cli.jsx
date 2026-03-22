import React from 'react'
import MACWindow from './MACWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({windowName, setWindowsState}) => {
  return (
    <MACWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={{
            echo: {
              description: 'Echo a passed string.',
              usage: 'echo <string>',
              fn: (...args) => args.join(' ')
            },
            about: {
              description: 'Display information about me.',
              usage: 'about',
              fn: () => 'Hi! I\'m Ananya Singh, a passionate developer with experience in React, Node.js, and more. Welcome to my portfolio!'
            },
            projects: {
              description: 'List my projects.',
              usage: 'projects',
              fn: () => 'My Projects:\n1. Portfolio Website - Built with React and Vite\n2. Task Manager App - Full-stack app with MERN stack\n3. Weather Dashboard - API integration with React'
            },
            skills: {
              description: 'List my technical skills.',
              usage: 'skills',
              fn: () => 'Skills:\n- Frontend: React, HTML, CSS, JavaScript\n- Backend: Node.js, Express\n- Databases: MongoDB, SQL\n- Tools: Git, VS Code, Docker'
            },
            contact: {
              description: 'Display contact information.',
              usage: 'contact',
              fn: () => 'Contact me:\nEmail: ananya@example.com\nLinkedIn: linkedin.com/in/ananyasingh\nGitHub: github.com/ananyasingh'
            }
          }}
          welcomeMessage={'Welcome to Ananya Singh\'s Portfolio CLI! Type \'help\' to see available commands.'}
          promptLabel={'ananyasingh:~$'}
          promptLabelStyle={{ color: '#00ff00' }}
        />
      </div>
    </MACWindow>
  )
}

export default Cli