import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import {A} from "./Components/A"

export const countContext = createContext()


function App() {
  const[count, setCount] = useState(0)
  useEffect(() =>{console.log("App component")})

  // return (

  //   <div>
  //     <A count = {count} />
  //     <button onClick={() =>{setCount(count+1)}}>+</button>
  //     <button onClick={() =>{setCount(0)}}>Reset</button>
  //     <button onClick={() =>{setCount(count-1)}}>-</button>
  //   </div>
  //     )





  return (
    <countContext.Provider value = {count}>
      <div>
      <A  />

      <button onClick={() =>{setCount(count+1)}}>+</button>
      <button onClick={() =>{setCount(0)}}>Reset</button>
      <button onClick={() =>{setCount(count-1)}}>-</button>
      </div>
    </countContext.Provider>
  )
}

export default App
