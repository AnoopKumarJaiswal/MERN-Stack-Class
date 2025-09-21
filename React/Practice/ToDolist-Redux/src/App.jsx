import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './Components/Input'
import { Display } from './Components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-between'>
      <Input />
      <Display />
    </div>
  )
}

export default App
