import { useContext, useState } from 'react'
import './App.css'
import { DemoContext } from './Utils/Example'
import React from 'react'

function App() {
 const {name ,setName} = useContext(DemoContext)
  return (
         <div>
          <p>{name}</p>
         </div>
      )
}

export default App
