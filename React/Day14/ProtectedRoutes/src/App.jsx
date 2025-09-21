import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes ,Route} from "react-router-dom"
import { About } from './Component/about'
import { Home } from './Component/home'
import { Profile } from './Component/profile'
import { Navbar } from './Component/Navbar'
import { Login } from './Component/Login'
import { Protect } from './ProtectedRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        
        <Route path='/' element = {<Protect />}>

              <Route path='/about' element = {<About />}/>
              <Route path='/home' element = {<Home />}/>
              <Route path='/profile' element = {<Profile />}/>

        </Route>
        
        <Route path='/login' element = {<Login />}/>
      </Routes>
    </div>
  )
}

export default App
