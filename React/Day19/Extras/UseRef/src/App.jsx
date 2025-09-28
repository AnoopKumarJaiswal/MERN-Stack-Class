import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count = 0
const tempRef = useRef(0)
const [temp, setTemp] = useState("")

  return (
    <div className='flex gap-[10px]'>




     <input className='border' onChange={(e) =>{
      setTemp(e.target.value)
     }} type="text" />
      <div>{tempRef.current}</div>
      <button className='border' onClick={() =>{
        tempRef.current = tempRef.current + 1
        console.log(tempRef.current);
        
      }}>Increment</button>
      <button className='border' onClick={() =>{
        tempRef.current = tempRef.current- 1
        console.log(tempRef.current);
        
      }}>Decrement</button>
    </div>
  )
}





// function App()
// {
//   const inputRef = useRef()


//   useEffect(() =>{
//     inputRef.current.focus()
//   })

//   return (
//      <div>
//       <input id='xyz' ref={inputRef} placeholder='Enter Your Name' type="text" />


//       <button id='hi' onClick={() =>{
//         console.log(inputRef)
//       }}>Hi</button>
//      </div>
//   )
// }


export default App
