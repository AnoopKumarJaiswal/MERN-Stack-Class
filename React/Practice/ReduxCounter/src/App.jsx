import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Display } from './Componentas/Display'
import { Btn } from './Componentas/Btn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-between'>
      <Btn />
      <Display />
    </div>
    )
}

export default App
