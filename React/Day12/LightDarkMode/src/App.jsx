import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Btn } from './Components/Btn'
import { DarkMode } from './Components/DarkMode'
export const darkLight = createContext()

function App()
 {
   
   const[show , setShow] = useState(true)
  return (
    <darkLight.Provider  value={{show, setShow}}>
   <div className='flex '>
    <Btn />
    <DarkMode />

   {/* <Navbar /> */}
   </div>
  </darkLight.Provider>
  )
}

export default App
