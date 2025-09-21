import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Btn } from './Components/Btn'
import { Display } from './Components/Display'
export const countContext = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <countContext.Provider value={{count , setCount}}>

    <div className=' border h-[100vh] flex flex-col items-center bg-amber-900 gap-[20px]'>
      <p className='text-6xl text-white font-semibold → 600 '>Counter</p>
      <div className='flex h-[90vh]'>
      <Btn  />
      <Display />
      </div>
    </div>
    </countContext.Provider>
  )
}

export default App
