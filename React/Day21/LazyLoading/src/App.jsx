import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
// import One from './Components/one'
// import Two from './Components/two'
// import Three from './Components/three'
import Navbar from './Components/Navbar'
import { lazy , Suspense } from 'react'
const One = lazy(() =>import('./Components/one'))
const Two = lazy(() => import('./Components/two'))
const Three = lazy(() =>import('./Components/three'))

function App() {

  return (
       <div>
        <Navbar />
        <Routes>
          
          <Route path='/one' element = {<Suspense fallback = {<h1>Loading.....</h1>}> 

            <One />
          
          </Suspense>
             } />
          <Route path = '/two' element = {<Suspense fallback = {<p>Uploading.........</p>}>

            <Two />
          
          </Suspense> 
          } />
          <Route path = '/three' element = {
            <Suspense>

              <Three />
            
            </Suspense>
            } />
             
          

        </Routes>
       </div>  
  )
}

export default App
