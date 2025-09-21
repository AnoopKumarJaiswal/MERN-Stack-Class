import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { A } from './Components/A'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <A />
      <button onClick={() =>{setCount(count + 1)}}>+</button>
      <button onClick={() =>{setCount(0)}}>Reset</button>
      <button onClick={() =>{setCount(count - 1)}}>-</button>
   </div>
  )
}

export default App
