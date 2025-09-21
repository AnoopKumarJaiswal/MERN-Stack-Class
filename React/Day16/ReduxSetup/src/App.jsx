import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Btn } from './Components/Btn'
import {Display} from "./Components/Display"

function App() {

  return (
    <div className='flex justify-between'>
      <Btn />
      <Display />   
    </div>
  )
}

export default App
