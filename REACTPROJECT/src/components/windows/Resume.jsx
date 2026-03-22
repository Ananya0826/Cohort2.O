import React from 'react'
import MACWindow from './MACWindow'
import "./resume.scss"
const Resume = ({windowName, setWindowsState}) => {
  return (
    <MACWindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="resume-window">
            <embed src="./resume.pdf" frameBorder="0"></embed>
        </div>
    </MACWindow>
  )
}

export default Resume
