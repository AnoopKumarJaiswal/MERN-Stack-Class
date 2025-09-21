import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {A} from "./Components/A"
import { HP } from './Components/HP'


// function App() {
//   const [count, setCount] = useState(0)
//   const[text , setText] = useState("")
  // useEffect(() =>{
  //   console.log("Use effect chale");
    
  // })


  // useEffect(() =>{
  //   console.log("Use Effect 2 chala");
    
  // }, [])



  // useEffect(() =>{
  //   console.log("USe Effect third chla");
    
  // },[text,count])

  // return (
  //   <div  >

  //     <div>
  //       <input className='border' onChange={(e) =>{setText(e.target.value)}} type="text" />
  //       <h1>{text}</h1>
  //     </div>
  //     <div className='border w-[150px] text-right text-3xl'>{count}</div>

  //     <button className='border h-[40px] w-[50px]'  onClick={() =>{setCount(count + 1)}}>+</button>
  //     <button className='border h-[40px] w-[50px]'  onClick={() =>{setCount(0)}}>Reset</button>
  //     <button className='border h-[40px] w-[50px]'  onClick={() =>{setCount(count - 1)}}>-</button>
  //   </div>
  // )




  // useEffect(() =>{
  //   console.log("App");
    
  // },[])

// }



// function App()
// {
//   return (
//     <div>
//      <A />
//     </div>
//   )

// }



function App()
{


  return (
    <div >
      <HP />
    </div>
  )
}

export default App
