import { useState } from "react"

export function Input()
{
    const[items, setItem] = useState([])
    const[text , setText] = useState("")
   return (
    <div>
        <input value={text} onChange={(e) =>{setText(e.target.value)}} className="border m-[200px]"  type="text" />
        <button onClick={() =>{
            setItem([...items , text])
            setText("")

             }} >Add Tsk</button>
      

        {items.map((item) =>
        {
            return <li>{item}</li>
        })}
    </div>
   )
}