import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OTP from './Components/Otp'
import toast, {Toaster} from "react-hot-toast"

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Toaster />
    <OTP />
   </div>  
   )
}

export default App
