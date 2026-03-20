import React from 'react'
import MACWindow from './MACWindow'
import "./resume.scss"
const Resume = () => {
  return (
    <MACWindow>
        <div className="resume-window">
            <embed src="./resume.pdf" frameborder="0"></embed>
        </div>
    </MACWindow>
  )
}

export default Resume
