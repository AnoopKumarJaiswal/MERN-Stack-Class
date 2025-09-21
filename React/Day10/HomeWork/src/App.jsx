import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Form} from "./Components/Form"
import {Name} from "./Components/Name"
import { Address } from './Components/Address'
import { Age } from './Components/Age'
import { About } from './Components/About'

function App() {
  const[name, setName] = useState("")
  const[age, setAge] = useState("")
  const[address, setAddress] = useState("")
  const[about, setAbout] = useState("")

  return (
    <div className=' h-[100vh]'>
      <h1 className='text-5xl text-center font-bold'>Input Form Using Lifting State</h1>
      
      
      <div className='flex justify-between p-[50px]'>
      <div className='w-[40vw] flex flex-col items-center justify-center h-[80vh] bg-amber-200 rounded-2xl'>  
      <Form setName= {setName} name = {name}  age= {age} setAge = {setAge} address = {address} setAddress = {setAddress} about = {about} setAbout = {setAbout}/>
      </div>


      <div className='w-[40vw]  h-[80vh] flex flex-col justify-center items-center gap-[10px] bg-amber-100 rounded-2xl'> 
      <Name   name = {name}  setName = {setName}/>
      <Age age={age} />
      <Address address={address} />
      <About about={about} />
      </div>
      </div>
    </div>
  )
}

export default App
