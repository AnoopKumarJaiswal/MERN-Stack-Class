import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/Nvbar' 
import {Routes, Route} from "react-router-dom"
import { A } from './Components/A'
import { C } from './Components/C'
import { B } from './Components/B'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route  path='/a' element = {<A />}/>
      <Route path='b' element = {<B />} />
      <Route path='c' element = {<C />} />
    </Routes>
    </>
  )
}

export default App
