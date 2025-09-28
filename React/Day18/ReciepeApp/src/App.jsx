import { useState } from 'react'
import './App.css'
import { Form } from './Components/Form'
import { Display } from './Components/Display'
import { Toaster } from "react-hot-toast"

function App() {
  const [selectItem, setSelectItem] = useState("")
  const[aires, setAiRes] = useState({})
  const [showBtn , setShowBtn] = useState(true)

  return (
    <div className="min-h-[100vh] bg-gray-50 flex flex-col  bg-gradient-to-b from-indigo-100 to-white">
      <Toaster />
       <h1 className="text-6xl font-bold text-center mb-6 text-orange-600 drop-shadow-sm">
        🍳 Recipe App </h1>

      {/* Content Area */}
      <main className="flex justify-center items-start gap-6">
        <Form selectItem={selectItem} setSelectItem={setSelectItem}  aires={aires} setAiRes = {setAiRes} showBtn={showBtn} setShowBtn={setShowBtn}/>
        <Display showBtn={showBtn} aires = {aires} selectItem={selectItem} />
      </main>
    </div>
  )
}

export default App
