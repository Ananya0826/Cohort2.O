import React,{useEffect, useState} from 'react'
import MacWindow from "./MACWindow";
import Markdown from "react-markdown"
import "./note.scss";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Note = ({windowName, setWindowsState}) => {
    const [markdown, setMarkdown] = useState(null)
    useEffect(()=>{
        fetch("/note.txt")
        .then(res=>res.text())
        .then(text=>setMarkdown(text))
    })
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className='note-window'>
            {markdown ? <SyntaxHighlighter style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading....wait</p>}
        </div>
    </MacWindow>
  )
}

export default Note
