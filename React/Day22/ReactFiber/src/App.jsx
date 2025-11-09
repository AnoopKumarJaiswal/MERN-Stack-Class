import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <div>{count}</div>
        <button onClick={() =>{
          console.log("Before:", count )
          setCount(count + 1)
          console.log("After:", count )
        }}>Increament</button>
      </div>
    </div>
  )
}

export default App
