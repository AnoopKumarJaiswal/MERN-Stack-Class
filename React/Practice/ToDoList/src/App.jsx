import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './Components/Input'
import { Display } from './Components/Display'
export const InputContext = createContext()

function App() {
  const [Items, setItems] = useState([])

  return (
    <InputContext.Provider value={{Items, setItems}}>
    <div className='flex'>
      <Input />
      <Display />
    </div>
    </InputContext.Provider>
  )
}

export default App
