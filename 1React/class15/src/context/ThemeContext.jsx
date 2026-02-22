import React, { createContext } from 'react'
import { useState } from 'react'
export const ThemeDataContext=createContext();
const ThemeContext = (props) => {
    // const [data,setData]=useState();
    const data='Ananya'
  return (
    <div>
        <ThemeDataContext.Provider value={data}>
            {props.children}
        </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
