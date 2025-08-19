import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App()
// {
//   return (
//     <div>

//     <h1>Hello World</h1>
//     <h2>Hello</h2>
//     <h2>Hello</h2>
//     <h2>Hello</h2>
//     <h2>Hello</h2>
//     </div>
//   )
// }

 
import Demo2 from "./components/Demo2"

function Demo()
{
  return <h1>Hello From Demo function</h1>
}


function  App()
{
  return (
    <>
    <h2>Hello World</h2>
    <h2>Hello World</h2>
    <h2>Hello World</h2>
    <h2>Hello World</h2>
    <h2>Hello World</h2>
    <h2>Hello World</h2>
    {Demo()}
    {Demo2()}
   </>
  )
}
export default App
