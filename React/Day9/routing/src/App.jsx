import { useState } from 'react'
import viteLogo from '/vite.svg'
import "./App.css"
import { Routes , Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Profile } from './Components/Profile'
import { Navbar } from './Components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
         <Route  path='/profile' element ={<Profile />}/>
         <Route path='/About' element ={<About />}/>
         <Route  path='/home' element ={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
