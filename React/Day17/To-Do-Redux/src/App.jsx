import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Display } from './Components/Display'
import { Input } from './Components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <Input />
      <Display />
    </div>
  )
}

export default App
