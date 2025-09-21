import { createContext, useState } from 'react'
import './App.css'
import { Form } from './Components/Form'
import { Display } from './Components/Display'
export const valContext = createContext()

function App() {

  const[items , setItem] = useState([])
  return (
    <valContext.Provider value={{items,setItem }}>

    <div className='flex'>  
      <Form />
      <Display />
    </div>
    </valContext.Provider>
  )
}

export default App
