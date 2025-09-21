import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hp } from './Components/Hp'
import { Shimmer } from './Components/Shimmer'
import { HPtwo } from './Components/Hp2'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {/* <Hp /> */}
    <HPtwo />
    {/* <Shimmer /> */}
   </div>
  )
}

export default App
